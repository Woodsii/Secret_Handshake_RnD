<script lang="ts">
  import { Canvas } from '@threlte/core'
  import { page } from '$app/stores';
	import { derived } from 'svelte/store';
  import AsciiSceneHome from './AsciiSceneHome.svelte';
	import AsciiSceneAbout from './AsciiSceneAbout.svelte';
	import AsciiSceneBlog from './AsciiSceneBlog.svelte';
	import AsciiScenePortfolio from './AsciiScenePortfolio.svelte';

  const routeScene = derived(page, ($page) => {
		const path = $page.url.pathname;

    if (/\d$/.test(path)) return null;

		if (path.startsWith('/about')) return AsciiSceneAbout;
		if (path.startsWith('/blog')) return AsciiSceneBlog;
		if (path.startsWith('/portfolio')) return AsciiScenePortfolio;

		// Default to home
		return AsciiSceneHome;
	});
</script>

<div class="hero">
  <Canvas>
    {#if $routeScene}
      <svelte:component this={$routeScene} />
    {/if}
  </Canvas>
</div>

<style>
  .hero {
    width:100%;
    height: 100vh
  }
</style>