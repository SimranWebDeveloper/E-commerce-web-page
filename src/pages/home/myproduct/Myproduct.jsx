import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import SingleCard from './SingleCard';



const Myproduct = () => {
    const{data,setData}=useContext(GlobalContext)
    // console.log(data);
    const filter_trending=data.filter((item)=>item.rating>=4.7)
  return (
    <div className='container-fluid p-5'>
        <div className='row g-3'>
            {
              filter_trending.map((item,index)=>{
                return   (<SingleCard product={item} key={item.id} />)
                        
              })
            }
        </div>
    </div>
  )
}

export default Myproduct