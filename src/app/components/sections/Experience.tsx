'use client'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import SchoolIcon from '@mui/icons-material/School'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import AnimatedSection from '../utils/AnimatedSection'

const Experience = () => {
	const timelineElements = [
		{
			id: 1,
			title: 'High School Diploma',
			location: 'Dalhousie, New Brunswick',
			description:
				"<p id='description'>Excelled in computer science course where projects where written in Visual Basic. Learned basics of core programming concepts.",
			date: 'September 2014 - June 2018',
			icon: 'school',
		},
		{
			id: 2,
			title: 'Web and Mobile App Development',
			location: 'Moncton, New Brunswick',
			description:
				"<p id='description'>Further cemented my skills in software development working primarily in .NET Framework with C#. Built hybrid and native mobile apps using React-Native, Swift, and Kotlin.",
			date: 'September 2018 - May 2020',
			icon: 'school',
		},
		{
			id: 3,
			title: 'BC Jobs',
			location: 'Vancouver, British Columbia (Remote)',
			description:
				'<ul id=\'description\' class="list-disc list-inside mt-4"><li class="mb-3">Migrated system from a data center to a cloud-based solution.</li><li class="mb-3">Automated deployments using GitHub Actions.</li><li class="mb-3">Maintained and expanded upon ASP.NET Core application.</li><li class="mb-3">Improved site’s SEO resulting in an increase of traffic.</li></ul>',
			date: 'June 2020 - July 2022',
			icon: 'work',
		},
		{
			id: 4,
			title: 'Populus Plus',
			location: 'Fredericton, New Brunswick (Remote)',
			description:
				'<ul id=\'description\' class="list-disc list-inside mt-4"><li class="mb-3">Helped to maintain applications used for conducting medical studies across Canada and the United States. Stack included Spring/Java, Flyway, Hibernate, Angular, and Postgres.</li><li class="mb-3">Assisted in implementing a system for consolidating health insurance information in Belize. Technologies used include Angular, Spring, Nifi, OHDSI, HAPI-FHIR, and Docker.</li><li>Aided in improvements and fixes relating to medical software used by medical professionals for tracking data such as patient encounters, prescriptions, and diagnoses. Project was built on Java using struts, Angular for newer sections, and JSP for legacy sections.</li></ul>',
			date: 'August 2023 - Present',
			icon: 'work',
		},
	]

	return (
		<AnimatedSection id='experience'>
			<h4 className='lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left'>
				Experience
			</h4>
			<VerticalTimeline>
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
