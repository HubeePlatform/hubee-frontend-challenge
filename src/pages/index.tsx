import type { NextPage } from 'next'
import Head from 'next/head'
import MenuBar from '../components/header' 
import Footer from '../components/footer' 
import { BoxContent, ContainerMain } from '../styles/PageStyles';
import { useCallback, useEffect, useState } from 'react';
import { api } from '../services/api';
import { InitialCartState, InitialProduct } from '../types/Product';
import MediaCard from '../components/media-card';
import {useSelector, useDispatch} from "react-redux"
import {AddProduct} from "../store/Products/Products.actions"

const Home: NextPage = () => {
  //useSelector do Redux
  const data = useSelector((state: any) => state.products);

  const [itemC, setItemC] = useState<InitialProduct[]>([]); 

  useEffect(() => {
    setItemC(data.products);
  }, [data.products]);


  const dispatch = useDispatch()

  const [item, setItem] = useState<InitialProduct[]>([]); 
    useEffect(() => {
      api.get("/products").then(response => {
        setItem(response.data);
      });
    }, []);
  
  return (
    <div>
        <Head>
          <title>Hubee | Home</title>
        </Head>  
        <MenuBar qtd={itemC.length} />
        <ContainerMain>
          <BoxContent>
          {item.map(product => (
            <MediaCard 
              key= {product.id} 
              id= {product.id}
              name={product.name} 
              price={product.price.toLocaleString('pt-br', {minimumFractionDigits: 2})} 
              url={product.url} 
              quantity={product.quantity}
              functionAdd = {() => dispatch(AddProduct(product, product.quantity = 1))}
            />
          ))}  
          </BoxContent>
        </ContainerMain>
        <Footer />
       
    </div>
  )
}



export default Home