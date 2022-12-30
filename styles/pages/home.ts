import { styled } from '..'

export const ProfileCard = styled('div', {
  width: '100%',
  display: 'flex',
  alignContent: 'center',
  gap: '2rem',

  padding: '2rem',
  minHeight: '13.25rem',
  marginTop: '-5.5rem',
  marginBottom: 72,

  background: '$base-profile',
  borderRadius: 10,
  boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.2)',
})

export const ProfileCardImage = styled('div', {
  img: {
    width: '9.25rem',
    height: '9.25rem',
    borderRadius: 8,
    objectFit: 'cover',
  },
})

export const ProfileCardContent = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',

    h1: {
      fontWeight: 700,
      fontSize: '$xl',
      lineHeight: 1.3,
      color: '$base-title',
    },
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
    marginTop: 'auto',

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

export const PostsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(26rem, 1fr))',
  alignItems: 'stretch',
  gap: '2rem',
  marginBottom: '4rem',
  a: {
    textDecoration: 'none',
    color: '$base-text',
  },
})

export const PostCard = styled('div', {
  width: '100%',
  height: '16.25rem',
  padding: '2rem',
  borderRadius: 10,
  background: '$base-post',
  border: '2px solid $base-post',

  p: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 5,
  },

  '&:hover': {
    border: '2px solid $base-label',
  },
})

export const PostTitle = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
  marginBottom: '1.25rem',
  h1: {
    flex: 1,
    fontWeight: 700,
    fontSize: '$md',
    color: '$base-title',
    lineHeight: 1.3,
  },
  span: {
    width: 'max-content',
    display: 'flex',
    fontWeight: 400,
    fontSize: '$sm',
    lineHeight: 1.6,
    color: '$base-span',
  },
})
