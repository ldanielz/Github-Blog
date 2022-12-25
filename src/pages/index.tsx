import Image from 'next/image'
import { HomeContainer, Profile } from '../../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <Profile>
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/11758463?v=4"
            width={148}
            height={148}
            alt=""
          />
        </div>
        <div>
          <header></header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            inventore eveniet veritatis, eius porro temporibus officia suscipit
            voluptatem pariatur
          </p>
          <footer>
            <span>cameronwll</span>
            <span>Rocketseat</span>
            <span>32 seguidores</span>
          </footer>
        </div>
      </Profile>
    </HomeContainer>
  )
}
