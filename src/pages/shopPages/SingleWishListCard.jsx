import React from 'react'
import WishListBtn from '../home/WishListBtn';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleWishListCard = ({product}) => {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 '>
    <div className='singelCard position-relative'>
      <div className="img-box " >
        <img src={product.thumbnail} className="card-img-top" alt="..."  style={{height:'200px',objectFit:'contain'}}/>
        </div>
        <div className="text-center  border-top p-3">
            <h5 className="card-title" >{product.title}</h5>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <button className='btn btn-outline-success' onClick={()=>{addItem(product); toast.success("added to cart")}}>Sebete at</button>
            <div className='d-flex justify-content-between align-items-center position-absolute bottom-0 w-75  '>
              <WishListBtn product={product}/>
              <NavLink to={`../details/${product.id}`} className='bg-semibold'>read more...</NavLink>
            </div>

        </div>
    </div>
  </div>
  )
}

export default SingleWishListCard

