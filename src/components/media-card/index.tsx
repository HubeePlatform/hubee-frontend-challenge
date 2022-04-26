import CardMedia from '@material-ui/core/CardMedia';
import React, { useEffect, useState } from 'react'
import { CardFlex, BtnComprar, Stars } from "./styles";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@mui/material/Rating';
import { AddShoppingCartOutlined } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { InitialProduct } from '../../types/Product';
import { useDispatch, useSelector } from 'react-redux';
import { AddProduct } from '../../store/Products/Products.actions';

export default function MediaCard({name, price, url, functionAdd}: InitialProduct) {
  const products = useSelector((state: any) => state.products)
  const dispatch = useDispatch()

  return (
    <CardFlex>
      <CardMedia
        component="img"
        alt={name}
        height="200"
        image={url}
      />
      <CardContent>
        <Stars>
        <Rating name="size-small" defaultValue={3} size="small" />
        </Stars>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h5" color="textSecondary" >
          <strong>R$ {price}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        <BtnComprar 
          style={{ 
            background: "#000", 
            color: "#fff"
        }}
          variant='contained'
          size="large"
          onClick={functionAdd}
          href="/cart">
            Comprar
        </BtnComprar>
      </CardActions>
      <CardActions>
        <BtnComprar
          onClick={functionAdd}                     
          variant='outlined'
          size="large"
          startIcon={<AddShoppingCartOutlined/>}>
            Adicionar ao Carrinho
        </BtnComprar>
      </CardActions>
    </CardFlex>
  );
}