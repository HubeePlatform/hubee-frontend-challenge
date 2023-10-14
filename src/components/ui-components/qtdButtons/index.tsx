import { useState } from "react";
import { Fab, Typography } from "@mui/material";
import { QtdButtonsContainer } from "./style";

interface Props {
  handleSetCount: (value: number) => void;
  qtd?: number;
}
export const QtdButtons: React.FC<Props> = ({ handleSetCount, qtd }) => {
  const [count, setCount] = useState(qtd || 1);

  const handleIncrement = () => {
    setCount(count + 1);
    handleSetCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      handleSetCount(count - 1);
    }
  };

  return (
    <QtdButtonsContainer>
      <Fab
        color="error"
        variant="extended"
        size="small"
        onClick={handleDecrement}
      >
        -
      </Fab>
      <Typography>{count}</Typography>
      <Fab
        color="success"
        variant="extended"
        size="small"
        onClick={handleIncrement}
      >
        +
      </Fab>
    </QtdButtonsContainer>
  );
};
