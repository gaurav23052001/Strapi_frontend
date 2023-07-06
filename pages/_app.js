import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import { useEffect, useState } from 'react'


export default function App({ Component, pageProps }) {
  useEffect(()=>{

  
    return ()=>{
   
    }
  },[])

  const [cart, setCart]= useState([])
  const [reloadKey,setReloadKey]= useState(1)

  const addToCart=(item,qty)=>{
    let newCart= cart
    for (let index = 0; index < qty; index++) {
      newCart.push(item)
    } 
    console.log("Add to cart",newCart);   
    setCart(newCart)
    setReloadKey(Math.random())
  }

  const removeToCart=(item)=>{
    let newCart= cart
    let index= newCart.indexOf(item)
    newCart.splice(index)
    setCart(newCart)
  }

  const cleanCart=(item)=>{
    setCart([])
  }

  return <><Navbar key={reloadKey} cart={cart}/><Component  cart={cart} addToCart={addToCart} removeToCart={removeToCart} cleanCart={cleanCart}  {...pageProps} /></>
}
