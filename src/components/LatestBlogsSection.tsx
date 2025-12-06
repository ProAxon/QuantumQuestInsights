// src/components/LatestBlogsSection.tsx
import Link from 'next/link';
import type { Post } from '@/lib/notion';

const formatDate = (value?: string) => {
  if (!value) return '';
  try {
    return new Date(value).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch (error) {
    return value;
  }
};

type LatestBlogsSectionProps = {
  posts?: Post[];
};

const LatestBlogsSection = ({ posts = [] }: LatestBlogsSectionProps) => {
  const featuredPosts = posts.slice(0, 3);

  return (
    <section className="px-6 lg:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <p className="text-orange-300 text-xs font-semibold tracking-[0.3em] uppercase">
              Insights
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Fresh perspectives from the Aurexa Strategy Lab
            </h2>
            <p className="text-slate-200 mt-3 max-w-2xl">
              Curated highlights from our research library covering emerging tech,
              market intelligence, and growth playbooks.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white font-semibold border border-white/30 rounded-full px-6 py-3 hover:bg-white/10 transition"
          >
            View all insights →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => {
            const imageSrc =
              post.image ||
              post.coverImage ||
              'https://cdn.mos.cms.futurecdn.net/R8Bfi2Thwq7cnTabi4J2pE-1200-80.jpg.webp';
            const excerpt =
              post.excerpt ||
              post.description ||
              'Tap through for the complete perspective.';

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <article className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-white/40 hover:-translate-y-1 transition duration-300 cursor-pointer">
                  <div className="overflow-hidden rounded-xl h-48">
                    <img
                      src={imageSrc}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <span className="text-cyan-200 text-xs font-semibold tracking-[0.2em] uppercase">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-200 text-sm flex-grow">{excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span className="text-black">{formatDate(post.date)}</span>
                    <span className="text-cyan-200 font-semibold hover:text-teal-200 transition">
                      Read insight →
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogsSection;

