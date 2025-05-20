"use client";

import { useState, createContext, useLayoutEffect, useRef, Ref } from 'react'
import { Link } from 'react-scroll'
import { Button } from '@mui/material'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

export const NavHeightContext = createContext(0)

const Nav = () => {
	const [open, setOpen] = useState(false)
	const navRef: Ref<HTMLElement> = useRef(null)
	const [navHeight, setNavHeight] = useState(0)

	useLayoutEffect(() => {
		if (navRef.current) {
			setNavHeight(navRef.current.offsetHeight)
		}
	}, [])

	return (
		<NavHeightContext.Provider value={navHeight}>
			<nav
				className='flex justify-between items-center w-full fixed top-0 bg-[#121212]/[.8] z-50 py-5 px-5 md:px-24 select-none'
				ref={navRef}
			>
				<section className='flex lg:hidden'>
					<div
						className='space-y-2 [&>*]:hover:bg-gray-400 cursor-pointer [&>*]:transition-colors [&>*]:ease-in-out [&>*]:duration-300'
						onClick={() => setOpen((prev) => !prev)}
					>
						<span className='block h-0.5 w-8 bg-white'></span>
						<span className='block h-0.5 w-8 bg-white'></span>
						<span className='block h-0.5 w-8 bg-white'></span>
					</div>

					<div className={open ? 'showNav' : 'hideNav'}>
						<div
							className='absolute top-0 right-0 px-5 py-5 md:px-24'
							onClick={() => setOpen(false)}
						>
							<svg
								className='h-8 w-8 text-white hover:text-gray-400 transition-colors ease-in-out duration-300 cursor-pointer'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<line x1='18' y1='6' x2='6' y2='18' />
								<line x1='6' y1='6' x2='18' y2='18' />
							</svg>
						</div>
						<ul className='flex flex-col items-center justify-between min-h-[250px]'>
							<li>
								<Link
									to='home'
									className='cursor-pointer text-white text-3xl hover:text-gray-500 transition-colors ease-in-out duration-300'
									activeClass='active'
									smooth
									spy
									isDynamic
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to='about'
									className='cursor-pointer text-white text-3xl hover:text-gray-500 transition-colors ease-in-out duration-300'
									activeClass='active'
									smooth
									spy
									isDynamic
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to='experience'
									className='cursor-pointer text-white text-3xl hover:text-gray-500 transition-colors ease-in-out duration-300'
									activeClass='active'
									smooth
									spy
									isDynamic
								>
									Experience
								</Link>
							</li>
							<li>
								<Link
									to='projects'
									className='cursor-pointer text-white text-3xl hover:text-gray-500 transition-colors ease-in-out duration-300'
									activeClass='active'
									smooth
									spy
									isDynamic
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									to='contact'
									className='cursor-pointer text-white text-3xl hover:text-gray-500 transition-colors ease-in-out duration-300'
									activeClass='active'
									smooth
									spy
									isDynamic
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</section>

				<ul className='hidden lg:flex flex-row items-center list-none gap-5 m-0 h-full'>
					<li>
						<Link
							to='home'
							className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
							activeClass='active'
							smooth
							spy
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='about'
							className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
							activeClass='active'
							smooth
							spy
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to='timeline'
							className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
							activeClass='active'
							smooth
							spy
						>
							Experience
						</Link>
					</li>
					<li>
						<Link
							to='projects'
							className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
							activeClass='active'
							smooth
							spy
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							to='contact'
							className='cursor-pointer text-white text-xl hover:text-gray-500 transition-colors ease-in-out duration-300'
							activeClass='active'
							smooth
							spy
						>
							Contact
						</Link>
					</li>
				</ul>
				<div>
					<Button
						variant='outlined'
						color='primary'
						className=''
						style={{ animationDelay: '2.25s' }}
						download='Alice Roherty-Carrier - Resume.pdf'
						href='/resume.pdf'
					>
						Download Resume
						<CloudDownloadIcon
							className='ml-2 flex justify-center align-center text-base'
							style={{ fontSize: '1.1rem' }}
						/>
					</Button>
				</div>
			</nav>
		</NavHeightContext.Provider>
	)
}

export default Nav;
