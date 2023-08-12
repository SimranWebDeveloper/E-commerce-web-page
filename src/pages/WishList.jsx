import React, { useState,useEffect } from 'react'
import { useWishlist } from 'react-use-wishlist'
import SingleWishListCard from './shopPages/SingleWishListCard'



const WishList = () => {


const {items,setWishlistItems }=useWishlist()

const[single,setSingle]=useState([])


    const renderItems = () => {
        items.map((element,index)=>{
         
            return !single.includes(element) ? single.push(element) :'';
       })
    }

 renderItems()

 const renderPage = () => {
    setWishlistItems([])
    // window.location.reload()
 }

useEffect(()=>{

},[items,single])



  return (
    <div className='container'>
        <div className='row'>


            {

                single.map((element,index)=>{
                    return <SingleWishListCard product={element} key={element.id} />
                })
            }
            <span><button className='btn btn-danger my-2' onClick={renderPage}>Clear all</button></span>
        </div>


    </div>
  )
}

export default WishList