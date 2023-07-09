import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import { useEffect, useState } from 'react'
import Footer from "../components/Footer"
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  useEffect(()=>{
    <Head>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>``
    </Head>
  
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

  return <><Navbar key={reloadKey} cart={cart}/><Component  cart={cart} addToCart={addToCart} removeToCart={removeToCart} cleanCart={cleanCart}  {...pageProps} /><Footer/></>
}
