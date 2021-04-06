import logo from "../../assets/logoHubee.svg";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

import { Container, Content, Wrapper, ButtonLogo } from "./styles";

const Header = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <ButtonLogo to="/">
          <img src={logo} alt="Hubee" />
        </ButtonLogo>

        <Wrapper to="/cart">
          <strong>Meu carrinho</strong>

          <Badge badgeContent={4} color="primary">
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
