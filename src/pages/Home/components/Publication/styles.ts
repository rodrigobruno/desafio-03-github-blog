import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PublicationContainer = styled(Link)`
  /* flex-basis: 50%; */
  text-decoration: none;

  article {
    background: ${(props) => props.theme['blue-600']};
    border-radius: 10px;
    column-gap: 1.25rem;
    display: grid;
    grid-template-columns: 75% auto;
    grid-template-rows: auto 1fr;
    padding: 2rem;
    row-gap: 1rem;
    border: 2px solid ${(props) => props.theme['blue-600']};

    &:hover {
      border: 2px solid ${(props) => props.theme['blue-400']};
    }

    h3 {
      color: ${(props) => props.theme.white};
      font-size: 1.25rem;
      font-weight: 700;
    }

    time {
      color: ${(props) => props.theme['blue-300']};
      font-size: 0.875rem;
      line-height: 130%;

      &:first-letter {
        text-transform: uppercase;
      }
    }

    p {
      align-content: start;
      color: ${(props) => props.theme['blue-200']};
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`
