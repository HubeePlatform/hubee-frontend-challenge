import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import Link from "next/link";
import { Container, TextH1, ButtonCart } from "./styles";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Badge from "@mui/material/Badge";

interface Props {
  qtd: number;
}

export default function header({qtd}: Props) {

  return (
    <Container>
      <TextH1>BRSHOPS</TextH1>
      <ButtonCart>
        <Link href="/cart">
        <Badge badgeContent={qtd | 0} color="secondary">
        <ShoppingCartOutlined
            fontSize="medium"
            style={{ color: "#fff" }}
        />
        </Badge>
        </Link>
      </ButtonCart>
    </Container>
  );
}