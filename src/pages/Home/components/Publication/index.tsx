import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PublicationContainer } from './styles'
import { IPublications } from '../../../../@types/IPublications'

export default function Publication({
  title,
  time,
  text,
  anchor,
}: IPublications) {
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

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <>
      <PublicationContainer to={`post/${anchor}`}>
        <article>
          <h3>{title}</h3>
          <time dateTime={publishedDateISO} title={publishedDateFormatted}>
            {publishedDateRelativeToNow}
          </time>
          <p>{truncatePublicationContent(text)}</p>
        </article>
      </PublicationContainer>
    </>
  )
}
