'use client'

import React, { Suspense, useState, useEffect, useRef, useMemo } from 'react'
import { Canvas, CanvasProps } from '@react-three/fiber'
import AnimatedModel from './AnimatedModel'

type CanvasStyleAndScale = [React.CSSProperties, number]
function getCanvasStyleAndScale(): CanvasStyleAndScale {
	if (typeof window !== 'undefined') {
		if (window.innerWidth >= 1280) {
			return [
				{
					position: 'absolute',
					top: '0',
					left: 'auto',
					right: '10vw',
					width: '75vw',
					height: '75vh',
					maxWidth: '1200px',
					minWidth: '400px',
					overflow: 'hidden',
					transform: 'translateY(-5vh)',
				},
				1.2,
			]
		} else if (window.innerWidth >= 1024) {
			return [
				{
					position: 'absolute',
					top: '0',
					left: 'auto',
					right: '5vw',
					width: '85vw',
					height: '70vh',
					maxWidth: '900px',
					minWidth: '350px',
					overflow: 'hidden',
					transform: 'translateY(-7vh)',
				},
				1.1,
			]
		} else {
			return [
				{
					position: 'absolute',
					top: '0',
					left: '0',
					width: '100vw',
					height: '50vh',
					maxWidth: '100vw',
					minWidth: '0',
					overflow: 'hidden',
					transform: 'translateY(28vh)',
				},
				0.85,
			]
		}
	}
	return [
		{
			position: 'absolute',
			top: '0',
			left: '0',
			width: '100%',
			height: '75vh',
			overflow: 'hidden',
			transform: 'translateY(-5vh)',
		},
		1.1,
	]
}

const KeyboardRenderer = React.memo(() => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [ready, setReady] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setReady(true)
		}, 500)
		return () => clearTimeout(timer)
	}, [])

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
			dpr: [1, 2],
			frameloop: 'always',
		}),
		[]
	)

	const [canvasStyle, setCanvasStyle] = useState<React.CSSProperties>(
		() => getCanvasStyleAndScale()[0]
	)
	const [modelScale, setModelScale] = useState<number>(
		() => getCanvasStyleAndScale()[1]
	)

	useEffect(() => {
		const handleResize = () => {
			const [style, scale] = getCanvasStyleAndScale()
			setCanvasStyle(style)
			setModelScale(scale)
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	if (!ready) return null

	return (
		<div style={canvasStyle}>
			<Suspense fallback={null}>
				<Canvas
					ref={canvasRef}
					{...canvasProps}
					camera={{ position: [0, 0, 6] }}
				>
					<AnimatedModel scale={modelScale} />
				</Canvas>
			</Suspense>
		</div>
	)
})

KeyboardRenderer.displayName = 'KeyboardRenderer'

export default KeyboardRenderer
