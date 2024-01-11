import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { BioContainer } from './styles'
import { IBio } from '../../../../@types/IBio'

export function Bio({
  img,
  name,
  githubLink,
  description,
  githubUser,
  company,
  followers,
}: IBio) {
  const followersText = followers === 1 ? 'seguidor' : 'seguidores'

  return (
    <BioContainer>
      <img src={img} alt={name} />
      <div className="infoContainer">
        <div className="name">
          <h2>{name}</h2>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </div>
        <p className="description">{description}</p>
        <ul className="info">
          <li>
            <FontAwesomeIcon icon={faGithub} /> {githubUser}
          </li>
          {company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} /> {company}
            </li>
          )}
          <li>
            <FontAwesomeIcon icon={faUserGroup} /> {followers} {followersText}
          </li>
        </ul>
      </div>
    </BioContainer>
  )
}
