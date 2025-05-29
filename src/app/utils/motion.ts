const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: (i = 1) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
	}),
}

const slideInLeft = {
	hidden: {
		transform: 'translateX(-100%)',
		duration: '500ms',
	},
	visible: {
		transform: 'translateX(0%)',
		transition: {
			duration: 0.85,
			type: 'spring',
		},
	},
}

const disabled = {
	hidden: { transform: 'translateX(0%)', transition: { duration: 0 } },
	visible: { transform: 'translateX(0%)', transition: { duration: 0 } },
}

export { fadeUp, slideInLeft, disabled }
