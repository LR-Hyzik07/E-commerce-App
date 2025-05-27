import React, {useState} from 'react'
import Navigate from './nav'
import Rout from './rout'
import {BrowserRouter} from 'react-router-dom'
import Footer from './Footer/footer'
import Productdetail from './productdetail'
const App = () => {
  //add to cart
  const [cart, setCart] = useState([])
  //product detail
  const[close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (category) =>
  {
    const trimmedCategory = category.trim();
    console.log("Filtering category:", trimmedCategory);
    if(trimmedCategory === "All Products"){
      setProduct(Productdetail);
      console.log("Showing all products");
    } else {
      const change = Productdetail.filter((x) =>
      {
        return x.Cat === trimmedCategory
      })
      setProduct(change);
      console.log("Filtered products count:", change.length);
    }
  }
  //product detail
  const view = (product) =>
  {
    setDetail([{...product}])
    setClose(true)
  }
  //add to  cart
  const addtocart = (product) => 
  {
    const exist = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exist)
    {
      alert("This Product is already added to cart")
    }  
    else
    {
      setCart([...cart, {...product, qty: 1}])
      alert("Product added to cart")
    }
  }

  console.log(cart);

  return (
    <>
    <BrowserRouter>
    <Navigate searchbtn={searchbtn}/>
    <Rout product={product} setProduct={setProduct} searchbtn={searchbtn} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
    <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App

