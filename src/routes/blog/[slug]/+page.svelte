<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const Post = data.component;
</script>

<a href="/blog">back to blogs</a>

<article>
	<h1>{data.meta.title}</h1>
	<p>Published: {data.meta.date}</p>

	<svelte:component this={Post} />
</article>
