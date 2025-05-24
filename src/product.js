import React, { useEffect } from 'react'
import './product.css'
import './product.responsive.css'
import Productdetail from './productdetail'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from 'react-router-dom';

const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {
    const location = useLocation();
    const filterCategory = location.state?.filterCategory;

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const filterproduct = (product) =>
    {
        const update = Productdetail.filter((x) =>
        {
            return x.Cat === product;
        })
        setProduct(update)
    }
    const AllProduct = () =>
    {
        setProduct(Productdetail)
    }

    useEffect(() => {
        if(filterCategory){
            filterproduct(filterCategory);
        } else {
            AllProduct();
        }
    }, [filterCategory]);

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
                                <h3>#{curElm.Price}</h3>
                                <button onClick={() => addtocart(curElm)}>Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }
    <div className='products'>
        <h2>Product</h2>
        <p>Home . products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>Categories</h3>
                    <ul>
                        <li onClick={() => AllProduct("")}>All Products</li>
                        <li onClick={() => filterproduct("School Supplies")}>School Supplies</li>
                        <li onClick={() => filterproduct("Gadgets And Accessories")}>Gadgets And Accessories</li>
                        <li onClick={() => filterproduct("Shoes")}>Shoes</li>
                        <li onClick={() => filterproduct("Textbooks")}>Textbooks</li>
                    </ul>
                </div>
            </div>
            <div className='productbox'>
                <div className='content'>
                    {
                        product.map((curElm) =>
                        {
                            return(
                                    <div className='box' key={curElm.id}>
                                        <div className='img_box'>
                                            <img src={curElm.Img} alt={curElm.Title}></img>
                                            <div className='icon'>
                                                {
                                                    isAuthenticated ?
                                                    <li onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></li>
                                                    :
                                                    <li onClick={() => loginWithRedirect()}><AiOutlineShoppingCart /></li>
                                                }
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
        </div>
    </div>
    </>
  )
}

export default Product
