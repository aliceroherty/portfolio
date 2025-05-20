'use client'
import 'animate.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Experience from './components/Experience'
import { ThemeProvider, createTheme } from '@mui/material'

const muiTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#f9a8d4',
		},
		secondary: {
			main: '#db2777',
		},
		error: {
			main: '#ff0081',
		},
	},
})

const Page = () => {
	return (
		<ThemeProvider theme={muiTheme}>
			<Nav />
			<div className='select-none px-5 md:px-24'>
				<Home />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</ThemeProvider>
	)
}

export default Page
