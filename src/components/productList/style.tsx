import styled from "styled-components";

interface Props {
  open: boolean;
}

export const ProductListContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  overflow-y: auto;

  @media (max-width: 600px) {
    display: ${(props: any) => (!props.open ? "none" : "grid")};
    grid-template-columns: 1fr;
  }
`;
