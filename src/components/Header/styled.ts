import styled from 'styled-components';

export const Container = styled.header`
  margin: 2rem auto 0;
  padding: 0 1.5rem;
  max-width: 1224px;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  
  img {
    max-height: 100px;
    cursor: pointer;
  }
  
  a {
    color: var(--gray-100);

    span {
      font-weight: 500;
    }

    button {
      color: var(--gray-100);

      svg + span {
        color: var(--gray-100);
        background: var(--gray-800);
      }
    }
  }
`;
