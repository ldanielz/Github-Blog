import { styled } from '..'
import headerBg from '../../src/assets/header-bg.png'

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 0',
  width: '100%',
  height: '18.5rem',

  background: `url(${headerBg.src}) no-repeat center`,
  backgroundSize: 'cover',

  img: {
    marginBottom: '5rem',
  },
})

export const AppContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '54rem',
  margin: '0 auto',
})
