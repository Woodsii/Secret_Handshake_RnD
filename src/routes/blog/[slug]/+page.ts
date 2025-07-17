import { getOnePost } from '$lib/utils/index';

export const load = async ({ params }: {params: any}) => {
  const { slug } = params;
  const post = await import(`../${slug}.md`);

  return {
    component: post.default,
    meta: post.metadata
  };
};