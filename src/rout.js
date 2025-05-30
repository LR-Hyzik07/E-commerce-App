import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Product from './product'
import Cart from './cart'
import Contact from './contact'

const Rout = ({product, setProduct, searchbtn, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
    <div>
        <Routes>
            <Route path='/' element={<Home product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
            <Route path='/product' element={<Product product={product} setProduct={setProduct} searchbtn={searchbtn} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      
    </div>
    </>
    
  )
}

export default Rout
