import type { NextPage } from 'next'
import Head from 'next/head'
import { 
  BoxCart, 
  ContainerMainCart, 
  ContainerCartItems, 
  ContainerCartSumary, 
  CSpan, 
  BtnCart,
  Space,
  TextContainer,
  TextFieldContainer,
  BtnContainer,
  ContainerEmpty
 } from '../../styles/PageStyles';
import MenuBar from '../../components/header' 
import Footer from '../../components/footer' 
import CartCard from '../../components/cart-card';
import { Typography, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { InitialProduct } from '../../types/Product';
import { useEffect, useState } from 'react';
import CartNo from '../../components/cart-no'
import { api } from '../../services/api';
import Swal from 'sweetalert2'
import storage from 'redux-persist/lib/storage';
import { LaptopWindowsSharp } from '@material-ui/icons';

interface ProdState {
  products: InitialProduct[] | any;
}

interface IPropsCupons{
  key: string;
  isActive: boolean;
  rebatePercentage: number;
}

const Cart: NextPage = () => {

  const data = useSelector((state: ProdState) => state.products);

  const [item, setItem] = useState<InitialProduct[]>([]); 
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [cupom, setCupom] = useState<string>("");
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [teste, setTeste] = useState("");

  useEffect(() => {
    setItem(data.products);
  }, [data.products]);

  useEffect(() => {
      if(item.length > 0){
      const n = item.map(p => {
        let value = parseFloat(p.price.toString()) * p.quantity  
        return value
      })
      const subtotalValue = n.reduce((a, b) => a + b, 0)
      setSubtotal(subtotalValue)
    }
  }, [item])


  useEffect(() => {
    const valorDescontado = subtotal * (discount / 100)
    
    setTotalDiscount(valorDescontado)
      },[subtotal])


  function handleDiscount(e: string){
    console.log("ssss", teste)
    api.get(`/coupons`).then(response => {
      const cupons = response.data
      if(discount){
        Swal.fire('Ooops', 'Você já usou um cupom!', 'error')
        return
      } else{
        const cupomIndex = cupons.findIndex((p : IPropsCupons) => p.key === e);
        if(cupomIndex !== -1){
          if(cupons[cupomIndex].isActive === false){
            Swal.fire('Ooops', 'Este cupom está Inativo, tente com outro!!!', 'error')
            return 
          } else{
            const cupom = cupons[cupomIndex]
            const percentual = cupom.rebatePercentage
            const valorDescontado = subtotal * (cupom.rebatePercentage / 100)
            setDiscount(percentual)
            setTotalDiscount(valorDescontado)
          }
        } else{
          Swal.fire('Ooops', 'Este cupom é inválido, tente com outro!!!', 'error')
        }
      }
    }).catch(error => {console.log(error)});
    return 
  }



function FinalizarPedido(){
      const cartId = Math.random().toFixed(3);
      const desconto = subtotal - totalDiscount;  

      api.post("carts", data).then(() => {
        const data = {
          id: cartId,
          coupon: cupom,
          items: [item],
          totalPrice: desconto
        }
    })

    api.post("orders", data).then(() => {
      const data = {
        id: Math.random().toFixed(4),
        cartId: cartId,
        finalized: true
      }

       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Pedido finalizado com sucesso!',
        showConfirmButton: false,
        timer: 3000
      })  
  })
  
  sessionStorage.clear();
  
  setInterval(function(){
    window.location.reload(); 
  }, 5000);

  return
  }


  return (
    <div>
        <Head>
          <title>Hubee | Cart</title>
        </Head>  
        <MenuBar qtd={item.length}/>
        <div>   
          {
            item.length <= 0 ? (
              <ContainerEmpty>
                <CartNo />
              </ContainerEmpty>
           ) : (
          <ContainerMainCart>
            <ContainerCartItems>
            {item.map(products => (
                  <BoxCart key= {products.id}>
                    <CartCard 
                      name= {products.name}
                      price= {products.price}
                      url= {products.url}
                      quantity= {products.quantity}
                      id= {products.id}
                    />
                  </BoxCart>  
              ))}
            </ContainerCartItems>
            <ContainerCartSumary>
            <TextContainer>
                <Typography variant="h6" component="h6">
                SUBTOTAL: 
                </Typography>
                <CSpan>{subtotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</CSpan>
              </TextContainer>
              <Space />
              <TextFieldContainer>
              <TextField id="outlined-basic" label="CUPOM DESCONTO" variant="outlined" onChange={e => setCupom(e.target.value)}/>
              <BtnCart  
                  style={{ 
                    background: "#9c27b0", 
                    color: "#fff"
                  }}
                  variant='contained'
                  size="large"
                  onClick={() => handleDiscount(cupom)}
                  >
                  Aplicar
                </BtnCart>
              </TextFieldContainer>
              <BtnCart 
                  style={{ 
                  marginTop: "10px",  
                  borderColor: "#9c27b0", 
                  color: "#9c27b0"
                  }}
                  variant='outlined'
                  size="large"
                  onClick={() => {window.location.reload()}}>
                  Limpar Cupom
                </BtnCart>
              <Space />
              <TextContainer>
                <Typography variant="h6" component="h6">
                DESCONTO: {cupom  ? cupom : ""}
                </Typography>
                <CSpan>- {totalDiscount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</CSpan>
              </TextContainer>
              <Space />
              <TextContainer>
                <Typography variant="h6" component="h6">
                VALOR TOTAL: 
                </Typography>
                <CSpan>{(subtotal - totalDiscount).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</CSpan>
              </TextContainer>
              <BtnContainer>
                <BtnCart  
                  style={{ 
                    background: "#9c27b0", 
                    color: "#fff"
                  }}
                  variant='contained'
                  size="large"
                  onClick={() => {FinalizarPedido()}}>
                  Finalizar Pedido
                </BtnCart>
                <BtnCart 
                  style={{ 
                  borderColor: "#9c27b0", 
                  color: "#9c27b0"
                  }}
                  variant='outlined'
                  size="large"
                  href="/">
                  Continuar Comprando
                </BtnCart>
              </BtnContainer>
            </ContainerCartSumary>
            </ContainerMainCart>
           )}

        </div>
        <Footer />      
    </div>
  )
}

export default Cart