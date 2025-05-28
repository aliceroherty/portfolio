import RouteMetadata from '../models/RouteMetadata'

export const routes: RouteMetadata[] = [
	{
		id: 'home',
		href: '/home',
		title: 'Home',
		ogImage: '/og/home.png',
	},
	{
		id: 'about',
		href: '/about',
		title: 'About',
		ogImage: '/og/about.png',
	},
	{
		id: 'experience',
		href: '/experience',
		title: 'Experience',
		ogImage: '/og/experience.png',
	},
	{
		id: 'projects',
		href: '/projects',
		title: 'Projects',
		ogImage: '/og/projects.png',
	},
	{
		id: 'contact',
		href: '/contact',
		title: 'Contact',
		ogImage: '/og/contact.png',
	},
]

export default routes
