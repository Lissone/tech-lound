import { getAccessToken } from '@auth0/nextjs-auth0'
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware'

export const config = {
  api: {
    bodyParser: false
  }
}

// necessary to create a proxy middleware because auth0 only allows accessing the token through the server side
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { accessToken } = await getAccessToken(req, res)

  return httpProxyMiddleware(req, res, {
    target: process.env.NEXT_PUBLIC_BASE_URL_API,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}
