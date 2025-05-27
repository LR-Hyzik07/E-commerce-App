import React, { useState, useEffect } from 'react'
import './product.css'
import './product.responsive.css'
import Productdetail from './productdetail'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

const Product = ({product, setProduct, searchbtn, detail, view, close, setClose, addtocart}) => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    // State to hold unique categories
    const [categories, setCategories] = useState([]);

    // On component mount, extract unique categories from Productdetail
    useEffect(() => {
        const uniqueCategories = [...new Set(Productdetail.map(item => item.Cat))];
        setCategories(uniqueCategories);
    }, []);

    const filterproduct = (category) =>
    {
        console.log("Filter clicked for category:", category);
        searchbtn(category);
    }

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
                            <div className='productbox' key={curElm.id}>
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
                            <li onClick={() => filterproduct("All Products")}>All Products</li>
                            {
                                categories.map((cat) => (
                                    <li key={cat} onClick={() => filterproduct(cat)}>{cat}</li>
                                ))
                            }
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
                                                    <ul>
                                                        {
                                                            isAuthenticated ?
                                                            <li type="button" onClick={() => addtocart(curElm)} className="icon-btn"><AiOutlineShoppingCart /></li>
                                                            :
                                                            <li type="button" onClick={() => loginWithRedirect()} className="icon-btn"><AiOutlineShoppingCart /></li>
                                                        }
                                                        <li type="button" onClick={() => view(curElm)} className="icon-btn"><BsEye /></li>
                                                    </ul>
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
