import styled from 'styled-components'

export const ContentContainer = styled.div`
  margin-bottom: 8rem;
  padding: 2.5rem 2rem;

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${(props) => props.theme.blue};

    &:hover {
      text-decoration: none;
    }
  }

  dl,
  ol,
  ul {
    margin-block: 1rem 2rem;
    padding-left: 2rem;
  }

  pre {
    background: ${(props) => props.theme['blue-600']};
    border-radius: 3px;
    color: ${(props) => props.theme.white};
    font-family: 'Courier New', Courier, monospace;
    margin-block: 2rem 3rem;
    padding: 1rem;
  }

  code {
    background: ${(props) => props.theme['blue-600']};
    border-radius: 3px;
    color: ${(props) => props.theme.white};
    font-family: 'Courier New', Courier, monospace;
    padding: 0.25rem 0.5rem;
  }
`
