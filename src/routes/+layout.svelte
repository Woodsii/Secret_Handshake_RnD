<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AsciiHero from '$lib/components/AsciiHero.svelte';
	import '$lib/styles/style.css';
</script>

<div class="page-wrapper"> 
	<Header />

	<AsciiHero />
	
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