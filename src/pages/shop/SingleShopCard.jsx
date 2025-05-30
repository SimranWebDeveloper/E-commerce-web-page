import React from 'react'
import { NavLink } from 'react-router-dom'
import WishListBtn from '../home/WishListBtn'
import { useCart } from 'react-use-cart';
import {  toast } from 'react-toastify';

const SingleShopCard = ({product}) => {
    // add to card
    const {addItem}=useCart()
// col-12 col-sm-12 col-md-6  col-lg-4 col-xl-3
  return (
    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 py-2'>
    <div className='singelCard position-relative '>
      <div className="img-box d-flex justify-content-center align-items-center" >
        <img src={import.meta.env.VITE_BACKEND_URL + product.thumbnail} style={{objectFit:'contain'}} className="card-img-top" alt="..." />
        </div>
        <div className="text-center  border-top p-3">
            <h5 className="card-title" >{(product.title).length<30 ?
               (product.title):(product.title).slice(0,30)+'...' }</h5>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <button className='btn btn-outline-success' onClick={()=>{addItem(product);toast.success("added to cart")}}>Sebete at</button>

            <div className='d-flex justify-content-evenly align-items-center position-absolute bottom-0 w-100  '>
              <WishListBtn product={product}/>
              <NavLink to={`../details/${product.id}`} className='text-success bg-semibold'>read more...</NavLink>
              
            </div>

        </div>
    </div>
  </div>
  )
}

export default SingleShopCard