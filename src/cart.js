import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './cart.css';
const Cart = ({ cart, setCart }) => {
  //increase qty
  const incqty = (product) => 
  {
    const exist = cart.find((x) =>
    {
      return x.id === product.id
    })
    setCart(cart.map((curElm) => 
    {
      return curElm.id === product.id ? {...exist, qty: exist.qty + 1} : curElm
    }))
      
  }

  //decrease qty
  const decqty = (product) => 
  {
    const exist = cart.find((x) => 
    {
      return x.id === product.id
    })
    setCart(cart.map((curElm) => 
    {
      return curElm.id === product.id ? {...exist,qty: exist.qty - 1}:curElm
    }))
  }
    //Remove cart product
    const removeproduct = (product) =>
    {
      const exist = cart.find((x) =>
      {
        return x.id === product.id
      })
      if(exist.qty > 0)
      {
        setCart(cart.filter((x) => 
        {
          return x.id !== product.id
        }))
      }
    }
    //total price
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
  return (
    <>
      <div className='cartcontainer'>
        {cart.length === 0 && (
          <div className='emptycart'>
            <h2 className='empty'>Cart is Empty</h2>
            <Link to='/product' className='emptycartbtn'>Shop Now</Link>
          </div>
        )}
        <div className='content'>
          {cart.map((curElm) => {
            return (
              <div className='cart_item' key={curElm.Id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                </div>
                <div className='detail'>
                  <div className='info'>
                  <h4>{curElm.Cat}</h4>
                  <h3>{curElm.Title}</h3>
                  <p>Price: #{curElm.Price}</p>
                  <div className='qty'>
                    <button className='incqty' onClick={() => incqty(curElm)}>+</button>
                    <input type='text' value={curElm.qty}></input>
                    <button className='decqty' onClick={() => decqty(curElm)}>-</button>
                  </div>
                  <h3 className='subtotal'>Sub Total: #{curElm.Price * curElm.qty}</h3>
                  </div>
                  <div className='close'>
                  <button onClick={() => removeproduct(curElm)}><AiOutlineClose /></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
          {
          cart.length > 0 &&
          <>
          <h1 className='totalprice'>Total: # {Totalprice}</h1>
          <button className='checkout' onClick={async () => {
            try {
const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(cart),
              });
              if (response.ok) {
                alert('Order placed successfully!');
                setCart([]);
              } else {
                alert('Failed to place order.');
              }
            } catch (error) {
              alert('Error placing order.');
            }
          }}>Checkout</button>
          </>
        }
      </div>
    </>
  );
};

export default Cart;
