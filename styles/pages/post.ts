import { styled } from '@stitches/react'

export const PostCardContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignContent: 'center',
  gap: '2rem',

  padding: '2rem',
  minHeight: '10.5rem',
  marginTop: '-5.5rem',
  marginBottom: '2.5rem',

  background: '$base-profile',
  borderRadius: 10,
  boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.2)',
})

export const PostCardContent = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',

    a: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 700,
      fontSize: '$sm',
      lineHeight: 1.6,
      color: '$blue',
      textDecoration: 'none',
      borderTop: '3px solid transparent',
      borderBottom: '3px solid transparent',
      gap: 8,
    },
  },
  h1: {
    fontWeight: 700,
    fontSize: '$xl',
    lineHeight: 1.3,
    color: '$base-title',
    marginTop: '1rem',
    marginBottom: '0.5rem',
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

export const PostContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  gap: '1rem',
  padding: '2rem',
  marginBottom: '4rem',
  color: '$base-text',

  fontFamily: 'Nunito',
  fontSize: '$nm',
  lineHeight: 1.6,

  img: {
    width: '100%',
  },
  'h1, h2, h3': {
    color: '$blue',
  },

  ul: {
    listStyle: 'inherit',
    paddingLeft: '1.5rem',
  },

  pre: {
    '>div': {
      background: '$base-post !important',
    },
  },

  code: {
    background: 'none !important',
  },
})
