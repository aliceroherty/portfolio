import { PrismaClient } from '../../../../generated/prisma'

export async function GET() {
    const client = new PrismaClient()
	const projects = await client.projects.findMany()
	return new Response(JSON.stringify(projects), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	})
}
