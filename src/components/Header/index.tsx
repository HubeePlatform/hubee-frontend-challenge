import { Badge, IconButton, Link } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Container } from './styled';

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <Container maxWidth="lg">
      <img src={logoImg} alt="Hubee" />

      <Link href="/cart">
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
