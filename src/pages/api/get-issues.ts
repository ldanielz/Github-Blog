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
  const issueNumber = req.query?.issueNumber
  const { q, repo, username } = req.query

  if (issueNumber) {
    const issueUnique = await apiGitHub.get(
      `/repos/${username}/${repo}/issues/${issueNumber}`,
    )
    return res.status(201).json({
      issue: issueUnique.data,
    })
  }
  const issuesData = await apiGitHub.get(
    `/search/issues?q=${q} repo:${username}/${repo}`,
  )
  return res.status(201).json({
    issues: issuesData.data,
  })
}
