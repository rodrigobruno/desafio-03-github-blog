import styled from 'styled-components'
import headerBg from '../../assets/header-bg.png'
import headerBgLeft from '../../assets/header-bg-left.svg'
import headerBgRight from '../../assets/header-bg-right.svg'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['blue-700']};
  background-image: url(${headerBgLeft}), url(${headerBgRight}),
    url(${headerBg});
  background-position:
    left 4.375rem,
    right center,
    center top;
  background-repeat: no-repeat, no-repeat, no-repeat;
  display: flex;
  justify-content: center;
  padding-block: 4rem 8.375rem;
`
