import styled from 'styled-components';

export const Container = styled.li`
  border: 2px solid var(--gray-100);
  background: var(--gray-800);

  img {
    width: 100%;
    height: 100%;
    max-height: 220px;
    object-fit: cover;
  }

  div {
    padding: 1rem;

    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-gap: 1rem;

    h4 {
      font-weight: 500;
      font-size: 1.25rem;
      color: var(--gray-100);
    }

    p {
      font-weight: 600;
      font-size: 2rem;
      color: var(--gray-100);

      span {
        padding-left: .5rem;

        font-size: 1rem;
        font-weight: 400;
        color: var(--gray-300);
      }
    }
  }

  button {
    margin: 4px;
    width: calc(100% - 8px);
  }
`;
