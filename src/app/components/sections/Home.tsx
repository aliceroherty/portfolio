import 'animate.css'
import KeyboardRenderer from '../keyboard/KeyboardRenderer'
import { Button } from '@mui/material'
import DownArrowIcon from '@mui/icons-material/KeyboardArrowDown'
import Link from 'next/link'

const Home = () => {
	return (
		<div className='h-screen flex' id='home'>
			<div className='w-full text-center lg:w-4/6 lg:text-left h-1/2 z-10 flex flex-col items-center lg:items-start pt-24'>
				<h1 className='lg:text-6xl text-4xl font-bold xl:mt-56 lg:mt-10 mt-6 mb-5 animate__animated animate__slideInLeft'>
					My Name is{' '}
					<span
						className='text-pink-300  animate__animated  animate__bounce inline-block'
						style={{ animationDelay: '0.75s' }}
					>
						Alice
					</span>
				</h1>
				<h3 className='lg:text-4xl md:text-2xl text-xl mb-5 animate__animated animate__slideInLeft'>
					I Build Web and Mobile Applications.
				</h3>
				<Link href='#about'>
					<Button
						variant='outlined'
						color='primary'
						className='h-14 lg:w-48 md:w-38 w-40 animate__animated animate__zoomIn duration-300 ease-in-out text-center'
						style={{ animationDelay: '2.25s' }}
						endIcon={<DownArrowIcon />}
					>
						Learn More
					</Button>
				</Link>
			</div>
			<div>
				<KeyboardRenderer />
			</div>
		</div>
	)
}

export default Home
