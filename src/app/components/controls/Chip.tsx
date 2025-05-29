import ChipData from '@/app/models/ChipData';
import { Chip as MuiChip } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export const Chip = ({ chip }: Readonly<{ chip: ChipData }>) => {
	const GLARE_SIZE = 40;
	const [glare, setGlare] = useState<{ x: number; y: number } | null>(null);
	const chipRef = useRef<HTMLDivElement>(null);

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		const rect = chipRef.current?.getBoundingClientRect();
		if (rect) {
			setGlare({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			});
		}
	};
	const handlePointerLeave = () => setGlare(null);

	const Icon = chip.icon;
	const iconJSX = Icon ? (
		<Icon
			className={chip.label === 'Software Developer' ? 'text-pink-300' : undefined}
			fontSize='small'
		/>
	) : undefined;

	const chipContent = (
		<motion.div
			whileHover={chip.link ? { scale: 1.08 } : undefined}
			transition={{ type: 'spring', stiffness: 300 }}
			ref={chip.link ? chipRef : undefined}
			onPointerMove={chip.link ? handlePointerMove : undefined}
			onPointerLeave={chip.link ? handlePointerLeave : undefined}
			style={{
				position: 'relative',
				display: 'inline-block',
				borderRadius: 9999,
				overflow: 'hidden',
			}}
		>
			{chip.link && glare && (
				<motion.div
					layout
					animate={{
						x: glare.x - GLARE_SIZE / 2,
						y: glare.y - GLARE_SIZE / 2,
						opacity: 1,
						transition: {
							type: 'spring',
							stiffness: 200,
							damping: 30,
							mass: 0.5,
						},
					}}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					style={{
						position: 'absolute',
						width: GLARE_SIZE,
						height: GLARE_SIZE,
						pointerEvents: 'none',
						background: `radial-gradient(circle at ${GLARE_SIZE / 2}px ${GLARE_SIZE / 2}px, rgba(249,168,212,0.22) 0%, rgba(249,168,212,0.10) 60%, transparent 100%)`,
						filter: 'blur(6px)',
						zIndex: 2,
						willChange: 'transform',
					}}
				/>
			)}
			<MuiChip
				icon={iconJSX}
				label={chip.label}
				variant={chip.variant}
				color={chip.color}
				sx={{
					...chip.sx,
					...(chip.link ? { px: 2.5, py: 1.2 } : {}),
					position: 'relative',
					zIndex: 3,
				}}
				clickable={!!chip.link}
			/>
		</motion.div>
	);

	if (chip.link) {
		return (
			<a
				href={chip.link}
				target='_blank'
				rel='noopener noreferrer'
				tabIndex={-1}
				aria-label={chip.label + ' Profile'}
				style={{ textDecoration: 'none', position: 'relative', zIndex: 1 }}
			>
				{chipContent}
			</a>
		);
	}
	return chipContent;
};

export default Chip;