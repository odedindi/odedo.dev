"use client";

// inspired by https://github.com/mrdoob/three.js/blob/master/examples/webgl_lines_colors.html
import * as THREE from "three";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";

// Hilbert3D function adapted from THREE.js GeometryUtils
function hilbert3D(
	center = new THREE.Vector3(0, 0, 0),
	size = 10,
	iterations = 1,
	order = [0, 1, 2, 3, 4, 5, 6, 7],
): THREE.Vector3[] {
	const half = size / 2;
	const points = [
		new THREE.Vector3(center.x - half, center.y - half, center.z - half),
		new THREE.Vector3(center.x - half, center.y - half, center.z + half),
		new THREE.Vector3(center.x - half, center.y + half, center.z + half),
		new THREE.Vector3(center.x - half, center.y + half, center.z - half),
		new THREE.Vector3(center.x + half, center.y + half, center.z - half),
		new THREE.Vector3(center.x + half, center.y + half, center.z + half),
		new THREE.Vector3(center.x + half, center.y - half, center.z + half),
		new THREE.Vector3(center.x + half, center.y - half, center.z - half),
	];

	const vec = order.map((i) => points[i]);
	const [v0, v1, v2, v3, v4, v5, v6, v7] = order;
	if (--iterations >= 0) {
		return [
			...hilbert3D(vec[0], half, iterations, [v0, v3, v2, v1, v7, v6, v5, v4]),
			...hilbert3D(vec[1], half, iterations, [v0, v7, v6, v1, v3, v2, v5, v4]),
			...hilbert3D(vec[2], half, iterations, [v0, v7, v6, v1, v2, v5, v4, v3]),
			...hilbert3D(vec[3], half, iterations, [v2, v3, v0, v1, v6, v7, v4, v5]),
			...hilbert3D(vec[4], half, iterations, [v2, v3, v0, v1, v4, v5, v6, v7]),
			...hilbert3D(vec[5], half, iterations, [v4, v3, v2, v5, v6, v1, v0, v7]),
			...hilbert3D(vec[6], half, iterations, [v4, v3, v2, v5, v0, v1, v6, v7]),
			...hilbert3D(vec[7], half, iterations, [v6, v5, v2, v1, v0, v3, v4, v7]),
		];
	}

	return vec;
}

export default function HilbertLinesScene() {
	const linesRef = useRef<THREE.Group>(null);
	const { pointer, viewport } = useThree();
	// const [lines, setLines] = useState<THREE.Line[]>([]);

	// Create Hilbert curve points
	const hilbertPoints = useMemo(
		() =>
			hilbert3D(new THREE.Vector3(0, 0, 0), 200.0, 1, [0, 1, 2, 3, 4, 5, 6, 7]),
		[],
	);

	// Generate Lines
	const lines = useMemo(() => {
		const subdivisions = 4;
		const tempLines = [];
		const color = new THREE.Color();
		const spline = new THREE.CatmullRomCurve3(hilbertPoints);

		const createLine = (vertices: number[], colors: number[]) => {
			const geometry = new THREE.BufferGeometry();
			geometry.setAttribute(
				"position",
				new THREE.Float32BufferAttribute(vertices, 3),
			);
			geometry.setAttribute(
				"color",
				new THREE.Float32BufferAttribute(colors, 3),
			);

			return new THREE.Line(
				geometry,
				new THREE.LineBasicMaterial({ color: 0xffffff, vertexColors: true }),
			);
		};

		// Generate different lines
		for (let lineSet = 0; lineSet < 6; lineSet++) {
			const vertices: number[] = [];
			const colors: number[] = [];
			const point = new THREE.Vector3();

			if (lineSet < 5) {
				for (let i = 0; i < hilbertPoints.length * subdivisions; i++) {
					const t = i / (hilbertPoints.length * subdivisions);
					spline.getPoint(t, point);
					vertices.push(point.x, point.y, point.z);

					color.setHSL(
						lineSet === 0
							? 0.6
							: lineSet === 1
								? 0.9
								: i / (hilbertPoints.length * subdivisions),
						1.0,
						Math.max(0, lineSet === 0 ? -point.x / 200 : -point.y / 200) + 0.25,
					);

					colors.push(color.r, color.g, color.b);
				}
			} else {
				for (let i = 0; i < hilbertPoints.length; i++) {
					const { x } = hilbertPoints[i];
					vertices.push(x, hilbertPoints[i].y, hilbertPoints[i].z);

					color.setHSL(
						lineSet === 3
							? 0.6
							: lineSet === 4
								? 0.3
								: i / hilbertPoints.length,
						1.0,
						Math.max(0, (200 - x) / 400) * 0.5 + 0.25,
					);

					colors.push(color.r, color.g, color.b);
				}
			}

			const line = createLine(vertices, colors);
			const d = 250;

			line.scale.set(0.5, 0.5, 0.5);
			line.position.set(
				((lineSet % 3) - 1) * d,
				(lineSet < 3 ? -1 : 1) * (d / 2),
				0,
			);

			tempLines.push(line);
		}

		return tempLines;
	}, [hilbertPoints]);

	useFrame(({ camera, scene }) => {
		if (!linesRef.current) return;

		// Move camera based on pointer position
		camera.position.x +=
			((pointer.x * viewport.width) / 2 - camera.position.x) * 0.05;
		camera.position.y +=
			((-pointer.y * viewport.height) / 2 + 200 - camera.position.y) * 0.05;
		camera.lookAt(scene.position);

		// Rotate lines
		const time = Date.now() * 0.000125;
		linesRef.current.children.forEach((object, i) => {
			object.rotation.y = time * (i % 2 ? 1 : -1);
		});
	});

	return (
		<group ref={linesRef}>
			{lines.map((line, i) => (
				<primitive key={i} object={line} />
			))}
		</group>
	);
}
