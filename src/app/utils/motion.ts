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
};

export { slideInLeft };
