import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PublicationContainer } from './styles'

interface PublicationProps {
  title: string
  time: string
  text: string
  anchor: string
}

export default function Publication({
  title,
  time,
  text,
  anchor,
}: PublicationProps) {
  const truncatePublicationContent = (text: string) => {
    const maxLength = 180

    if (text.length <= 180) {
      return text
    }

    let trimmedText = text.substring(0, maxLength)
    trimmedText = trimmedText.substring(
      0,
      Math.min(trimmedText.length, trimmedText.lastIndexOf(' ')),
    )

    return trimmedText + '...'
  }

  const publishedAt = new Date(time)
  const publishedDateISO = publishedAt.toISOString()
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <>
      <PublicationContainer href={anchor}>
        <article>
          <h3>{title}</h3>
          <time dateTime={publishedDateISO}>{publishedDateRelativeToNow}</time>
          <p>{truncatePublicationContent(text)}</p>
        </article>
      </PublicationContainer>
    </>
  )
}
