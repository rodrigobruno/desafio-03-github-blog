import logoGithubBlog from '../../assets/logo-github-blog.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoGithubBlog} alt="" />
    </HeaderContainer>
  )
}
