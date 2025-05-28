import type { Metadata } from 'next'
import routes from './services/RouteMetadataService'
import Nav from './components/Nav'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import ThemeProviderWrapper from './components/utils/ThemeProviderWrapper'

export async function generateMetadata(): Promise<Metadata> {
	const meta = routes.find((r) => r.id === 'home') || routes[0]
	return {
		title: meta?.title,
		description: 'A professional portfolio showcasing my work and skills.',
		openGraph: {
			images: [
				{
					url: meta?.ogImage || '/og/home.png',
					width: 1200,
					height: 630,
					alt: meta?.title || 'Home',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			images: [meta?.ogImage || '/og/home.png'],
		},
	}
}

const Page = () => {
	return (
		<ThemeProviderWrapper>
			<Nav />
			<div className='select-none px-5 md:px-24'>
				<Home />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</ThemeProviderWrapper>
	)
}

export default Page
