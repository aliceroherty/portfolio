import captureWebsite from 'capture-website'
import { routes } from '../src/app/services/routes'
import * as fs from 'fs'
import * as path from 'path'

const sections = routes.map((route) => route.id)

const generateScreenshots = async () => {
    const dir = './public/og'

    // Remove old screenshots if they exist
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            fs.unlinkSync(path.join(dir, file))
        })
    }

	for (const section of sections) {
		const url = `http://localhost:3000/${section}`
		const path = `${dir}/${section}.png`

		console.log(`Capturing ${url} -> ${path}`)

		await captureWebsite.file(url, path, {
			width: 1920,
			height: 1080,
			delay: 1,
			disableAnimations: true,
			debug: true,
			scaleFactor: 1.5,
			styles: [
				'html::-webkit-scrollbar, body::-webkit-scrollbar, *::-webkit-scrollbar { display: none !important; }',
				'html, body, * { scrollbar-width: none !important; -ms-overflow-style: none !important; }',
			],
			cookies: [
				{
					name: 'DISABLE_ANIMATIONS',
					value: 'true',
					domain: 'localhost',
					path: '/',
				},
			],
		})
	}
}

generateScreenshots().catch(console.error)
