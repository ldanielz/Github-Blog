import Image from 'next/image'

import {
  HeaderSearchForm,
  PostCard,
  PostTitle,
  PostsContainer,
  ProfileCard,
  ProfileCardContent,
  ProfileCardImage,
  SearchFormContainer,
} from '../../styles/pages/home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { GetServerSideProps } from 'next'
import { api } from '../lib/axios'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface HomeProps {
  user: {
    avatarUrl: string
    name: string
    htmlUrl: string
    bio: string
    login: string
    company: string
    followers: number
  }
  issues: {
    id: string
    url: string
    title: string
    createdAt: string
    body: string
    issueNumber: string
  }[]
}

export default function Home({ user, issues }: HomeProps) {
  return (
    <>
      <ProfileCard>
        <ProfileCardImage>
          <Image src={user.avatarUrl} width={148} height={148} alt="" />
        </ProfileCardImage>
        <ProfileCardContent>
          <header>
            <h1>{user.name}</h1>
            <a href={user.htmlUrl} target="_blank" rel="noreferrer">
              GITHUB <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </header>
          <p>{user.bio}</p>
          <footer>
            <div>
              <FontAwesomeIcon icon={faGithub} /> <span>{user.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} /> <span>{user.company}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />{' '}
              <span>{user.followers} followers</span>
            </div>
          </footer>
        </ProfileCardContent>
      </ProfileCard>
      <SearchFormContainer>
        <HeaderSearchForm>
          <p>Publicações</p>
          <span>{issues.length} publicações</span>
        </HeaderSearchForm>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchFormContainer>

      <PostsContainer>
        {issues.map((issue) => {
          return (
            <Link
              href={`/post/${issue.issueNumber}`}
              key={issue.id}
              prefetch={false}
            >
              <PostCard>
                <PostTitle>
                  <h1>{issue.title}</h1>
                  <span>
                    {formatDistanceToNow(new Date(issue.createdAt), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </PostTitle>
                <p>{issue.body}</p>
              </PostCard>
            </Link>
          )
        })}
      </PostsContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { user: userData },
  } = await api.get('get-user', {
    params: {
      username: 'ldanielz',
    },
  })
  const {
    data: { issues: issuesData },
  } = await api.get('get-issues', {
    params: {
      q: '',
      repo: 'github-blog',
      username: 'ldanielz',
    },
  })

  const issues = issuesData.items.map(
    (item: {
      id: string
      url: string
      title: string
      created_at: string
      body: string
      number: number
    }) => {
      return {
        id: item.id,
        url: item.url,
        title: item.title,
        createdAt: item.created_at,
        body: item.body,
        issueNumber: item.number.toString(),
      }
    },
  )

  return {
    props: {
      user: {
        avatarUrl: userData.avatar_url,
        name: userData.name,
        htmlUrl: userData.html_url,
        bio: userData.bio,
        login: userData.login,
        company: userData.company,
        followers: userData.followers,
      },
      issues,
    },
    // revalidate: 60,
  }
}
