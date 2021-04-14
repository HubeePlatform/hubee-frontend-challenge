import styled from 'styled-components';

export const Container = styled.main`
  padding: 4rem 1.5rem;
  max-width: 1224px;
  margin: 0 auto;
  color: var(--gray-100);

  h4 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }

  ul {
    margin-top: 1.25rem;
  }
`;

export const Summary = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    width: 50%;
    margin-top: 1.25rem;

    font-size: 2rem;
    font-weight: 500;
    text-align: right;

    small {
      padding-right: 1rem; 
      font-size: 1.25rem;
    }

    &:not(.total) {
      color: var(--gray-300);
    }

    &.total {
      padding-top: 1.25rem;
      border-top: 2px solid var(--gray-300);
    }
  }
`;

export const ActionsCart = styled.div`
  width: 75%;
  margin-left: auto;
  margin-top: 5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
`;
