import React from 'react'
import WishListBtn from '../WishListBtn';
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import {  toast } from 'react-toastify';


const SingleCard = ({product}) => {
  // add to card
  const {addItem}=useCart()

  return (
    
    <div className='col-12 col-sm-12 col-md-6  col-lg-4 col-xl-3'>
      <div className='singelCard position-relative p-4'>
        <div className="img-box " >
          <img src={import.meta.env.VITE_BACKEND_URL + product.thumbnail} className="card-img-top" alt="..."  style={{height:'200px',objectFit:'contain'}}/>
          </div>
          <div className="text-center  border-top p-3">
              <h5 className="card-title" >{(product.title).length<30 ?
               (product.title):(product.title).slice(0,30)+'...' }</h5>
              <p>{product.price}</p>
              <p>{product.rating}</p>
              <button className='btn btn-outline-success'  onClick={()=>{addItem(product); toast.success("added to cart")}}>Sebete at</button>
              <div className='d-flex justify-content-between align-items-center position-absolute bottom-0 w-75  '>
                <WishListBtn product={product}/>
                <NavLink to={`details/${product.id}`} className='text-success bg-semibold'>read more...</NavLink>
              </div>

          </div>
      </div>
    </div>

  )
}

export default SingleCard