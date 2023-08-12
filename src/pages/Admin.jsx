import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MdDelete,MdModeEditOutline} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { allRemoveBlogFunc, removeBlogFunc } from '../redux/Action'



const Admin = () => {
  const myBlogs=useSelector(store => store.AppReducer)

  console.log(myBlogs);
  const dispatch=useDispatch()


  return (
    <div className='Admin-page py-5 '>
      <div className="container-fluid ">
        <div className="row g-1">
          <div className="col-1 text-center">id</div>
          <div className="col-1 text-center">title</div>
          <div className="col-1 text-center">brand</div>
          <div className="col-2 text-center">image</div>
          <div className="col-1 text-center">price</div>
          <div className="col-1 text-center">category</div>
          <div className="col-3 text-center">description</div>
          <div className="col-2 text-center">edit</div>
        </div>


                  {
                    myBlogs.map((blog,index)=> {
                      return          <div className="row g-1 py-1" key={blog.id}>
                      <div className="col-1 ">
                        <div className='overflow-auto  border border-silver p-2'style={{height:'30vh'}}> {blog.id} </div>
                      </div>
                      <div className="col-1 ">
                        <div className='overflow-auto w-100 border border-silver p-2 'style={{height:'30vh'}}> {blog.title} </div>
                      </div>
                      <div className="col-1 ">
                        <div className='overflow-auto w-100 border border-silver  p-2'style={{height:'30vh'}}> {blog.brand} </div>
                      </div>
                      <div className="col-2 ">
                        <div className='overflow-auto w-100 border border-silver  p-2' style={{height:'30vh'}}> 
                        <img src ={blog.thumbnail} alt={blog.title} className='img-fluid w-100 h-100' style={{objectFit:'cover'}}/>
                        </div>
                      </div>
                      <div className="col-1 ">
                        <div className='overflow-auto w-100 border border-silver  p-2'style={{height:'30vh'}}> {blog.price} </div>
                      </div>
                      <div className="col-1 ">
                        <div className='overflow-auto w-100 border border-silver  p-2'style={{height:'30vh'}}> {blog.category} </div>
                      </div>
                      <div className="col-3 ">
                        <div className=' border border-silver p-2 overflow-auto' style={{height:'30vh'}}> {blog.description} </div>
                      </div>
                      <div className="col-2 ">
                        <div className='overflow-auto w-100 border border-silver  d-flex justify-content-between p-2' style={{height:'30vh'}}> 
                          <NavLink className='btn btn-warning' to={`/editpage/${blog.id}`}  style={{height:'3em'}}><MdModeEditOutline className='fs-5'/></NavLink>
                          <button className='btn btn-danger' onClick={()=>dispatch(removeBlogFunc(blog.id))} style={{height:'3em'}}><MdDelete className='fs-5'/></button>
                        </div>
                      </div>

                    </div>
                      
                      
                    })
                  }

         
                <div className="d-flex justify-content-between p-3 ">
                  <NavLink className=' btn btn-primary ' to='/addblog'>Add Blog</NavLink>
                  <button className="btn btn-danger" onClick={()=>dispatch(allRemoveBlogFunc())}>Clear All Blogs</button>
                </div>
                
    


        </div>
        
      </div>
    
  )
}

export default Admin