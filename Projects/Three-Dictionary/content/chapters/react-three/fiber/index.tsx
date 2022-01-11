import * as React from 'react';
import styled from 'styled-components';
/*
 
Build your scene declaratively with re-usable, self-contained components that react to state, are readily interactive and can participate in React's ecosystem.

npm install three @react-three/fiber
Does it have limitations?
None. Everything that works in Threejs will work here without exception.

Is it slower than plain Threejs?
No. There is no overhead. Components render outside of React. It outperforms Threejs in scale due to Reacts scheduling abilities.

Can it keep up with frequent feature updates to Threejs?
Yes. It merely expresses Threejs in JSX: <mesh /> becomes new THREE.Mesh(), and that happens dynamically. If a new Threejs version adds, removes or changes features, it will be available to you instantly without depending on updates to this library.


 ```
	import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

ReactDOM.render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>,
  document.getElementById('root'),
) 

 ```
 
 
 */

export const Chapter = () => {
	return (
		<div style={{ overflow: 'auto', height: '100%' }}>
			<Article>
				<Title></Title>
				<P> </P>
				<P></P>
			</Article>

			<Divider />
			<Article>
				<Title>Examples</Title>
				<Code></Code>
				<P></P>
				<P></P>
				<Code></Code>
			</Article>
		</div>
	);
};

const Title = styled.h2`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.primary};
	margin: 0;
	padding: 0 0.5rem;
`;

const P = styled.p`
	font-size: 0.7rem;
	letter-spacing: 0.2rem;
	margin: 0;
	padding: 0.125rem;
`;

const Code = styled.p`
	font-weight: lighter;
	color: orange;
	margin: 0;
	padding: 0;
`;
const Article = styled.article`
	padding: 0.25rem 2rem;
`;

const Divider = styled.span`
	width: max-content;
	height: 1rem;
	padding: 0 1rem;
	background: gray;
`;
