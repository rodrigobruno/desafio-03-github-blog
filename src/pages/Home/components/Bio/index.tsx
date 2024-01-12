import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { BioContainer } from './styles'
import { IBio } from '../../../../@types/IBio'

interface BioProps extends IBio {
  error: boolean
}

export function Bio({
  img,
  name,
  githubLink,
  description,
  githubUser,
  company,
  followers,
  error,
}: BioProps) {
  const followersText = followers === 1 ? 'seguidor' : 'seguidores'

  return (
    <BioContainer>
      {!error && (
        <>
          <img src={img} alt={name} />
          <div className="infoContainer">
            <div className="name">
              <h2>{name}</h2>
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  github
                </a>
              )}
            </div>
            {description && <p className="description">{description}</p>}
            <ul className="info">
              {githubUser && (
                <li>
                  <FontAwesomeIcon icon={faGithub} /> {githubUser}
                </li>
              )}
              {company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} /> {company}
                </li>
              )}
              {followers && (
                <li>
                  <FontAwesomeIcon icon={faUserGroup} /> {followers}{' '}
                  {followersText}
                </li>
              )}
            </ul>
          </div>
        </>
      )}
      {error && <p>Algo deu errado 💩</p>}
    </BioContainer>
  )
}
