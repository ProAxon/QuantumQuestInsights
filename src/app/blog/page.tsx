export const dynamic = 'force-dynamic';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import FooterCTA from '@/components/FooterCTA';
import { getAllPosts } from '@/lib/notion';

const formatDate = (value?: string) => {
  if (!value) return '';
  try {
    return new Date(value).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return value;
  }
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative py-20 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
            INSIGHTS &amp; PERSPECTIVES
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Latest From Our Blog
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Expert analysis, market trends, and strategic insights to help you navigate the evolving technology landscape.
          </p>
        </div>
      </section>

      <section className="flex-grow px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => {
              const imageSrc =
                post.image ||
                post.coverImage ||
                'https://cdn.mos.cms.futurecdn.net/R8Bfi2Thwq7cnTabi4J2pE-1200-80.jpg.webp';
              const excerpt =
                post.excerpt ||
                post.description ||
                'Read the full insight to learn more about this topic.';

              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="block"
                >
                  <article className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 group cursor-pointer">
                    <div className="h-56 overflow-hidden">
                      <img
                        src={imageSrc}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-3">
                      <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase">
                        {post.category || 'Insights'}
                      </span>
                      <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-slate-300 text-sm flex-grow">{excerpt}</p>
                      <div className="flex justify-between items-center text-sm text-slate-500">
                        <span className="text-black">{formatDate(post.date)}</span>
                        <span className="text-cyan-300">Read More →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}

