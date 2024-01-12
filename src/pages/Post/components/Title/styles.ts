import styled from 'styled-components'
import blankLink from '../../../../assets/blank-link.svg'
import backLink from '../../../../assets/icon-chevron-left.svg'

export const TitleContainer = styled.header`
  background: ${(props) => props.theme['blue-700']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;

  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme.blue};
      cursor: pointer;
      display: flex;
      font-size: 0.75rem;
      font-weight: 700;
      gap: 0.5rem;
      line-height: 0;
      text-decoration: none;
      text-transform: uppercase;
      align-items: center;

      &:hover {
        text-decoration: underline;
      }

      &[target='_blank']::after {
        background: ${(props) => props.theme.blue};
        content: '';
        display: inline-block;
        height: 0.75rem;
        mask-image: url(${blankLink});
        -webkit-mask-image: url(${blankLink});
        mask-size: 0.65rem;
        mask-repeat: no-repeat;
        vertical-align: middle;
        width: 0.7rem;
      }

      &.back::before {
        background: ${(props) => props.theme.blue};
        content: '';
        display: inline-block;
        height: 0.75rem;
        mask-image: url(${backLink});
        -webkit-mask-image: url(${backLink});
        mask-size: 0.43rem;
        mask-repeat: no-repeat;
        vertical-align: middle;
        width: 0.5rem;
      }
    }
  }

  h1 {
    margin-block: 1.25rem 0.5rem;
  }

  .info {
    align-items: center;
    display: flex;
    gap: 1.5rem;
    list-style-type: none;

    li {
      align-items: center;
      color: ${(props) => props.theme['blue-300']};
      display: flex;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['blue-400']};
      }
    }
  }
`
