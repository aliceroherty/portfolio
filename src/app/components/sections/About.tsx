'use client'
import React from 'react'
import AnimatedSection from '../utils/AnimatedSection'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Chip } from '../controls/Chip'
import ChipDataService from '@/app/services/ChipDataService'
import { useAnimationDisabled } from '@/app/context/AnimationDisabledContext'
import { disabled, fadeUp } from '@/app/utils/motion'

const About = () => {
	const { animationDisabled } = useAnimationDisabled()

	const fadeUpOrNone = animationDisabled ? disabled : fadeUp

	return (
		<AnimatedSection id='about'>
			<motion.div
				initial={animationDisabled ? undefined : 'hidden'}
				whileInView={animationDisabled ? undefined : 'visible'}
				viewport={
					animationDisabled ? undefined : { once: true, amount: 0.6 }
				}
				className='flex flex-col lg:flex-row items-center gap-10 mb-10'
			>
				<motion.div
					variants={fadeUpOrNone}
					custom={0}
					className='flex-shrink-0'
				>
					<Image
						src='/images/me.jpeg'
						alt='Alice Roherty-Carrier profile photo'
						width={140}
						height={140}
						className='rounded-full border-4 border-pink-300 shadow-lg object-cover bg-[#23232a]'
						priority
					/>
				</motion.div>
				<motion.div
					variants={fadeUpOrNone}
					custom={1}
					className='flex flex-col gap-2 items-center lg:items-start'
				>
					<motion.h1
						variants={fadeUpOrNone}
						custom={2}
						className='text-5xl font-extrabold text-pink-300 tracking-tight mb-1'
					>
						Alice Roherty-Carrier
					</motion.h1>
					<motion.div
						variants={fadeUpOrNone}
						custom={3}
						className='flex flex-wrap items-center gap-3 mb-2 justify-center lg:justify-start'
					>
						{ChipDataService.getAboutSectionData().map((chip) => (
							<Chip chip={chip} key={chip.label?.toString()} />
						))}
					</motion.div>
				</motion.div>
			</motion.div>
			<div className='bg-[#18181b] rounded-xl shadow-lg p-12 lg:w-full'>
				<motion.div
					initial={animationDisabled ? undefined : 'hidden'}
					whileInView={animationDisabled ? undefined : 'visible'}
					viewport={
						animationDisabled
							? undefined
							: { once: true, amount: 0.6 }
					}
					className='space-y-8 text-white text-2xl leading-relaxed'
				>
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<motion.p
							key={i}
							variants={fadeUpOrNone}
							custom={i}
							initial={animationDisabled ? undefined : 'hidden'}
							whileInView={
								animationDisabled ? undefined : 'visible'
							}
							viewport={
								animationDisabled
									? undefined
									: { once: true, amount: 0.6 }
							}
						>
							{i === 1 && (
								<>
									I am Alice Roherty-Carrier - a{' '}
									<span className='font-semibold text-pink-300'>
										versatile software developer
									</span>{' '}
									blending creativity and technical expertise
									to build seamless, impactful digital
									experiences. With a strong foundations in
									both{' '}
									<span className='font-semibold text-pink-300'>
										frontend
									</span>{' '}
									and{' '}
									<span className='font-semibold text-pink-300'>
										backend technologies
									</span>
									, I thrive on{' '}
									<span className='font-semibold text-pink-300'>
										solving complex problems
									</span>{' '}
									and transforming ideas into polished,{' '}
									<span className='font-semibold text-pink-300'>
										user-focused products
									</span>
									{'.'}
								</>
							)}
							{i === 2 && (
								<>
									My passion for{' '}
									<span className='font-semibold text-pink-300'>
										learning
									</span>
									,{' '}
									<span className='font-semibold text-pink-300'>
										clean code
									</span>
									, and{' '}
									<span className='font-semibold text-pink-300'>
										collaboration
									</span>{' '}
									drives me to deliver solutions that not only
									work, but truly delight. If you&apos;re
									looking for someone who brings{' '}
									<span className='font-semibold text-pink-300'>
										energy
									</span>
									,{' '}
									<span className='font-semibold text-pink-300'>
										adaptability
									</span>
									, and a relentless drive for{' '}
									<span className='font-semibold text-pink-300'>
										quality
									</span>{' '}
									to every project, you&apos;re in the right
									place.
									<hr className='border-t border-gray-700 my-6 opacity-60' />
								</>
							)}
							{i === 3 && (
								<>
									My expertise spans both{' '}
									<span className='font-semibold text-pink-300'>
										frontend
									</span>{' '}
									and{' '}
									<span className='font-semibold text-pink-300'>
										backend development
									</span>
									, and I thrive on turning{' '}
									<span className='font-semibold text-pink-300'>
										complex ideas
									</span>{' '}
									into intuitive, impactful digital
									experiences. I am committed to writing{' '}
									<span className='font-semibold text-pink-300'>
										clean, maintainable code
									</span>{' '}
									and enjoy collaborating with others to
									deliver{' '}
									<span className='font-semibold text-pink-300'>
										high-quality solutions
									</span>{' '}
									that make a difference.
								</>
							)}
							{i === 4 && (
								<>
									Driven by{' '}
									<span className='font-semibold text-pink-300'>
										curiosity
									</span>{' '}
									and a love for{' '}
									<span className='font-semibold text-pink-300'>
										learning
									</span>
									, I quickly adapt to new technologies and
									enjoy tackling{' '}
									<span className='font-semibold text-pink-300'>
										challenging problems
									</span>
									. I believe the best software is built with{' '}
									<span className='font-semibold text-pink-300'>
										empathy for users
									</span>
									, and I strive to create products that are
									not only robust and efficient, but also{' '}
									<span className='font-semibold text-pink-300'>
										delightful to use
									</span>
									{'.'}
									<hr className='border-t border-gray-700 my-6 opacity-60' />
								</>
							)}
							{i === 5 && (
								<>
									Outside of work, I am passionate about{' '}
									<span className='font-semibold text-pink-300'>
										open-source development
									</span>{' '}
									and have recently been building a custom
									plugin for the Playnite game launcher. I am
									also actively rebuilding my portfolio using{' '}
									<span className='font-semibold text-pink-300'>
										Next.js
									</span>
									{','} exploring modern frameworks and
									tooling in the JavaScript ecosystem. I love
									to learn, experiment, and grow — whether
									that is through shipping production-ready
									code or diving into emerging technologies.
								</>
							)}
							{i === 6 && (
								<>
									I am always eager to{' '}
									<span className='font-semibold text-pink-300'>
										connect
									</span>{' '}
									with others who are passionate about{' '}
									<span className='font-semibold text-pink-300'>
										technology
									</span>
									{', '}innovation, and making a positive
									impact. If you share similar interests or
									would like to{' '}
									<span className='font-semibold text-pink-300'>
										collaborate
									</span>{' '}
									, feel free to reach out!
								</>
							)}
						</motion.p>
					))}
				</motion.div>
			</div>
		</AnimatedSection>
	)
}

export default About
