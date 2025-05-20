'use client'

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

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
}

export default ThemeProviderWrapper