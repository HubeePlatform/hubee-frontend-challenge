import { TextField } from '@material-ui/core';
import { ChangeEvent, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { IProduct } from '../../store/modules/cart/type';
import { CardProduct } from './components/CardProduct';
import { Container } from './styled';

export function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    api.get('products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  function onFilterProducts(product: IProduct) {
    return product.name.includes(filter);
  }

  return (
    <>
      <Header />
      <Container>
        <TextField
          label="filtrar..."
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFilter(e.target.value);
          }}
        />
        <ul>
          {products.filter(onFilterProducts).map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </ul>
      </Container>
    </>
  );
}
