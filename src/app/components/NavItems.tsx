'use client'
import { useEffect, useState, useLayoutEffect } from 'react'
import Link from 'next/link'
import { routes } from '../services/RouteMetadataService'

const items = routes

const NavItems = () => {
	const [activeSection, setActiveSection] = useState('')

	const scrollToSectionWithOffset = (
		id: string,
		offset = 50,
		smooth = true
	) => {
		const section = document.getElementById(id)
		if (section) {
			const y =
				section.getBoundingClientRect().top + window.scrollY - offset
			window.scrollTo({ top: y, behavior: smooth ? 'smooth' : 'auto' })
		}
	}

	useLayoutEffect(() => {
		const path = window.location.pathname.replace('/', '')
		if (path) {
			scrollToSectionWithOffset(path, 100, false)
			setActiveSection(path)
		}
	}, [])

	useEffect(() => {
		const sections: HTMLElement[] = []
		for (const item of items) {
			const section = document.getElementById(item.id)
			if (section) {
				sections.push(section)
			}
		}

		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.7,
		}

		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (
						items.map((item) => item.id).includes(entry.target.id)
					) {
						setActiveSection(entry.target.id)
						window.history.pushState(
							null,
							'',
							`/${entry.target.id}`
						)
					}
				}
			})
		}

		const observer = new IntersectionObserver(
			handleIntersection,
			observerOptions
		)

		sections.forEach((section) => {
			if (section) {
				observer.observe(section)
			}
		})
	}, [])

	return items.map((item) => (
		<li key={item.id}>
			<Link
				href={item.href}
				className={activeSection === item?.id ? 'active' : 'inactive'}
				onClick={(e) => {
					e.preventDefault()
					scrollToSectionWithOffset(item.id, 100, true) // Smooth scroll on click
					window.history.replaceState(null, '', `/${item.id}`)
					setActiveSection(item.id)
				}}
			>
				{item.title}
			</Link>
		</li>
	))
}

export default NavItems
