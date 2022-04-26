import * as React from 'react';
import { styled } from '@mui/material/styles';
import { DeleteOutlineOutlined, RemoveCircleOutline, AddCircleOutline } from "@material-ui/icons";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { TextPlain, GridPlain } from "./styles";
import { CardMedia } from '@mui/material';
import { RemoveProduct, IncProduct, DecProduct } from '../../store/Products/Products.actions';
import { useDispatch, useSelector } from 'react-redux';
import { InitialProduct } from '../../types/Product';
import { useCallback } from 'react';

export const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function CartCard({id, name, price, url, quantity}: InitialProduct) {
  const dispatch = useDispatch();

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 800,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 150}}>
          <CardMedia
            component="img"
            alt={name}
            height="110"
            image={url}
          />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
              Vendido e entregue por BRSHOPS
              </Typography>
              <Typography variant="h6" component="div">
                R$ {(Number(price)*quantity).toLocaleString('pt-br', {minimumFractionDigits: 2})}
              </Typography>
            </Grid>
          </Grid>
          <GridPlain>
          <Typography sx={{ cursor: 'pointer' }} variant="body2">
            <RemoveCircleOutline
                  fontSize="medium"
                  style={{ color: "#000" }}
                  onClick={() => dispatch(DecProduct(id))}
              />
          </Typography>
              <TextPlain variant="body1">
              <strong>{quantity}</strong>
              </TextPlain> 
            <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <AddCircleOutline
                  fontSize="medium"
                  style={{ color: "#000" }}
                  onClick={() => dispatch(IncProduct(id))}
              />
            </Typography>
          </GridPlain>
        </Grid>
        <Grid item>
        <Typography sx={{ cursor: 'pointer' }} variant="body2">
            <DeleteOutlineOutlined
                fontSize="medium"
                style={{ color: "#000" }}
                onClick={() => dispatch(RemoveProduct(id))}
            />
        </Typography> 
          </Grid>
      </Grid>
    </Paper>
  );
}


