
import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editBlogFunc } from '../../redux/Action'


const EditPage = () => {
    // get All blog
    const myBlogs=useSelector(store => store.AppReducer)
    // get edit blog id
    const {id}=useParams()

    // get edit blog 
    const editBlog=myBlogs.find((blog)=> blog.id===id)

    // set edit blog 
    const[currentBlog,setCurrentBlog]=useState(editBlog)
    
    // set value into currentBlog
    const handleChange = (e) => {
        const{name,value}=e.target
        setCurrentBlog({...currentBlog,[name]:value})
        // console.log(currentBlog);
    }
    
    // go blog page
    const location=useNavigate()

    const dispatch=useDispatch()
    const submitForm = (e) => {
        e.preventDefault()
        dispatch(editBlogFunc(currentBlog))
        location('/blog')

    }
  return (

    <div className='EditPage-section'>
        <div className="d-flex justify-content-center align-items-center ">
                                                                        
            <form id='form1' className='w-50' onSubmit={submitForm}>
                <h3>Edit Blog Page</h3>
                <label htmlFor="id">Blog id:</label> <br />
                <input type="text" id='id' name='id' onChange={handleChange}  defaultValue={currentBlog.id} disabled='disabled' placeholder='Enter title'/> <br />
  
                <label htmlFor="title">Title:</label> <br />
                <input type="text" id='title' name='title' onChange={handleChange}  defaultValue={currentBlog.title} placeholder='Enter title'/> <br />
  
                <label htmlFor="description">Description:</label> <br />
                <textarea  id="description" name='description' onChange={handleChange}  rows="5" defaultValue={currentBlog.description} placeholder='Enter description'></textarea> <br />
  
                <label htmlFor="price">Price:</label> <br />
                <input type="number" id='price' name='price' onChange={handleChange} defaultValue={currentBlog.price} placeholder='Enter price'/> <br />
  
                <label htmlFor="brand">Brand:</label> <br />
                <input type="text"  id='brand' name='brand' onChange={handleChange} defaultValue={currentBlog.brand} placeholder='Enter brand'/> <br />
  
                <label htmlFor="category">Category:</label> <br />
                <input type="text"  id='category' name='category' onChange={handleChange} defaultValue={currentBlog.category} placeholder='Enter category'/> <br />
  
                <label htmlFor="thumbnail">Image:</label> <br />
                <input type="text"  id='thumbnail' name='thumbnail' onChange={handleChange} defaultValue={currentBlog.thumbnail} placeholder='Enter Image'/> <br />
  
                <button className='btn btn-primary text-uppercase px-4 py-2 mb-5' type='submit'>Submit</button>
              </form>
    





        </div>
    </div>
  )
}

export default EditPage