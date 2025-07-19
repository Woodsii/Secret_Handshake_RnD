<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './AsciiScene.svelte'
</script>

<div class="hero">
  <Canvas>
    <Scene />
  </Canvas>
</div>

<style>
  .hero {
    width:100%;
    height: 100vh
  }
</style>