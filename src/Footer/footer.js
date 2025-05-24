import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './footer.css'
import './footer_responsive.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/logo.png' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>Follow Us On Social Media For Constant Updates On Deals</p>
                    <div className='icon'>
                        <li><FaFacebook /></li>
                        <li><FaInstagram /></li>
                        <li><FaTwitter /></li>
                        <li><FaWhatsapp /></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
