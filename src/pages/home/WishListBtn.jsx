import React, { useEffect } from 'react'

import { useWishlist } from 'react-use-wishlist';
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import {  toast } from 'react-toastify';

const WishListBtn = ({product}) => {


    const{addWishlistItem,removeWishlistItem,inWishlist}=useWishlist()

    const toogleWishList = (myItem) => {
        if (inWishlist(myItem.id)) {
            removeWishlistItem(myItem.id)
        }
        else{
            addWishlistItem(myItem)
        }
    }


  return (
    <button  className="btn text-primary" onClick={()=>{toogleWishList(product);}}>{inWishlist(product.id) ? <AiFillHeart/> : <AiOutlineHeart/>  } </button>

  )
}

export default WishListBtn