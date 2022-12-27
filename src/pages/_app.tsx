import type { AppProps } from 'next/app'
import { globalStyles } from '../../styles/global'
import { Header } from '../../styles/pages/app'
import Image from 'next/image'

import logoImage from '../assets/logo-github-blog.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <Image src={logoImage} alt="" />
      </Header>
      <Component {...pageProps} />
    </>
  )
}
