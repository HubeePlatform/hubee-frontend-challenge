import { Badge, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { Container } from './styled';

export function Header() {
  return (
    <Container>
      <Link to="/" title="ir para home">
        <img src={logoImg} alt="Hubee" />
      </Link>

      <Link to="/cart" title="ir para o carrinho">
        <span>meu carrinho</span>
        <IconButton aria-label="cart">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart fontSize="large" />
          </Badge>
        </IconButton>
      </Link>
    </Container>
  );
}
