import { styled } from '..'
import headerBg from '../../src/assets/header-bg.png'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 864,
  margin: '0 auto',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 0',
  width: '100%',
  height: 296,

  margin: '0 auto',

  background: `url(${headerBg}) no-repeat center`,
  backgroundSize: 'cover',

  img: {
    marginBottom: '5rem',
  },
})
