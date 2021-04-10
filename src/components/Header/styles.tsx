import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: var(--white);
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    padding: 0 24px;
  }
`;

export const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  img {
    width: 200px;
    height: 80px;

    @media (max-width: 640px) {
      width: 100px;
      height: 50px;
    }
  }
`;

export const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  strong {
    display: block;
    color: var(--blue);
    margin-right: 5px;
  }
`;

export const ButtonLogo = styled(Link)``;
