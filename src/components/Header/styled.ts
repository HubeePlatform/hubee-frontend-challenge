import { Container as ContainerMaterial } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(ContainerMaterial)`
  margin-top: 2rem;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  
  img {
    max-height: 100px;
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
