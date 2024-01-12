import { useCallback, useEffect, useMemo, useState } from 'react'
import { debounce } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { IBio } from '../../@types/IBio'
import { PublicationsContainer } from './styles'
import { api } from '../../http/api'
import { Bio } from './components/Bio'
import Publication from './components/Publication'

interface Issue {
  id: number
  title: string
  created_at: string
  body: string
  number: number
}

export function Home() {
  const [bio, setBio] = useState<IBio>({} as IBio)
  const [publications, setPublications] = useState<Issue[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResultAmount, setSearchResultAmount] = useState(0)
  const [loadBioError, setLoadBioError] = useState(false)

  const user = 'rodrigobruno'
  const repo = 'github-blog'

  const loadBio = useCallback(async () => {
    api
      .get(`/users/${user}`)
      .then((response) => {
        setBio({
          img: response.data.avatar_url,
          name: response.data.name,
          githubLink: response.data.html_url,
          description: response.data.bio,
          githubUser: response.data.login,
          company: response.data.company,
          followers: response.data.followers,
        })
      })
      .catch((error) => {
        console.log(error)
        setLoadBioError(true)
      })
  }, [])

  const loadInitialPublications = useCallback(async () => {
    api.get(`/repos/${user}/${repo}/issues`).then((response) => {
      setPublications(response.data)
      setSearchResultAmount(response.data.length)
    })
  }, [])

  const debouncedSearchPublications = useMemo(
    () =>
      debounce(async (query) => {
        api
          .get(`/search/issues?q=${query}%20repo:${user}/${repo}/`)
          .then((response) => {
            setPublications(response.data.items)
            setSearchResultAmount(response.data.items.length)
          })
      }, 500),
    [],
  )

  function handleSearchPublications(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    setSearchTerm(value)
    debouncedSearchPublications(value)
  }

  useEffect(() => {
    loadBio()
    loadInitialPublications()
  }, [loadBio, loadInitialPublications])

  return (
    <>
      <Bio {...bio} error={loadBioError} />
      <PublicationsContainer>
        <section className="search">
          <div className="title">
            <h2>Publicações</h2>
            <span>
              {searchResultAmount}{' '}
              {searchResultAmount === 1 ? 'publicação' : 'publicações'}
            </span>
          </div>
          <div className="input">
            <input
              type="search"
              onChange={handleSearchPublications}
              value={searchTerm}
              placeholder="Buscar conteúdo"
            />
            {searchTerm === '' && (
              <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            )}
          </div>
        </section>
        <section className="publications">
          {publications.length > 0 &&
            publications.map((publication) => {
              return (
                <Publication
                  key={publication.id}
                  title={publication.title}
                  time={publication.created_at}
                  text={publication.body}
                  anchor={publication.number}
                />
              )
            })}

          {publications.length < 1 && <p>Nenhuma publicação 😞</p>}
        </section>
      </PublicationsContainer>
    </>
  )
}
