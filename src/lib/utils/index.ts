export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	console.log(allPosts);

	return allPosts;
};

export const getOnePost = async (filePath: string) => {
	const allPosts = await fetchMarkdownPosts();

	for (let post of allPosts) {
		if (post.path == filePath){
			return post
		}
	}

	return { path: "blog/not-found" }
}