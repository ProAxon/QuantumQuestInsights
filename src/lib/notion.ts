import type { Client } from '@notionhq/client';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { NotionToMarkdown } from 'notion-to-md';
import { cache } from 'react';

const notionToken = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notionConfigured = Boolean(notionToken && notionDatabaseId);

if (!notionConfigured) {
  console.warn(
    '[notion] Missing NOTION_TOKEN or NOTION_DATABASE_ID env vars. Blog routes will fall back to static placeholders.'
  );
}

let notion: Client | null = null;
let n2m: NotionToMarkdown | null = null;
let clientsInitialized = false;

async function initializeClients() {
  if (!notionConfigured || clientsInitialized) {
    return;
  }

  try {
    const { Client } = await import('@notionhq/client');
    const { NotionToMarkdown } = await import('notion-to-md');

    notion = new Client({ auth: notionToken! });
    n2m = new NotionToMarkdown({ notionClient: notion });
    clientsInitialized = true;
  } catch (error) {
    console.warn('[notion] Failed to initialize Notion client. Falling back to placeholders.', error);
    notion = null;
    n2m = null;
  }
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  coverImage?: string;
  image?: string;
  excerpt?: string;
  description?: string;
  date?: string;
  content?: string;
  author?: string;
  tags?: string[];
  category?: string;
}

const placeholderPosts: Post[] = [
  {
    id: 'placeholder-1',
    title: 'Bring your Notion credentials to enable live posts',
    slug: 'setup-notion-blog-feed',
    excerpt:
      'Set NOTION_TOKEN and NOTION_DATABASE_ID env vars, then restart the app to stream real posts directly from Notion.',
    date: new Date().toISOString(),
    image:
      'https://cdn.mos.cms.futurecdn.net/R8Bfi2Thwq7cnTabi4J2pE-1200-80.jpg.webp',
    category: 'Setup',
  },
];

const fetchPublishedPages = cache(async () => {
  if (!notionConfigured) {
    return [];
  }

  await initializeClients();

  if (!notion) {
    return [];
  }

  const response = await notion.databases.query({
    database_id: notionDatabaseId!,
    filter: {
      and: [
        {
          property: 'Status',
          status: { equals: 'Published' },
        },
      ],
    },
    sorts: [
      {
        property: 'Published Date',
        direction: 'descending',
      },
    ],
  });

  return response.results as PageObjectResponse[];
});

function generateSlug(title: string) {
  return (
    title
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'untitled'
  );
}

async function mapPageToPost(page: PageObjectResponse): Promise<Post> {
  if (!n2m) {
    return {
      id: page.id,
      title: 'Notion not configured',
      slug: 'notion-not-configured',
      excerpt: 'Set NOTION_TOKEN and NOTION_DATABASE_ID to view real posts.',
    };
  }

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const { parent: contentString } = n2m.toMarkdownString(mdBlocks);

  const paragraphs = contentString
    .split('\n')
    .filter((line) => line.trim().length > 0);
  const firstParagraph = paragraphs[0] || '';
  const description =
    firstParagraph.slice(0, 160) + (firstParagraph.length > 160 ? '...' : '');

  const properties: any = page.properties ?? {};
  const title = properties?.Title?.title?.[0]?.plain_text || 'Untitled';
  
  // Extract Featured Image from files array
  const featuredImageProperty = properties?.['Featured Image'];
  let coverImage: string | undefined = undefined;
  
  if (featuredImageProperty?.type === 'files' && featuredImageProperty.files?.length > 0) {
    const file = featuredImageProperty.files[0];
    if (file.type === 'file' && file.file?.url) {
      coverImage = file.file.url;
    } else if (file.type === 'external' && file.external?.url) {
      coverImage = file.external.url;
    }
  } else if (featuredImageProperty?.type === 'url' && featuredImageProperty.url) {
    coverImage = featuredImageProperty.url;
  }

  return {
    id: page.id,
    title,
    slug: generateSlug(title),
    coverImage,
    image: coverImage,
    excerpt: description,
    description,
    date: properties?.['Published Date']?.date?.start || new Date().toISOString(),
    content: contentString,
    author: properties?.Author?.people?.[0]?.name,
    tags: properties?.Tags?.multi_select?.map((tag: any) => tag.name) || [],
    category: properties?.Category?.select?.name,
  };
}

export const getAllPosts = cache(async (): Promise<Post[]> => {
  if (!notionConfigured) {
    return placeholderPosts;
  }

  await initializeClients();

  if (!notion) {
    return placeholderPosts;
  }

  const pages = await fetchPublishedPages();
  if (!pages.length) {
    return placeholderPosts;
  }

  return Promise.all(pages.map((page) => mapPageToPost(page)));
});

export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) ?? null;
});

export function getWordCount(content: string): number {
  const cleanText = content
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleanText.split(" ").length;
}

