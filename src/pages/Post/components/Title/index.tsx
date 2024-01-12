import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { TitleContainer } from './styles'
import {
  dateFormatted,
  dateISO,
  dateRelativeToNow,
} from '../../../../utils/dateFormat'

interface TitleProps {
  title: string
  githubLink: string
  githubUser: string
  time: string
  comments: number
  error: boolean
}

export function Title({
  title,
  githubLink,
  githubUser,
  time,
  comments,
  error,
}: TitleProps) {
  const commentsText = comments === 1 ? 'comentário' : 'comentários'

  return (
    <TitleContainer>
      {!error && (
        <>
          <nav>
            <a href="#" className="back">
              Voltar
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </nav>

          <h1>{title}</h1>

          <ul className="info">
            <li>
              <FontAwesomeIcon icon={faGithub} /> {githubUser}
            </li>
            {time && (
              <li>
                <FontAwesomeIcon icon={faCalendarDay} />{' '}
                <time dateTime={dateISO(time)} title={dateFormatted(time)}>
                  {dateRelativeToNow(time)}
                </time>
              </li>
            )}
            <li>
              <FontAwesomeIcon icon={faComment} /> {comments} {commentsText}
            </li>
          </ul>
        </>
      )}
      {error && <p>Algo deu errado 💩</p>}
    </TitleContainer>
  )
}
