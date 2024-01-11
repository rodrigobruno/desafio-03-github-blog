import { useCallback, useEffect, useState } from 'react'
import { IBio } from '../../@types/IBio'
import { PublicationsContainer } from './styles'
import { Bio } from './components/Bio'
import api from '../../http/api'
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
  const user = 'rodrigobruno'

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
      })
  }, [])

  const loadInitialPublications = useCallback(async () => {
    const repo = 'github-blog'

    api
      .get(`/repos/${user}/${repo}/issues`)
      .then((response) => {
        setPublications(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    loadBio()
    loadInitialPublications()
  }, [])

  return (
    <>
      <Bio {...bio} />
      <PublicationsContainer>
        <section className="search">
          <div className="title">
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </div>
          <input type="text" placeholder="Buscar conteúdo" />
        </section>
        <section className="publications">
          {publications.map((publication) => {
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
        </section>
      </PublicationsContainer>
    </>
  )
}
