import type { Metadata } from 'next'
import Page from '../page'
import routes from '../services/RouteMetadataService'

export async function generateMetadata({
	params,
}: {
	params: { slug?: string[] }
}): Promise<Metadata> {
	const section = params.slug?.[0] || 'home'
	const meta = routes.find((r) => r.id === section) || routes[0]
	return {
		title: meta?.title,
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

export default function CatchAllPage() {
	return <Page />
}
