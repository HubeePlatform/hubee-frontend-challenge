import styled from "styled-components";

export const ModalSuccessComponent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f2f2f2;
  padding: 5%;
  text-align: center;

  & > * {
    padding: 10px 0px;
  }
`;
