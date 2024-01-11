import styled from 'styled-components'
import blankLink from '../../../../assets/blank-link.svg'

export const BioContainer = styled.section`
  align-items: center;
  background: ${(props) => props.theme['blue-700']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 2rem;
  padding: 2rem 2.5rem;
  margin-bottom: 4.5rem;

  img {
    border-radius: 8px;
  }

  .infoContainer {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;

    .name {
      align-items: center;
      display: flex;
      justify-content: space-between;

      h2 {
        color: ${(props) => props.theme.white};
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 130%;
      }

      a {
        color: ${(props) => props.theme.blue};
        cursor: pointer;
        font-size: 0.75rem;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
          text-decoration: underline;
        }

        &[target='_blank']::after {
          background: ${(props) => props.theme.blue};
          content: '';
          display: inline-block;
          height: 1rem;
          margin-left: 0.5rem;
          mask-image: url(${blankLink});
          -webkit-mask-image: url(${blankLink});
          mask-size: 0.75rem;
          mask-repeat: no-repeat;
          vertical-align: middle;
          width: 1rem;
        }
      }
    }

    .info {
      align-items: center;
      display: flex;
      gap: 1.5rem;
      list-style-type: none;
      margin-top: 1rem;

      li {
        align-items: center;
        color: ${(props) => props.theme['blue-100']};
        display: flex;
        gap: 0.5rem;

        svg {
          color: ${(props) => props.theme['blue-400']};
        }
      }
    }
  }
`
