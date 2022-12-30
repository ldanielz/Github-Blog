import { HeaderSearchForm, SearchFormContainer } from '../styles/searchForm'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface SearchFormProps {
  issuesLength: number
  searchPosts: (query?: string) => Promise<void>
}
const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm({ issuesLength, searchPosts }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPost(data: SearchFormInputs) {
    await searchPosts(data.query)
  }

  return (
    <>
      <SearchFormContainer onSubmit={handleSubmit(handleSearchPost)}>
        <HeaderSearchForm>
          <p>Publicações</p>
          <span>{issuesLength} publicações</span>
        </HeaderSearchForm>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchFormContainer>
    </>
  )
}
