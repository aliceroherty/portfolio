"use client";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Ref, useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import Project from '../models/project'

const ProjectCard = ({ githubUrl, imageUrl, title, description }: Project) => {
	const tiltRef: Ref<HTMLAnchorElement | null> = useRef(null)

	useEffect(() => {
		if (tiltRef.current) {
			VanillaTilt.init(tiltRef.current, {
				glare: true,
				'max-glare': 0.25,
			})
		}
	})

	return (
		<CardActionArea
			sx={{ borderRadius: '4px' }}
			className='tilt'
			href={githubUrl}
			ref={tiltRef}
		>
			<Card className='w-full h-full'>
				<CardMedia
					className='h-64'
					component='img'
					image={`${process.env.API_URL}/${imageUrl}`}
					alt={`${title} Image`}
					sx={{ padding: '1em 1em 0 1em', objectFit: 'contain' }}
				/>
				<CardContent>
					<h3 className='text-2xl font-bold mb-2'>{title}</h3>
					<p className='font-light'>{description}</p>
				</CardContent>
			</Card>
		</CardActionArea>
	)
}

export default ProjectCard;
