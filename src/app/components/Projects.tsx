'use client'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { login, logout, refresh } from '../utils/authentication'
import { CircularProgress } from '@mui/material'
import { slideInLeft } from '../utils/motion'
import { Element } from 'react-scroll'
import ProjectCard from './ProjectCard'
import Project from '../models/project'

const Projects = () => {
	const [projects, setProjects] = useState(new Array<Project>())
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	const fetchProjects = async () => {
		try {
			let tokens = await login()

			if (tokens) {
				let res = await fetch(`http://localhost:3000/api/projects`, {
					headers: {
						Authorization: `Bearer ${tokens.accessToken}`,
					},
				})

				if (res.status == 200) {
					const results = await res.json()
					setProjects(results)
				} else if (res.status == 403) {
					tokens = await refresh(tokens.refreshToken)
					res = await fetch(`http://localhost:3000/api/projects`, {
						headers: {
							Authorization: `Bearer ${tokens.accessToken}`,
						},
					})
					const results = await res.json()
					setProjects(results)
				}

				await logout(tokens.refreshToken)
			} else {
				throw new Error('Tokens undefined.')
			}
		} catch (error: unknown) {
			setError(true)
			console.log((error as Error)?.message)
		}

		setLoading(false)
	}

	const renderProjects = () => {
		if (loading) {
			return <CircularProgress />
		} else if (error) {
			return <p>Something went wrong retrieving the projects...</p>
		} else {
			return (
				<div className='w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8'>
					{projects.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			)
		}
	}

	useEffect(() => {
		fetchProjects()
	}, [])

	return (
		<Element name='projects' className='w-full'>
			<motion.div
				variants={slideInLeft}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				className='w-full pb-16 text-left'
				id='projects'
			>
				<h4 className='lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left'>
					Projects
				</h4>
				{renderProjects()}
			</motion.div>
		</Element>
	)
}

export default Projects
