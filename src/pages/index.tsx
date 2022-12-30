import Image from 'next/image'

import {
  PostCard,
  PostTitle,
  PostsContainer,
  ProfileCard,
  ProfileCardContent,
  ProfileCardImage,
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
import { SearchForm } from '../components/SearchForm'
import { useState } from 'react'

interface Post {
  id: string
  url: string
  title: string
  createdAt: string
  body: string
  issueNumber: string
}
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
  issues: Post[]
}

export default function Home({ user, issues }: HomeProps) {
  const [postList, setPostList] = useState<Post[]>(issues)

  async function searchPosts(query?: string) {
    try {
      const response = await api.get('search-issues', {
        params: {
          q: query,
        },
      })
      const postsData = response.data.issues

      const posts = postsData.items.map(
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

      setPostList(posts)
    } catch (error) {
      alert('Falha ao realizar a busca.')
    }
  }

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
      <SearchForm issuesLength={postList.length} searchPosts={searchPosts} />

      <PostsContainer>
        {postList.map((post) => {
          return (
            <Link
              href={`/post/${post.issueNumber}`}
              key={post.id}
              prefetch={false}
            >
              <PostCard>
                <PostTitle>
                  <h1>{post.title}</h1>
                  <span>
                    {formatDistanceToNow(new Date(post.createdAt), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </PostTitle>
                <p>{post.body}</p>
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
  } = await api.get('get-user')
  const {
    data: { issues: issuesData },
  } = await api.get('get-issues')

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
