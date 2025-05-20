"use client"
import { useState } from 'react'
import NavItems from '../NavItems'
import Button from '@mui/material/Button'

const HamburgerMenu = () => {
	const [open, setOpen] = useState(false)
	const handleClick = () => {
		setOpen(!open)
	}

	return (
		<div className='lg:hidden'>
			<Button
				variant='outlined'
				color='primary'
				onClick={handleClick}
				aria-label={open ? 'Close menu' : 'Open menu'}
				sx={{
					minWidth: 0,
					padding: 0,
					width: 40,
					height: 40,
					borderRadius: 2,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				className='z-20 flex flex-col justify-center items-center relative'
			>
				<span
					className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
						open ? 'rotate-45 translate-y-1.5' : ''
					}`}
				></span>
				<span
					className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${
						open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
					}`}
					style={{ transformOrigin: 'center' }}
				></span>
				<span
					className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
						open ? '-rotate-45 -translate-y-1.5' : ''
					}`}
				></span>
			</Button>

			<div
				className={
					open ? 'hamburger-menu-expand' : 'hamburger-menu-collapse'
				}
			>
				<ul className='flex flex-col items-center justify-between min-h-[250px]'>
					<NavItems />
				</ul>
			</div>
		</div>
	)
}

export default HamburgerMenu;