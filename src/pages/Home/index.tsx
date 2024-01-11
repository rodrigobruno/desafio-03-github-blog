import { useCallback, useEffect, useState } from 'react'
import { IBio } from '../../@types/IBio'
import { PublicationsContainer } from './styles'
import { Bio } from './components/Bio'
import api from '../../http/api'
import Publication from './components/Publication'

export function Home() {
  const [bio, setBio] = useState<IBio>({} as IBio)

  const loadBio = useCallback(async () => {
    const user = 'rodrigobruno'

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

  useEffect(() => {
    loadBio()
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
          <Publication
            title="JavaScript data types and data structures"
            time="2024-01-10"
            text="Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts
            to list the built-in data structures available in JavaScript and
            what properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages
            are drawn. Dynamic typing JavaScript is a loosely typed and
            dynamic language. Variables in JavaScript are not directly
            associated with any particular value type, and any variable can be
            assigned values of all types"
            anchor="#"
          />
        </section>
      </PublicationsContainer>
    </>
  )
}
