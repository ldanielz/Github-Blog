import Image from 'next/image'
import {
  HeaderSearchForm,
  HomeContainer,
  Post,
  PostContent,
  PostTitle,
  PostsContainer,
  Profile,
  SearchFormContainer,
} from '../../styles/pages/home'
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
      <SearchFormContainer>
        <HeaderSearchForm>
          <p>Publicações</p>
          <span>6 publicações</span>
        </HeaderSearchForm>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchFormContainer>

      <PostsContainer>
        <Post>
          <PostTitle>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </PostTitle>
          <PostContent>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo = bar; // foo is now a string foo = true; // foo is now a
            boolean
          </PostContent>
        </Post>
        <Post>
          <PostTitle>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </PostTitle>
          <PostContent>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo = bar; // foo is now a string foo = true; // foo is now a
            boolean
          </PostContent>
        </Post>
      </PostsContainer>
    </HomeContainer>
  )
}
