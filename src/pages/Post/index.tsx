import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Title } from './components/Title'
import { api } from '../../http/api'
import Content from './components/Content'

interface IPublication {
  title: string
  body: string
  login: string
  comments: number
  created_at: string
  html_url: string
}

export function Post() {
  const { id } = useParams()
  const [publication, setPublication] = useState<IPublication>(
    {} as IPublication,
  )
  const [loadPublicationError, setLoadPublicationError] = useState(false)
  const [loadPublication404, setLoadPublication404] = useState(false)

  const loadPublications = useCallback(async () => {
    const user = 'rodrigobruno'
    const repo = 'github-blog'

    api
      .get(`/repos/${user}/${repo}/issues/${id}`)
      .then((response) => {
        setPublication({
          title: response.data.title,
          body: response.data.body,
          login: response.data.user.login,
          comments: response.data.comments,
          created_at: response.data.created_at,
          html_url: response.data.html_url,
        })
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setLoadPublication404(true)
        } else {
          setLoadPublicationError(true)
        }
      })
  }, [id])

  useEffect(() => {
    loadPublications()
  }, [loadPublications])

  const navigate = useNavigate()

  if (loadPublication404) {
    return navigate('/')
  }

  return (
    <main>
      <article>
        <Title
          title={publication.title}
          githubLink={publication.html_url}
          githubUser={publication.login}
          time={publication.created_at}
          comments={publication.comments}
          error={loadPublicationError}
        />
        <Content body={publication.body} />
      </article>
    </main>
  )
}
