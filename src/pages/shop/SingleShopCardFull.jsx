import React from 'react'
import { NavLink } from 'react-router-dom'
import WishListBtn from '../home/WishListBtn'
import { useCart } from 'react-use-cart';
import {  toast } from 'react-toastify';

const SingleShopCardFull = ({product}) => {
    // add to card
    const {addItem}=useCart()

  return (
    <div className=' py-2'>
    <div className='SingleShopCardFull position-relative '>
        <div className='container'>
            <div className='row border-top '>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 '>
                    <div className="img-box " >
                    <img src={product.thumbnail} style={{objectFit:'contain'}} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-8'>
                <div className="  p-3">
            <h5 className="card-title">{product.title}</h5>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <button className='btn btn-outline-primary' onClick={()=>{addItem(product);toast.success("added to cart")}}>Sebete at</button>

            <p>Lorem ipsum dolor sit amet</p>
            <div className='d-flex justify-content-between align-items-center position-absolute  '>
              <WishListBtn product={product}/>
              <NavLink to={`../details/${product.id}`} className='btn text-black bg-semibold  '>read more...</NavLink>
            </div>

        </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default SingleShopCardFull