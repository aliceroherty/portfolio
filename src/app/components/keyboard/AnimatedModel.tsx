'use client'

import React, { useRef, useEffect, Ref } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Model } from './Model'
import { Group } from 'three'
import { useAnimationDisabled } from '@/app/context/AnimationDisabledContext'

const AnimatedModel = () => {
	const { animationDisabled } = useAnimationDisabled()
	const { viewport } = useThree()
	const groupRef: Ref<Group | null> = useRef(null)

	const animationState = useRef({
		time: 0,
	})

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
			<group ref={groupRef} scale={viewport.width / 11}>
				<Model />
			</group>
		</>
	)
}

export default AnimatedModel
