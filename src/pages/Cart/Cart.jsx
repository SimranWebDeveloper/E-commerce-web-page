import React from 'react'
import { useCart } from 'react-use-cart';
import {MdDelete} from 'react-icons/md'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Cart = () => {
  const { items,isEmpty, totalUniqueItems,  cartTotal,updateItemQuantity,removeItem,setItems ,emptyCart } = useCart();

  //     items              -- it is object which comes  from  localhost
 //     isEmpty              -- when is empty card return true else return false
//    totalUniqueItems       -- cards counter
 //     cartTotal              --  card price sum
  //     updateItemQuantity    -- updated card by id
    //     removeItem    -- delete card by id

 //     setItems , emptyCart -- to reset the card


 // check user or admin registrered or not

 const location=useNavigate()
 const checkRegister  = () => {
  if (localStorage.getItem('currentUser') || localStorage.getItem('User') ) {
    emptyCart();
    toast.success('You bought all product')
  }
  else{

    toast.warning('Please login or sign up ')
    location('/login')
  }



 }

  return (
    isEmpty? <p className=' Cart-section2 text-center py-5 fs-2 m-0'>Your cart is empty! </p>:
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
                        <button className='btn btn danger' onClick={()=>{ updateItemQuantity(item.id,item.quantity+1);}}>➕</button>
                        {item.quantity}
                        <button className='btn btn danger' onClick={()=>{ updateItemQuantity(item.id,item.quantity-1);}}>➖</button>
                        </td>
                      <td >{( item.itemTotal).toFixed(2)}</td>
                      <td >

                        <button className='btn btn-danger' onClick={()=>{removeItem(item.id);toast.warning('Card deleted')}}><MdDelete className='fs-5'/></button>
                      </td>
                      </tr>
                    
                  })
                }

              </tbody>

              
            </table>
            </div>
            <button className='btn btn-outline-primary' onClick={checkRegister}>{`Hamisini al cemi: ${cartTotal.toFixed(2)} ₼`}</button>
          </div>
      
      
    </div>
  )
}

export default Cart