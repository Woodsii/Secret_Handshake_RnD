import { fetchMarkdownPosts } from '$lib/utils/index.js';

export const load = async ({ params }) => {
  const { slug } = params;
  const post = await import(`../${slug}.md`);
  
  return {
    content: post.default,
    meta: post.metadata
  };
};