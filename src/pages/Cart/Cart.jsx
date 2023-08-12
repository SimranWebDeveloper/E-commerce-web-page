import React from 'react'
import { useCart } from 'react-use-cart';
import {MdDelete} from 'react-icons/md'
import { toast } from 'react-toastify';



const Cart = () => {
  const { items,isEmpty, totalUniqueItems,  cartTotal,updateItemQuantity,removeItem,setItems ,emptyCart } = useCart();

  //     items              -- it is object which comes  from  localhost
 //     isEmpty              -- when is empty card return true else return false
//    totalUniqueItems       -- cards counter
 //     cartTotal              --  card price sum
  //     updateItemQuantity    -- updated card by id
    //     removeItem    -- delete card by id

 //     setItems , emptyCart -- to reset the card


   
  
  console.log(isEmpty);
  return (
    isEmpty? <p className='text-center py-5 fs-2'>Your cart is empty! </p>:
    <div className='Cart-section py-5'>
        <div className="container">
          <div className="row">
            <table className="table">
              <thead>
                <tr className='text-center'>
                  <th >image</th>
                  <th >title</th>
                  <th >Miqdar</th>
                  <th >price</th>
                  <th >category</th>
                  <th ></th>
                </tr>
              </thead>
              <tbody>
                {
                  
                  items.map((item,index)=> {
                    return   <tr key={item.id} className='text-center'>

                      <td  ><img src={item.thumbnail} alt={item.title}  style={{width:'150px ',height:'100px ',objectFit:'contain'}}/></td>

                      <td >{item.title}</td>
                      <td >
                        <button className='btn btn danger' onClick={()=>{updateItemQuantity(item.id,item.quantity+1);}}>➕</button>
                        {item.quantity}
                        <button className='btn btn danger' onClick={()=>{updateItemQuantity(item.id,item.quantity-1);}}>➖</button>
                        </td>
                      <td >{item.itemTotal}</td>
                      <td >
                        {/* <NavLink className='btn btn-warning' to={`/editpage/${blog.id}`} ><MdModeEditOutline className='fs-5'/></NavLink>   
                        onClick={()=>dispatch(removeBlogFunc(blog.id))}         */}
                        <button className='btn btn-danger' onClick={()=>{removeItem(item.id);toast.warning('Card deleted')}}><MdDelete className='fs-5'/></button>
                      </td>
                      </tr>
                    
                  })
                }

              </tbody>

              
            </table>
            </div>
            <button className='btn btn-outline-primary' onClick={()=>emptyCart()}>{`Hamisini al cemi: ${cartTotal} ₼`}</button>
          </div>
      
      
    </div>
  )
}

export default Cart