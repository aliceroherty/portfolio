import captureWebsite from 'capture-website'
import { routes } from '../src/app/services/RouteMetadataService'
import * as fs from 'fs'
import * as path from 'path'
import { spawn, ChildProcess } from 'child_process'

const sections = routes.map((route) => route.id)
const port = 3001

// Start a Next.js server in production mode for screenshots
const startProdServer = () => {
	return new Promise<ChildProcess>((resolve, reject) => {
		// First, build the app
		const build = spawn('npm', ['run', 'build'], {
			cwd: process.cwd(),
			env: { ...process.env, NODE_ENV: 'production' },
			stdio: 'inherit',
			// shell: false by default
		})
		build.on('exit', (code) => {
			if (code !== 0) return reject(new Error('Build failed'))
			// Then, start the server
			const server = spawn('next', ['start', '-p', `${port}`], {
				cwd: process.cwd(),
				env: { ...process.env, NODE_ENV: 'production' },
				stdio: 'inherit',
				// shell: false by default
			})
			// Wait a few seconds for the server to start
			setTimeout(() => resolve(server), 5000)
		})
	})
}

const stopProdServer = (server: ChildProcess) => {
	if (server) server.kill()
}

const generateScreenshots = async () => {
	const dir = './public/og'

	if (fs.existsSync(dir)) {
		fs.readdirSync(dir).forEach((file) => {
			fs.unlinkSync(path.join(dir, file))
		})
	}

	// Start prod server
	const server = await startProdServer()

	try {
		for (const section of sections) {
			const url = `http://localhost:${port}/${section}`
			const path = `${dir}/${section}.png`

			console.log(`Capturing ${url} -> ${path}`)

			// Note: WebGL doesnt seem to be working rn for headless
			// so these images will need to be manually updated to ensure 3d model is rendered.
			await captureWebsite.file(url, path, {
				width: 1200,
				height: 630,
				delay: 2,
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
	} finally {
		stopProdServer(server)
	}
}

generateScreenshots().catch(console.error)
