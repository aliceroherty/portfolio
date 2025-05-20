import Page from '../page'

// Prevent the Next.js app router from trying to match the path we will handle this ourselves as this is an SPA
export default function CatchAllPage() {
	return <Page />
}
