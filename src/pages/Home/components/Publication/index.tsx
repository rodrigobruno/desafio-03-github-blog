import { PublicationContainer } from './styles'
import { IPublications } from '../../../../@types/IPublications'
import {
  dateFormatted,
  dateISO,
  dateRelativeToNow,
} from '../../../../utils/dateFormat'
import { truncateText } from '../../../../utils/truncateText'

export default function Publication({
  title,
  time,
  text,
  anchor,
}: IPublications) {
  return (
    <>
      <PublicationContainer to={`post/${anchor}`}>
        <article>
          <h3>{title}</h3>
          <time dateTime={dateISO(time)} title={dateFormatted(time)}>
            {dateRelativeToNow(time)}
          </time>
          <p>{truncateText(text)}</p>
        </article>
      </PublicationContainer>
    </>
  )
}
