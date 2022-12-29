import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { api, apiJson } from '../../lib/axios'
import axios from 'axios'

export default function Post({ issueId }: any) {
  return (
    <>
      <Head>
        <title>{issueId}</title>
      </Head>
      <div>{issueId}</div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const issueId = params.id

  const issuesData = await api.get('get-issues', {
    params: {
      id: issueId,
      q: 'principais',
      repo: 'github-blog',
      username: 'ldanielz',
    },
  })

  return {
    props: { issueId },
  }
}
