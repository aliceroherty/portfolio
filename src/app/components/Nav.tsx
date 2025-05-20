import NavItems from './NavItems'
import HamburgerMenu from './controls/HamburgerMenu'
import ResumeDownloader from './controls/ResumeDownloader'

const Nav = () => {
	return (
		<nav className='flex justify-between items-center w-full fixed top-0 bg-[#121212]/[.8] z-50 py-5 px-5 md:px-24 select-none'>
			<HamburgerMenu />

			<ul className='hidden lg:flex flex-row items-center list-none gap-5 m-0 h-full'>
				<NavItems />
			</ul>

			<ResumeDownloader />
		</nav>
	)
}

export default Nav
