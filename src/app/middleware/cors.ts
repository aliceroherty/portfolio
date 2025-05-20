import { NextRequest, NextResponse } from 'next/server'

export const handleCors = (req: NextRequest, res: NextResponse) => {
    const allowedOrigins = process.env.NODE_ENV === 'production'
        ? ['https://www.alice-carrier.com', 'https://alice-carrer.com']
        : ['http://localhost:3000']
	const origin = req.headers.get('origin')
    const headers = new Headers()
    const vercelRegex = /(.*)\.vercel\.app/

	if (origin && (allowedOrigins.includes(origin) || vercelRegex.test(origin))) {
		headers.set('Access-Control-Allow-Origin', origin)
	}

	headers.set(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS'
    )

	headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

	if (req.method === 'OPTIONS') {
		return new NextResponse(null, { headers })
	}

	headers.forEach((value, key) => {
		res.headers.set(key, value)
    })

    return res
}
