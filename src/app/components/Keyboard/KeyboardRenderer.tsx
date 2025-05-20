'use client'

import React, { Suspense, useState, useEffect, useRef, useMemo } from 'react'
import { Canvas, CanvasProps } from '@react-three/fiber'
import AnimatedModel from './AnimatedModel'

// Create a memoized renderer to prevent unnecessary re-renders
const KeyboardRenderer = React.memo(() => {
	// Create a stable reference for the Canvas element
	const canvasRef = useRef<HTMLCanvasElement>(null)

	// Create a stable state for visibility and rendering
	const [ready, setReady] = useState(false)

	// Only set ready once, never change it again
	useEffect(() => {
		// Small delay to ensure the DOM is ready
		const timer = setTimeout(() => {
			setReady(true)
		}, 500)

		return () => clearTimeout(timer)
	}, []) // Empty dependency array means this runs once

	// Create stable Canvas properties as a memoized object
	const canvasProps: CanvasProps = useMemo(
		() => ({
			style: {
				zIndex: 0,
				position: 'absolute',
				top: 0,
				left: 0,
			},
			gl: {
				alpha: true,
				antialias: true,
				preserveDrawingBuffer: true,
				powerPreference: 'default',
				depth: true,
				stencil: false,
			},
			dpr: 1, // Fixed lower DPR to reduce memory usage
			frameloop: 'always', // Always run the animation frame
		}),
		[]
	) // Empty dependency array means this never changes

	// If not ready, render nothing
	if (!ready) return null

	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				overflow: 'hidden',
			}}
		>
			<Suspense fallback={null}>
                <Canvas ref={canvasRef} {...canvasProps}>
                    <AnimatedModel />
                </Canvas>
			</Suspense>
		</div>
	)
})

KeyboardRenderer.displayName = 'KeyboardRenderer';

export default KeyboardRenderer
