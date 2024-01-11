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

    .input {
      position: relative;

      input:is([type='text'], [type='search']) {
        border-radius: 6px;
        border: 1px solid ${(props) => props.theme['blue-500']};
        color: ${(props) => props.theme['blue-200']};
        background: ${(props) => props.theme['blue-900']};
        padding: 0.75rem 1rem;
        width: 100%;

        &::placeholder {
          color: ${(props) => props.theme['blue-400']};
        }

        &:focus {
          box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
        }
      }

      input + span {
        display: inline-block;
        color: ${(props) => props.theme.blue};
        position: absolute;
        right: 1.5rem;
        transform: translateY(50%);
      }
    }
  }

  .publications {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`
