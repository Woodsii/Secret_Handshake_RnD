<script>
  import { T, useTask } from '@threlte/core'
  import { interactivity, AsciiRenderer } from '@threlte/extras'
  import { Spring } from 'svelte/motion'

  interactivity()
  const scale = new Spring(1)

  let rotation = $state(0)
  useTask((delta) => {
    rotation += delta
  })
</script>

<AsciiRenderer fgColor="#00FF00" bgColor="#000000" characters=" .:-+*=%@#" onstart={() => console.log('Started!')}>
  <T.Mesh 
        rotation.y={rotation}
        position.y={1}
        scale={scale.current}
        onpointerenter={() => {
            scale.target = 1.5
        }}
        onpointerleave={() => {
            scale.target = 1
        }}
        castShadow
    >
        <T.BoxGeometry args={[1, 2, 1]} />
        <T.MeshStandardMaterial color="#00FF00" />
    </T.Mesh>

    <T.Mesh
      rotation.x={-Math.PI / 2}
      receiveShadow
    >
      <T.CircleGeometry args={[4, 40]} />
      <T.MeshStandardMaterial color="white" />
    </T.Mesh>
</AsciiRenderer>

<T.AmbientLight intensity={0.5} />

 <T.DirectionalLight 
      position={[0, 10, 10]} 
      castShadow
  />

  <T.PerspectiveCamera
    makeDefault
    position={[5, 1, 5]}
    oncreate={(ref) => {
      ref.lookAt(0, 1, 0)
    }}
  />


