export const dynamic = 'force-dynamic';

import Header from '@/components/Header';
import FeaturesSection from '@/components/FeaturesSection';
import ScrollingBanner from '@/components/ScrollingBanner';
import LatestBlogsSection from '@/components/LatestBlogsSection';
import CMSPagesSection from '@/components/CMSPagesSection';
import FooterCTA from '@/components/FooterCTA';
import { getAllPosts } from '@/lib/notion';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="overflow-hidden">
      <Header />
      <FeaturesSection />
      <ScrollingBanner />
      <LatestBlogsSection posts={posts} />
      <CMSPagesSection />
      <FooterCTA />
    </main>
  );
}
