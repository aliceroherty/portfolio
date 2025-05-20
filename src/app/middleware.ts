import { NextRequest, NextResponse } from 'next/server'
import { handleCors } from './middleware/cors'

export function middleware(req: NextRequest) {
	const res = NextResponse.next()
	const response = handleCors(req, res)
	return response
}
