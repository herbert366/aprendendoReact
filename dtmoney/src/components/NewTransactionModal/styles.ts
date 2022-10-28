import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    height: 3.5rem;
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
    border: 0;
    width: 100%;
    height: 4rem;
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
export const TransactionTypeContainer = styled.div`
  display: grid;
  margin: 1rem 0;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
`
interface RadioBoxPros {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#015F43',
  red: '#AA2834',
}

export const RadioBox = styled.button<RadioBoxPros>`
  height: 4rem;

  border: 1px solid #29292e;
  border-radius: 0.25rem;
  padding: 0 1.5rem;

  background: ${props =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : '#29292E'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.1, '#29292E')};
  }

  img {
    height: 24px;
    width: 24px;
  }

  span {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`
