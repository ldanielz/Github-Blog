import { styled } from '../../../styles'

export const SearchFormContainer = styled('form', {
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
