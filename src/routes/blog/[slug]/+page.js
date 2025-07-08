import { fetchMarkdownPosts } from '$lib/utils/index.js';

export const load = async () => {
  const posts = await fetchMarkdownPosts();

  const sortedPosts = posts.sort((a, b) =>
    new Date(b.meta.date) - new Date(a.meta.date)
  );

  return {
    posts: sortedPosts
  };
};