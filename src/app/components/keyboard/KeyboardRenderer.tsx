import React from 'react'
import { Canvas, CanvasProps } from '@react-three/fiber'
import AnimatedModel from './AnimatedModel'

export const KeyboardRenderer = React.memo(() => {
	const canvasProps: CanvasProps = {
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
	}

	return (
		<div className='h-1/4 lg:h-full w-full overflow-hidden'>
			<Canvas {...canvasProps} camera={{ position: [0, 0, 6] }}>
				<AnimatedModel />
			</Canvas>
		</div>
	)
})

KeyboardRenderer.displayName = 'KeyboardRenderer'
export default KeyboardRenderer
