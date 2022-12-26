import { styled } from '..'

export const HomeContainer = styled('main', {
  background: '$base-profile',
})
export const Profile = styled('div', {
  display: 'flex',
  alignContent: 'center',
  gap: '2rem',

  padding: '2rem',
  marginTop: -90,

  background: '$base-profile',
  borderRadius: 10,
  boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.2)',

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',

    h1: {
      fontWeight: 700,
      fontSize: '$xl',
      lineHeight: 1.3,

      color: '$base-title',
    },
    a: {
      fontWeight: 700,
      fontSize: '$sm',
      lineHeight: 1.6,
      color: '$blue',
    },
  },
  p: {
    fontWeight: 400,
    fontSize: '$nm',
    lineHeight: 1.6,
    color: '$base-text',
    marginBottom: '1.5rem',
  },

  footer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',

    div: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',

      fontSize: '$nm',
      color: '$base-subtitle',

      svg: {
        color: '$base-label',
        width: 18,
        height: 18,
      },
    },
  },
})
