import React, { useState,useEffect } from 'react'
import { useWishlist } from 'react-use-wishlist'
import {  toast } from 'react-toastify';
import SingleCard from './home/myproduct/SingleCard';


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
    toast.success("All Wishlist is successfully cleared")  
    setTimeout(() => {
        
        window.location.reload()
    }, 3000);
    
    
 }

useEffect(()=>{

},[items,single])



  return (
    <div className="wishlist-section py-5">
        <div className='container '>
            <div className='row'>


                {

                    single.map((element,index)=>{
                        return <SingleCard product={element} key={element.id} />
                    })
                }
                <span><button className='btn btn-danger my-2' onClick={renderPage}>Clear all</button></span>
            </div>


        </div>
     </div>
  )
}

export default WishList