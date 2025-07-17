<script lang="ts">
	let { data } = $props();
</script>

<h1>Blog</h1>

<p> 
	This is going to be my blog in a bit!
</p>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>