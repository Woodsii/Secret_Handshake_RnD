<script lang='ts'>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AsciiHero from '$lib/components/AsciiHero.svelte';
	import '$lib/styles/style.css';

	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	let render: Boolean = $state(true);

  const routeScene = derived(page, ($page) => {
		const path = $page.url.pathname;
		
    	if (/\d$/.test(path)) {
			render = false;
		}
	});
</script>

<div class="page-wrapper"> 
	<Header />

	{#if render}
	<AsciiHero />
	{/if}
	
	<main>
		<slot></slot>
	</main>

	<footer>
		<Footer />
	</footer>
</div>

<style>
	.page-wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #121212; 
        color: #d8b4f8; 
		font-family: "Figtree";
	}

	main {
		flex: 1;
	}
</style>