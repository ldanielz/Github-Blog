import { NextApiRequest, NextApiResponse } from 'next'
import { apiGitHub } from '../../lib/axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const username = process.env.GITHUB_USERNAME

  const userData = await apiGitHub.get(`users/${username}`)

  return res.status(201).json({
    user: userData.data,
  })
}
