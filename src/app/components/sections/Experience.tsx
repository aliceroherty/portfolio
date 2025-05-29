'use client'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import SchoolIcon from '@mui/icons-material/School'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import AnimatedSection from '../utils/AnimatedSection'
import { useAnimationDisabled } from '@/app/context/AnimationDisabledContext'

const Experience = () => {
	const timelineElements = [
		{
			id: 'education',
			title: 'Education',
			location: 'New Brunswick Community College (NBCC)',
			description: `
		<p><span class='font-semibold text-pink-300'>Web and Mobile App Development</span> (Honors Graduate). My coursework and projects gave me hands-on experience with a wide range of technologies:</p>
		<ul class='mb-4 list-disc list-inside pl-6'>
			<li><span class='font-semibold text-pink-300'>.NET Framework</span> (Entity Framework, ASP.NET, WinForms)</li>
			<li><span class='font-semibold text-pink-300'>SQL</span> (Stored Procedures, Subqueries, CRUD operations)</li>
			<li><span class='font-semibold text-pink-300'>React Native</span> for cross-platform mobile apps</li>
			<li><span class='font-semibold text-pink-300'>Kotlin</span> for Android, <span class='font-semibold text-pink-300'>Swift</span> for iOS</li>
			<li><span class='font-semibold text-pink-300'>Angular</span> for web apps</li>
			<li><span class='font-semibold text-pink-300'>Java</span> (Java EE, Swing)</li>
		</ul>
		<p>We also explored methodologies like <span class='font-semibold text-pink-300'>Waterfall</span> and <span class='font-semibold text-pink-300'>Agile</span>, <span class='font-semibold text-pink-300'>test-driven development</span>, <span class='font-semibold text-pink-300'>SOLID</span> principles, multi-tier architecture, and design patterns such as <span class='font-semibold text-pink-300'>Factory</span> and <span class='font-semibold text-pink-300'>Singleton</span>.</p>
	`,
			date: '2018 - 2020',
			icon: 'school',
		},
		{
			id: 'bcjobs',
			title: 'Software Developer',
			location: 'BCJobs',
			description: `
		<p>Sole maintainer of .NET Core-based job board platforms. Led a full infrastructure migration from a traditional data center to <span class='font-semibold text-pink-300'>AWS</span> and implemented a <span class='font-semibold text-pink-300'>CI/CD pipeline</span> using GitHub Actions.</p>
		<ul class='mb-4 list-disc list-inside pl-6'>
			<li>Migrated legacy infrastructure to <span class='font-semibold text-pink-300'>AWS</span>, improving scalability and reliability.</li>
			<li>Automated deployments and testing with a modern <span class='font-semibold text-pink-300'>CI/CD pipeline</span> using GitHub Actions.</li>
			<li>Maintained and expanded the core <span class='font-semibold text-pink-300'>ASP.NET Core</span> application, implementing new features and resolving critical bugs.</li>
			<li>Improved site SEO and performance, resulting in increased user engagement and traffic.</li>
		</ul>
	`,
			date: '2020 - 2022',
			icon: 'work',
		},
		{
			id: 'populus',
			title: 'Software Developer',
			location: 'Populus Plus',
			description: `
		<p>Contributed to several large-scale medical software projects using <span class='font-semibold text-pink-300'>Java (Spring Boot, Java EE)</span> and <span class='font-semibold text-pink-300'>Angular</span>. Our software is used internationally in countries such as <span class='font-semibold text-pink-300'>Canada</span>, <span class='font-semibold text-pink-300'>Belize</span>, and <span class='font-semibold text-pink-300'>Barbados</span>, supporting both public health and research efforts.</p>
		<ul class='mb-4 list-disc list-inside pl-6'>
			<li>A <span class='font-semibold text-pink-300'>health information system</span> (HIS) managing patient records, prescriptions, practitioner data, and clinical encounters.</li>
			<li>A <span class='font-semibold text-pink-300'>clinical research platform</span> for managing medical studies, including specimen tracking and subject metadata.</li>
			<li>An <span class='font-semibold text-pink-300'>interoperability platform</span> enabling Belize's healthcare systems to exchange data using the FHIR standard, with real-time transformation and analytics.</li>
		</ul>
	`,
			date: '2022 - Present',
			icon: 'work',
		},
	]

	const { animationDisabled } = useAnimationDisabled()

	return (
		<AnimatedSection id='experience'>
			<h4 className='lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left'>
				Experience
			</h4>
			<VerticalTimeline animate={!animationDisabled}>
				{timelineElements.map((element) => {
					return (
						<VerticalTimelineElement
							key={element.id}
							date={element.date}
							dateClassName='date'
							contentStyle={{
								background: '#212121',
								color: '#fff',
							}}
							contentArrowStyle={{
								borderRight: '7px solid #212121',
							}}
							iconStyle={{ background: 'rgb(249 168 212)' }}
							icon={
								element.icon === 'work' ? (
									<WorkOutlineIcon />
								) : (
									<SchoolIcon />
								)
							}
						>
							<h3 className='vertical-timeline-element-title text-2xl'>
								{element.title}
							</h3>
							<h5 className='vertical-timeline-element-subtitle'>
								{element.location}
							</h5>
							<div
								dangerouslySetInnerHTML={{
									__html: element.description,
								}}
							/>
						</VerticalTimelineElement>
					)
				})}
			</VerticalTimeline>
		</AnimatedSection>
	)
}

export default Experience
