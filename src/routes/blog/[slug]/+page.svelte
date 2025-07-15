<script>
	export let data;
</script>

<a href="/blog">back to blogs</a>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>

