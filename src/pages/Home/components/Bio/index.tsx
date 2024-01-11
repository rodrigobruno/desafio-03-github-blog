import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { BioContainer } from './styles'
import { IBio } from '../../../../@types/IBio'

export function Bio(infos: IBio) {
  const followersText = infos.followers === 1 ? 'seguidor' : 'seguidores'

  return (
    <BioContainer>
      {infos && (
        <>
          <img src={infos.img} alt={infos.name} />
          <div className="infoContainer">
            <div className="name">
              <h2>{infos.name}</h2>
              <a
                href={infos.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </div>
            {infos.description && (
              <p className="description">{infos.description}</p>
            )}
            <ul className="info">
              {infos.githubUser && (
                <li>
                  <FontAwesomeIcon icon={faGithub} /> {infos.githubUser}
                </li>
              )}
              {infos.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} /> {infos.company}
                </li>
              )}
              {infos.followers && (
                <li>
                  <FontAwesomeIcon icon={faUserGroup} /> {infos.followers}{' '}
                  {followersText}
                </li>
              )}
            </ul>
          </div>
        </>
      )}
      {!infos && <p>Algo deu errado 💩</p>}
    </BioContainer>
  )
}
