import styled from 'styled-components';

export const Container = styled.li`
  position: relative;

  display: flex;

  border: 2px solid var(--gray-100);
  background: var(--gray-800);
  margin-bottom: 1.5rem;

  > button {
    position: absolute;
    top: -2px;
    right: -2px;

    width: 2.5rem;
  }

  img {
    height: 200px;
    max-width: 180px;
    width: 180px;
    object-fit: cover;
  }

  p {
    font-weight: 500;
    font-size: 1.75rem;
    color: var(--gray-100);
    text-align: left;

    padding: 1rem;
    width: 475px;
  }    
`;

export const ButtonGroup = styled.div`
  border: 2px solid var(--gray-100);
  padding: 0;
  margin: auto 0 auto auto;

  display: flex;
  justify-content: space-between;
  height: 3rem;
  width: 13rem;

  button {
    margin: -2px;
  }

  span {
    padding: 0 1.75rem;

    display: flex;
    align-items: center;

    font-size: 1.75rem;
    color: var(--gray-100);
    font-weight: 600;
  }
`;

export const Subtotal = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: auto;
  padding: 1rem;
  width: 15rem;

  color: var(--gray-100);
  font-size: 2rem;
  font-weight: 500;

  small {
    display: flex;
    align-items: flex-end;

    font-size: 1rem;
    color: var(--gray-300);

    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;
