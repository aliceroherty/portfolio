'use client'
import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useMemo,
} from 'react'

interface AnimationDisabledContextType {
	animationDisabled: boolean
	setAnimationDisabled: (value: boolean) => void
}

const AnimationDisabledContext = createContext<
	AnimationDisabledContextType | undefined
>(undefined)

export const AnimationDisabledProvider = ({
	children,
	initialDisabled = false,
}: {
	readonly children: ReactNode
	readonly initialDisabled?: boolean
}) => {
	const [animationDisabled, setAnimationDisabled] = useState(true)

	const contextValue = useMemo(
		() => ({ animationDisabled, setAnimationDisabled }),
		[animationDisabled]
	)

	return (
		<AnimationDisabledContext.Provider value={contextValue}>
			{children}
		</AnimationDisabledContext.Provider>
	)
}

export const useAnimationDisabled = () => {
	const context = useContext(AnimationDisabledContext)
	if (!context)
		throw new Error(
			'useAnimationDisabled must be used within AnimationDisabledProvider'
		)
	return context
}
