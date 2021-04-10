import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Container, Content, Wrapper, ButtonLogo } from "./styles";

import { IProduct } from "../../store/modules/cart/types";
import { IState } from "../../store";
import { useSelector } from "react-redux";

import logo from "../../assets/logoHubee.svg";

const Header = (): JSX.Element => {
  const cart = useSelector<IState, IProduct[]>((state) => state.cart.items);
  const cartLength = cart.length;

  return (
    <Container>
      <Content>
        <ButtonLogo to="/">
          <img src={logo} alt="Hubee" />
        </ButtonLogo>

        <Wrapper to="/cart">
          <strong>Meu carrinho</strong>

          <Badge badgeContent={cartLength} color="primary">
            <ShoppingCartOutlined
              fontSize="large"
              style={{ color: "#272C59" }}
            />
          </Badge>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Header;
