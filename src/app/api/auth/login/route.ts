import { PrismaClient } from '../../../../../generated/prisma'
import jwt, { Secret } from 'jsonwebtoken';

const generateAccessToken: (apiKey: string) => string = (apiKey) => {
    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error('Access token secret is not set');
    }

    if (!apiKey) {
        throw new Error('API key is required');
    }

    if (apiKey !== process.env.API_KEY) {
        throw new Error('Invalid API key');
    }

    const secret: Secret = process.env.ACCESS_TOKEN_SECRET;
    return jwt.sign({ apiKey }, secret, {
        expiresIn: '5m',
    });
};

export async function POST(req: Request) {
    try {
        const client = new PrismaClient()
        const body = await req.json()
        if (!body.apiKey) {
            return new Response(JSON.stringify({ message: 'API key is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
		}

        if (!process.env.REFRESH_TOKEN_SECRET) {
            return new Response(JSON.stringify({ message: 'Refresh token secret is not set' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

		const privateKey: Secret = process.env.REFRESH_TOKEN_SECRET
        const publicKey: string = body.apiKey

        if (publicKey != process.env.API_KEY) return new Response(JSON.stringify({ message: 'Invalid API key' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });

		const accessToken: string = generateAccessToken(publicKey)
		const refreshToken: string = jwt.sign(
			{ apiKey: publicKey },
			privateKey
		)

        await client.tokens
            .create({
                data: {
                    token: refreshToken,
                    v: 0,
                },
            });

        return new Response(JSON.stringify({ accessToken, refreshToken }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ message: (error as Error)?.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
