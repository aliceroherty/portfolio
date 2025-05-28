'use client'
import 'animate.css'
import KeyboardRenderer from '../keyboard/KeyboardRenderer'
import { Button } from '@mui/material'
import DownArrowIcon from '@mui/icons-material/KeyboardArrowDown'
import Link from 'next/link'
import { useAnimationDisabled } from '@/app/context/AnimationDisabledContext'

const Home = () => {
	const { animationDisabled } = useAnimationDisabled()
	const animateClass = (animationName: string) => {
		return animationDisabled
			? ''
			: `animate__animated animate__${animationName}`
	}
	return (
		<div
			className='h-screen flex pt-24 pb-[18%] flex-col lg:flex-row'
			id='home'
		>
			<div className='lg:h-full text-center lg:w-4/6 lg:text-left z-10 flex flex-col items-center lg:items-start lg:justify-center lg:pt-0 pt-10 lg:mb-0 md:mb-40 mb-20'>
				<h1
					className={`3xl:text-6xl 2xl:text-5xl lg:max-2xl:text-4xl md:text-5xl text-4xl font-bold md:mt-6 md:mb-5 mb-3 ${animateClass(
						'slideInLeft'
					)}`}
				>
					My Name is{' '}
					<span
						className={`text-pink-300 ${animateClass(
							'bounce'
						)} inline-block`}
						style={{ animationDelay: '0.75s' }}
					>
						Alice
					</span>
				</h1>
				<h3
					className={`3xl:text-4xl 2xl:text-3xl lg:max-2xl:text-xl md:text-3xl text-xl mb-5 ${animateClass(
						'slideInLeft'
					)}`}
				>
					I Build Web and Mobile Applications.
				</h3>
				<Link href='#about' className='w-full'>
					<Button
						variant='outlined'
						color='primary'
						className={`h-14 lg:w-48 w-full ${animateClass(
							'zoomIn'
						)} duration-300 ease-in-out text-center`}
						style={{ animationDelay: '2.25s' }}
						endIcon={<DownArrowIcon />}
					>
						Learn More
					</Button>
				</Link>
			</div>
			<KeyboardRenderer />
		</div>
	)
}

export default Home
