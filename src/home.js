import React from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { FiTruck } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import { CiPercent } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from "react-icons/bs";
import Homeproduct from './homeproduct';
import './home.css'
import './home.responsive.css'
const Home = ({ detail, view, close, setClose, addtocart}) => {
  const navigate = useNavigate();
  const handleBoxClick = (category) => {
    navigate('/product', { state: { filterCategory: category } });
  };
  return (
    <>
    {
      close ?
        <div className='product_detail'>
          <div className='container'>
            <button onClick={() => setClose(false)}className='closebtn'><AiOutlineCloseCircle /></button>
            {
              detail.map((curElm) =>
                 {
                        return(
                            <div className='productbox'>
                                <div className='img-box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                </div>
                                <div className='detail'>
                                    <h4>{curElm.Cat}</h4>
                                    <h2>{curElm.Title}</h2>
                                    <h3>{curElm.Price}</h3>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='productbox'></div>
            </div>
        </div> : null
      }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>Everything You Need In One Place</h2>
                <p>We make school shopping easy, affordable and stress free.</p>
                <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
            </div>
            <div className='img_box'>
              <img src='./img/two.jpg' alt=''></img>
            </div>
        </div>
    </div>
    <div className='product_type'>
      <div className='container'>
        <div className='box' onClick={() => handleBoxClick('School Supplies')}>
          <div className='img_box'>
            <img src='./img/School supplies.png' alt=''></img>
          </div>
          <div className='detail'>
            <h3>School Supplies</h3>
            <p>13 Products</p>
          </div>
        </div>
        <div className='box' onClick={() => handleBoxClick('Gadgets And Accessories')}>
          <div className='img_box'>
              <img src='./img/Laptop Accessories.png' alt=''></img>
          </div>
          <div className='detail'>
            <h3>Tech. Devices</h3>
            <p>35 Products</p>
          </div>
        </div> 
        <div className='box' onClick={() => handleBoxClick('Shoes')}>
          <div className='img_box'>
            <img src='./img/Shoes.png' alt=''></img>
          </div>
          <div className='detail'>
            <h3>Shoes</h3>
            <p>6 Products</p>
          </div>
        </div>
        <div className='box' onClick={() => handleBoxClick('Textbooks')}>
          <div className='img_box'>
            <img src='./img/stack-of-books.png' alt=''></img>
          </div>
          <div className='detail'>
            <h3>Textbooks</h3>
            <p>11 Products</p>
          </div>
        </div>
      </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>Free delivery of items less than <TbCurrencyNaira />10000</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <TbCurrencyNaira />
          </div>
          <div className='detail'>
            <h3>Refund Policy</h3>
            <p>Money back guarantee</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <CiPercent />
          </div>
          <div className='detail'>
            <h3>Member Discount</h3>
            <p>On every order</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
          <TfiHeadphoneAlt />
          </div>
          <div className='detail'>
            <h3>Customer Support</h3>
            <p>24/7 Call Support</p>
          </div>
        </div>
      </div>
    </div>
    <div className='product'>
      <h2>Top Products</h2>
      <div className='container'>
        {
          Homeproduct.map((curElm) =>
          {
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                    <li onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></li>
                    <li onClick={() => view (curElm)}><BsEye /></li>
                  </div>
                </div>
                <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>#{curElm.Price}</h4>
                </div>
              </div> 
            )
          })
        }
      </div>
    </div>
    <div className='banner'>
      <div className='container'>
        <div className='detail'>
          <h4>LATEST PRODUCT ADDED</h4>
          <h3>Samsung Galaxy S25 Ultra, 12GB RAM, 256GB/512GB/1TB SSD</h3>
          <p><TbCurrencyNaira /> 2,250,000 - <TbCurrencyNaira /> 2,570,000.</p>
          <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
        </div>
        <div className='img_box'>
          <img src='./img/la30.png' alt='S25 Ultra'></img>
        </div>
      </div>
    </div>
    </>
  )
}
export default Home