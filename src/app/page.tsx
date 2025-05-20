import Nav from './components/Nav'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import ThemeProviderWrapper from './components/utils/ThemeProviderWrapper'

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
