import * as React from 'react';
import styled from 'styled-components';
import * as rx from 'rxjs';
import { Canvas } from '@react-three/fiber';
import { Sky, OrbitControls, Html } from '@react-three/drei';
import { Button } from 'antd';

const subject = new rx.Subject();

const behaviorSubject = new rx.BehaviorSubject([]);

const Patterns = () => {
	const { code }: { code: string[] } = require('./code.json');
	console.log(code);
	return (
		<>
			<div className="layout">
				<div className="content">
					<h2>Collection of patterns and ideas</h2>
				</div>
				{code.map((line, index) => (
					<p key={index}>{line}</p>
				))}

				<div>
					{/* <Canvas
						camera={{ position: [15, 25, 15] }}
						style={{ height: '40rem', border: 'solid 1px orange' }}>
						<color attach="background" args={['black']} />
						<Sky azimuth={1} inclination={0.6} distance={1000} />
						<ambientLight intensity={0.51} />
						<pointLight position={[10, 10, 10]} />
						<React.Suspense fallback={null}>
							<pointLight position={[30, 0, 0]} color="blue" intensity={10} />

							<Html>
								<div
									style={{
										margin: 0,
										// textAlign: 'center',
										transform: 'translate(-48%, -50%)',
										// color: 'white',
										// letterSpacing: '54px',
										// fontFamily: 'Space Age',
										// fontSize: '256px',
										// pointerEvents: 'none',
									}}>
									<Button
										type="link"
										style={{
											// margin: 0,
											textAlign: 'center',
											// transform: 'translate(-48%, -50%)',
											color: 'white',
											letterSpacing: '54px',
											fontFamily: 'Space Age',
											fontSize: '256px',
											// pointerEvents: 'none',
										}}>
										☻
									</Button>
								</div>
							</Html>
						</React.Suspense>
						<OrbitControls
							minPolarAngle={Math.PI / 10}
							maxPolarAngle={Math.PI / 1.5}
						/>
					</Canvas> */}
				</div>
			</div>
		</>
	);
};

export default Patterns;

// const DIMENSIONS = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// };
