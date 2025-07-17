<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.css';
</script>

<div class="page-wrapper"> 
	<Header />

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