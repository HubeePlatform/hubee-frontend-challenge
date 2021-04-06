import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useState } from "react";

import {
  Container,
  Content,
  WrapperTitle,
  WrapperProducts,
  Products,
  ButtonIcon,
  WrapperButton,
  Input,
  Footer,
  ButtonDiscount,
  WrapperPrices,
  WrapperPricesDescont,
} from "./styles";

const Cart = (): JSX.Element => {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <Content>
        <WrapperTitle>
          <h2>Resumo do pedido</h2>
        </WrapperTitle>

        <WrapperProducts>
          <Products>
            <p>Produto 1 </p>
          </Products>
          <WrapperButton>
            <ButtonIcon>
              <RemoveIcon style={{ color: "#e52e4d" }} />
            </ButtonIcon>
            <p>{value}</p>
            <ButtonIcon>
              <AddIcon style={{ color: "#33cc95" }} />
            </ButtonIcon>
          </WrapperButton>
          <Products>
            <p>R$ 200,00</p>
          </Products>
        </WrapperProducts>

        <WrapperProducts>
          <Products>
            <p>Produto 1 </p>
          </Products>
          <WrapperButton>
            <ButtonIcon>
              <RemoveIcon style={{ color: "#e52e4d" }} />
            </ButtonIcon>
            <p>{value}</p>
            <ButtonIcon>
              <AddIcon style={{ color: "#33cc95" }} />
            </ButtonIcon>
          </WrapperButton>
          <Products>
            <p>R$ 200,00</p>
          </Products>
        </WrapperProducts>

        <WrapperProducts>
          <Products>
            <p>Produto 1 </p>
          </Products>
          <WrapperButton>
            <ButtonIcon>
              <RemoveIcon style={{ color: "#e52e4d" }} />
            </ButtonIcon>
            <p>{value}</p>
            <ButtonIcon>
              <AddIcon style={{ color: "#33cc95" }} />
            </ButtonIcon>
          </WrapperButton>
          <Products>
            <p>R$ 200,00</p>
          </Products>
        </WrapperProducts>

        <WrapperProducts>
          <Products>
            <p>Produto 1 </p>
          </Products>
          <WrapperButton>
            <ButtonIcon>
              <RemoveIcon style={{ color: "#e52e4d" }} />
            </ButtonIcon>
            <p>{value}</p>
            <ButtonIcon>
              <AddIcon style={{ color: "#33cc95" }} />
            </ButtonIcon>
          </WrapperButton>
          <Products>
            <p>R$ 200,00</p>
          </Products>
        </WrapperProducts>

        <Footer>
          <Input
            id="outlined-basic"
            label="Cupom de desconto"
            variant="outlined"
          />

          <ButtonDiscount
            variant="contained"
            size="small"
            color="primary"
            style={{ background: "#272C59" }}
          >
            ADICIONAR
          </ButtonDiscount>
          <WrapperPrices>
            <p>Subtotal</p>
            <strong>R$ 200,00</strong>
          </WrapperPrices>
          <WrapperPricesDescont>
            <p>Cupom "hubee" aplicado</p>
            <strong> - R$ 200,00</strong>
          </WrapperPricesDescont>
          <WrapperPrices>
            <p>Total</p>
            <strong>R$ 200,00</strong>
          </WrapperPrices>
        </Footer>
      </Content>
    </Container>
  );
};

export default Cart;
