import styled from 'styled-components'

export const PublicationsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 14.5rem;

  .search {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .title {
      align-items: center;
      display: flex;
      justify-content: space-between;

      h2 {
        color: ${(props) => props.theme['blue-100']};
        font-size: 1.125rem;
        font-weight: 700;
      }

      span {
        color: ${(props) => props.theme['blue-300']};
        font-size: 0.875rem;
      }
    }

    input[type='text'] {
      border-radius: 6px;
      border: 1px solid ${(props) => props.theme['blue-500']};
      color: ${(props) => props.theme['blue-200']};
      background: ${(props) => props.theme['blue-900']};
      padding: 0.75rem 1rem;

      &::placeholder {
        color: ${(props) => props.theme['blue-400']};
      }

      &:focus {
        box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
      }
    }
  }

  .publications {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`
