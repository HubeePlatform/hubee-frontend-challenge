import styled from 'styled-components';

export const Container = styled.main`
  padding: 4rem 1.5rem;
  max-width: 1224px;
  margin: 0 auto;

  > .MuiFormControl-root {
    width: min(32rem, 100%);
  }

  ul {
    margin-top: 2rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5rem 1.5rem;

    @media(max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }
`;
