import { Button, Modal, Typography } from "@mui/material";
import { useCart } from "../../../hooks/useCart";
import { ModalSuccessComponent } from "./style";

export const ModalSuccess: React.FC = () => {
  const { handleNewCart, modal } = useCart();
  return (
    <Modal
      open={modal}
      aria-labelledby="modal-success"
      aria-describedby="modal success for buy"
    >
      <ModalSuccessComponent>
        <img alt="name" src="/img/success.png" width={"200px"} />
        <Typography fontWeight={"bold"} fontSize={"20px"} align="center">
          Compra realizada com sucesso
        </Typography>
        <Button fullWidth variant="contained" onClick={handleNewCart}>
          Comprar novamente
        </Button>
      </ModalSuccessComponent>
    </Modal>
  );
};
