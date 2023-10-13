import { useState } from "react";
import { Fab } from "@mui/material";
import { QtdButtonsContainer } from "./style";

export const QtdButtons: React.FC = () => {
  const [count, setCount] = useState(1);

  return (
    <QtdButtonsContainer>
      <Fab color="error" variant="extended" size="small">
        -
      </Fab>
      <Fab color="success" variant="extended" size="small">
        +
      </Fab>
    </QtdButtonsContainer>
  );
};
