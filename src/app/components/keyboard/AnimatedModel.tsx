'use client'

import React, { useRef, useEffect, Ref } from 'react'
import { useFrame } from '@react-three/fiber'
import { Model } from './Model'
import { Group } from 'three'
import { useAnimationDisabled } from '@/app/context/AnimationDisabledContext'

// This component uses pure Three.js animation with no React state updates
// This prevents any re-renders during animation that could cause context loss
const AnimatedModel = ({ scale = 0.75 }: { scale?: number }) => {
	// Use context to determine if animations are disabled
	const { animationDisabled } = useAnimationDisabled()

	// Create refs for animation
	const groupRef: Ref<Group | null> = useRef(null)

	// Remove all screen-size-based positioning logic from animationState
	const animationState = useRef({
		time: 0,
		baseY: 0,
	})

	// Set model position to [0, 0, 0] on mount
	useEffect(() => {
		if (groupRef.current) {
			groupRef.current.position.set(0, 0, 0)
		}
	}, []) // Run only once

	// Animation loop using useFrame - this doesn't cause re-renders
	useFrame((_, delta) => {
		if (!groupRef.current) return

		// Always keep keys facing user
		groupRef.current.rotation.x = Math.PI / 2

		if (animationDisabled) return

		// Simple time accumulation
		animationState.current.time += delta

		try {
			const group = groupRef.current

			// Floating animation - simple sine wave
			const floatY = Math.sin(animationState.current.time) * 0.1
			group.position.y = floatY

			// Rotation animation - simple sine wave with offset
			const rotZ = Math.sin(animationState.current.time * 0.5) * 0.1
			group.rotation.z = rotZ
		} catch (error) {
			console.error('Animation error:', error)
		}
	})

	return (
		<>
			<ambientLight intensity={0.8} />
			<directionalLight intensity={1} position={[0, 0, 25]} />
			<group ref={groupRef} scale={scale}>
				<Model />
			</group>
		</>
	)
}

export default AnimatedModel
