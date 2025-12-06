export const dynamic = 'force-dynamic';

import { getPostBySlug, getWordCount } from "@/lib/notion";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { ResolvingMetadata } from "next";
import { Badge } from "@/components/ui/badge";
import { calculateReadingTime } from "@/lib/utils";
import { components } from "@/components/mdx-component";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Navigation from "@/components/Navigation";
import FooterCTA from "@/components/FooterCTA";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: PostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-site.com";

  return {
    title: post.title,
    description: post.description || post.excerpt,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description || post.excerpt,
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date ? new Date(post.date).toISOString() : undefined,
      authors: post.author ? [post.author] : [],
      tags: post.tags,
      images: [
        {
          url: post.coverImage || post.image || `${siteUrl}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description || post.excerpt,
      images: [
        {
          url: post.coverImage || post.image || `${siteUrl}/opengraph-image.png`,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const wordCount = post.content ? getWordCount(post.content) : 0;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-site.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description || post.excerpt,
    image: post.coverImage || post.image || `${siteUrl}/opengraph-image.png`,
    datePublished: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    author: {
      "@type": "Person",
      name: post.author || "Guest Author",
    },
    publisher: {
      "@type": "Organization",
      name: "Quantum Quest",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <article className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
          {post.coverImage || post.image ? (
            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.coverImage || post.image || ''}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          <header className="mb-8">
            <div className="flex items-center gap-4 text-slate-400 mb-4 text-sm">
              {post.date && (
                <time>{format(new Date(post.date), "MMMM d, yyyy")}</time>
              )}
              {post.author && <span>By {post.author}</span>}
              {wordCount > 0 && (
                <>
                  <span>{calculateReadingTime(wordCount)}</span>
                  <span>{wordCount} words</span>
                </>
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              {post.title}
            </h1>

            <div className="flex gap-4 mb-4 flex-wrap">
              {post.category && (
                <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  {post.category}
                </Badge>
              )}
              {post.tags &&
                post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-cyan-500/30 text-cyan-300">
                    {tag}
                  </Badge>
                ))}
            </div>
          </header>

          <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-cyan-400 prose-strong:text-white prose-code:text-cyan-300 prose-pre:bg-neutral-900/50">
            {post.content ? (
              <ReactMarkdown
                components={components}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {post.content}
              </ReactMarkdown>
            ) : (
              <div className="text-slate-300">
                <p>{post.excerpt || post.description || "Content coming soon..."}</p>
              </div>
            )}
          </div>
        </article>
      </div>

      <FooterCTA />
    </div>
  );
}
