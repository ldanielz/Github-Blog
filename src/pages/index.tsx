import Image from 'next/image'
import { HomeContainer, Profile } from '../../styles/pages/home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'

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
          <header>
            <h1>Cameron Williamson</h1>
            <a href="">
              GITHUB <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </header>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <footer>
            <div>
              <FontAwesomeIcon icon={faGithub} /> <span>userName</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} /> <span>Comapany</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} /> <span>32 followers</span>
            </div>
          </footer>
        </div>
      </Profile>
    </HomeContainer>
  )
}
