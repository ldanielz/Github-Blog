import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 0',
  width: '100%',

  margin: '0 auto',

  background: '$base-profile',
})
