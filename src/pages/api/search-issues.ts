// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiGitHub } from '../../lib/axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const { q } = req.query
  const username = process.env.GITHUB_USERNAME
  const repo = process.env.GITHUB_REPO

  const postData = await apiGitHub.get(
    `/search/issues?q=${q} repo:${username}/${repo}`,
  )
  return res.status(201).json({
    issues: postData.data,
  })
}
