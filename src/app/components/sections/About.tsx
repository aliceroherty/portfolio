'use client'
import React from 'react'
import AnimatedSection from '../utils/AnimatedSection'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Chip } from '../controls/Chip'
import ChipDataService from '@/app/services/ChipDataService'

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: (i = 1) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
	}),
}

const About = () => {
	return (
		<AnimatedSection id='about'>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.6 }}
				className='flex flex-col lg:flex-row items-center gap-10 mb-10'
			>
				<motion.div
					variants={fadeUp}
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
					variants={fadeUp}
					custom={1}
					className='flex flex-col gap-2 items-center lg:items-start'
				>
					<motion.h1
						variants={fadeUp}
						custom={2}
						className='text-5xl font-extrabold text-pink-300 tracking-tight mb-1'
					>
						Alice Roherty-Carrier
					</motion.h1>
					<motion.div
						variants={fadeUp}
						custom={3}
						className='flex flex-wrap items-center gap-3 mb-2'
					>
						{ChipDataService.getAboutSectionData().map((chip) => (
							<Chip chip={chip} key={chip.label?.toString()} />
						))}
					</motion.div>
				</motion.div>
			</motion.div>
			<div className='bg-[#18181b] rounded-xl shadow-lg p-12 lg:w-full'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.6 }}
					className='space-y-8 text-white text-2xl leading-relaxed'
				>
					<motion.p
						variants={fadeUp}
						custom={1}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.6 }}
					>
						I am Alice Roherty-Carrier - a{' '}
						<span className='font-semibold text-pink-300'>
							versatile software developer
						</span>{' '}
						blending creativity and technical expertise to build
						seamless, impactful digital experiences. With a strong
						foundations in both{' '}
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
					</motion.p>
					<motion.p
						variants={fadeUp}
						custom={2}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.6 }}
					>
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
						drives me to deliver solutions that not only work, but
						truly delight. If you&apos;re looking for someone who
						brings{' '}
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
						to every project, you&apos;re in the right place.
					</motion.p>
					<hr className='border-t border-gray-700 my-6 opacity-60' />
					<motion.p
						variants={fadeUp}
						custom={3}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.6 }}
					>
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
						into intuitive, impactful digital experiences. I am
						committed to writing{' '}
						<span className='font-semibold text-pink-300'>
							clean, maintainable code
						</span>{' '}
						and enjoy collaborating with others to deliver{' '}
						<span className='font-semibold text-pink-300'>
							high-quality solutions
						</span>{' '}
						that make a difference.
					</motion.p>
					<motion.p
						variants={fadeUp}
						custom={4}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.6 }}
					>
						Driven by{' '}
						<span className='font-semibold text-pink-300'>
							curiosity
						</span>{' '}
						and a love for{' '}
						<span className='font-semibold text-pink-300'>
							learning
						</span>
						, I quickly adapt to new technologies and enjoy tackling{' '}
						<span className='font-semibold text-pink-300'>
							challenging problems
						</span>
						. I believe the best software is built with{' '}
						<span className='font-semibold text-pink-300'>
							empathy for users
						</span>
						, and I strive to create products that are not only
						robust and efficient, but also{' '}
						<span className='font-semibold text-pink-300'>
							delightful to use
						</span>
						{'.'}
					</motion.p>
					<hr className='border-t border-gray-700 my-6 opacity-60' />
					<motion.p
						variants={fadeUp}
						custom={5}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.6 }}
					>
						Outside of work, I am passionate about{' '}
						<span className='font-semibold text-pink-300'>
							open-source development
						</span>{' '}
						and have recently been building a custom plugin for the
						Playnite game launcher. I am also actively rebuilding my
						portfolio using{' '}
						<span className='font-semibold text-pink-300'>
							Next.js
						</span>
						{','} exploring modern frameworks and tooling in the
						JavaScript ecosystem. I love to learn, experiment, and
						grow — whether that is through shipping production-ready
						code or diving into emerging technologies.
					</motion.p>
					<motion.p
						variants={fadeUp}
						custom={6}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.6 }}
					>
						I am always eager to{' '}
						<span className='font-semibold text-pink-300'>
							connect
						</span>{' '}
						with others who are passionate about{' '}
						<span className='font-semibold text-pink-300'>
							technology
						</span>
						{', '}innovation, and making a positive impact. If you
						share similar interests or would like to{' '}
						<span className='font-semibold text-pink-300'>
							collaborate
						</span>{' '}
						, feel free to reach out!
					</motion.p>
				</motion.div>
			</div>
		</AnimatedSection>
	)
}

export default About
