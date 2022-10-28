import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    height: 3rem;
    padding: 0 1.75rem;
    border-radius: 0.25rem;
    background: var(--background);
    border: var(--background);
    color: var(--white);

    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--placeholder);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type='submit'] {
    width: 100%;
    height: 3rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    border-radius: 0.25rem;
    background: var(--green);
    color: var(--white);
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
