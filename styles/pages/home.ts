import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '54rem',
  margin: '0 auto',
})
export const Profile = styled('div', {
  width: '100%',
  display: 'flex',
  alignContent: 'center',
  gap: '2rem',

  padding: '2rem',
  marginTop: -90,
  marginBottom: 72,

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

export const SearchFormContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  marginBottom: '3rem',

  input: {
    flex: 1,
    borderRadius: 6,
    background: '$base-input',
    border: '1px solid $base-border',
    padding: '0.75rem 1rem',

    color: '$base-text',

    '&:focus': {
      outline: 'none !important',
      border: '1px solid $blue',
    },

    '&::placeholder': {
      color: '$base-label',
    },
  },
})

export const HeaderSearchForm = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',

  lineHeight: 1.6,

  p: {
    fontWeight: 700,
    fontSize: '$md',
    color: '$base-subtitle',
  },

  span: {
    fontWeight: 400,
    fontSize: '$sm',
    color: '$base-span',
  },
})

export const PostsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(26rem, 1fr))',
  alignItems: 'stretch',
  gap: '2rem',
  marginBottom: '4rem',
})

export const Post = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  borderRadius: 10,
  background: '$base-post',
  height: '16.25rem',
  border: '2px solid $base-post',

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
export const PostContent = styled('p', {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontWeight: 400,
  fontSize: '$nm',
  lineHeight: 1.6,

  color: '$base-text',
})
