'use client'

import React, { useRef, useEffect, Ref } from 'react'
import { useFrame } from '@react-three/fiber'
import { Model } from './Model'
import { Group } from 'three'

// This component uses pure Three.js animation with no React state updates
// This prevents any re-renders during animation that could cause context loss
const AnimatedModel = () => {
	// Create refs for animation
	const groupRef: Ref<Group|null> = useRef(null)

	// Create animation state in ref to avoid re-renders
	const animationState = useRef({
		time: 0,
		baseY: 0,
		basePosition: [0, 0, 0],
		screenSize: 'md',
	})

	// Determine the base position based on screen size just once
	useEffect(() => {
		// Update position based on screen size
		const updatePosition = () => {
			const positions: { [key: string]: number[] } = {
				xl: [2.25, 1.15, 0],
				lg: [0, -0.6, 0],
				sm: [0, -1, -3],
			}

			let size = 'sm'
			if (window.innerWidth >= 1280) {
				size = 'xl'
			} else if (window.innerWidth >= 1024) {
				size = 'lg'
			}

			// Only update state in the ref, not React state
			animationState.current.basePosition = positions[size]
			animationState.current.baseY = positions[size][1]
			animationState.current.screenSize = size

			// Immediately apply position
			if (groupRef.current) {
				groupRef.current.position.x = positions[size][0]
				groupRef.current.position.y = positions[size][1]
				groupRef.current.position.z = positions[size][2]
			}
		}

		// Initial position
		updatePosition()

		// Add resize listener
		window.addEventListener('resize', updatePosition)

		// Cleanup
		return () => window.removeEventListener('resize', updatePosition)
	}, []) // Run only once

	// Animation loop using useFrame - this doesn't cause re-renders
	useFrame((_, delta) => {
		if (!groupRef.current) return

		// Simple time accumulation
		animationState.current.time += delta

		try {
			// Get reference to the group
			const group = groupRef.current

			// Floating animation - simple sine wave
			const floatY = Math.sin(animationState.current.time) * 0.1
			group.position.y = animationState.current.baseY + floatY

			// Rotation animation - simple sine wave with offset
			const rotZ = Math.sin(animationState.current.time * 0.5) * 0.1
			group.rotation.z = rotZ

			// Keep keys facing user
			group.rotation.x = Math.PI / 2
		} catch (error) {
			console.error('Animation error:', error)
		}
	})

	return (
		<>
			<ambientLight intensity={0.7} />
			<directionalLight intensity={1.2} position={[0, 0, 25]} />
			<group
				ref={groupRef}
				rotation={[Math.PI / 2, 0, 0]} // Initial rotation
				scale={0.75}
			>
				<Model />
			</group>
		</>
	)
}

export default AnimatedModel
