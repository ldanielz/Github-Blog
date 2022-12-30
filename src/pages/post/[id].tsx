import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { api } from '../../lib/axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import {
  PostCardContainer,
  PostCardContent,
  PostContainer,
} from '../../../styles/pages/post'

export default function Post({ issue }: any) {
  const markdown = issue.body
  return (
    <>
      <Head>
        <title>{issue.title}</title>
      </Head>
      <PostCardContainer>
        <PostCardContent>
          <header>
            <Link href={'/'}>
              <FontAwesomeIcon icon={faChevronLeft} /> <span>VOLTAR</span>
            </Link>
            <Link href={issue.url} target="_blank" rel="noreferrer">
              <span>VER NO GITHUB</span>
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </Link>
          </header>
          <h1>{issue.title}</h1>
          <footer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{issue.user.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <span>{issue.comments} comentários</span>
            </div>
          </footer>
        </PostCardContent>
      </PostCardContainer>
      <PostContainer>
        <ReactMarkdown
          components={{
            code({ node, children, className, inline, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dracula as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </PostContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<
  any,
  { id: string }
> = async ({ params }) => {
  const issueNumber = params!.id

  const issueData = await api.get('get-issues', {
    params: {
      issueNumber,
    },
  })
  return {
    props: { issue: issueData.data.issue },
  }
}
