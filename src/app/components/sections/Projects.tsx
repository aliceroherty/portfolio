import ProjectCard from './ProjectCard'
import Project from '../../models/project'
import { PrismaClient } from '../../../../generated/prisma'
import AnimatedSection from '../utils/AnimatedSection'

const Projects = async () => {
	const projects: Project[] = await new PrismaClient().projects.findMany()
	const error = false

	const renderProjects = () => {
		if (error) {
			return <p>Something went wrong retrieving the projects...</p>
		} else {
			return (
				<div className='w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8'>
					{projects
						.toSorted((a, b) => a.order - b.order)
						.map((project) => (
							<ProjectCard key={project.id} {...project} />
						))}
				</div>
			)
		}
	}

    return (
		<AnimatedSection id='projects'>
			<h4 className='lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left'>
				Projects
			</h4>
			{renderProjects()}
		</AnimatedSection>
	)
}

export default Projects
