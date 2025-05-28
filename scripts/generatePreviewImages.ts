import captureWebsite from 'capture-website'
import { routes } from '../src/app/services/routes'
import * as fs from 'fs'
import * as path from 'path'

const sections = routes.map((route) => route.id)

const generateScreenshots = async () => {
    const dir = './public/og'

    if (fs.existsSync(dir)) {
		fs.readdirSync(dir).forEach((file) => {
			fs.unlinkSync(path.join(dir, file))
		})
	}

	for (const section of sections) {
		const url = `http://localhost:3000/${section}`
		const path = `${dir}/${section}.png`

		console.log(`Capturing ${url} -> ${path}`)

		// Note: WebGL doesnt seem to be working rn for headless
		// so these images will need to be manually updated to ensure 3d model is rendered.
		await captureWebsite.file(url, path, {
			width: 1920,
			height: 1080,
			delay: 1,
			debug: true,
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
			launchOptions: {
				headless: 'shell',
				args: ['--enable-webgl'],
			},
		})
	}
}

generateScreenshots().catch(console.error)
