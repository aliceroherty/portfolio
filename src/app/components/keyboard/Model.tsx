/* eslint-disable react/display-name */
'use client'

import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';

// Set DRACO path config and use an absolute path
// This prevents path resolution issues
const MODEL_PATH = '/keyboard.glb'

export const Model = React.memo(() => {
	const { nodes, materials } = useGLTF(MODEL_PATH)
	return (
			<group rotation={[-Math.PI / 2, 0, 0]} >
				<mesh
					geometry={(nodes.Cube001 as THREE.Mesh).geometry as THREE.BufferGeometry}
					material={materials.PaletteMaterial002}
				/>
				<mesh
					geometry={(nodes.Cube001_1 as THREE.Mesh).geometry as THREE.BufferGeometry}
					material={materials.PaletteMaterial003}
				/>
				<mesh
					geometry={(nodes.Cube001_2 as THREE.Mesh).geometry}
					material={materials.PaletteMaterial001}
				/>
			</group>
	)
})

// Preload the model with the same path
useGLTF.preload(MODEL_PATH)
