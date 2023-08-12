import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBlogFunc } from '../../redux/Action';
import { useNavigate,  } from 'react-router-dom';

const AddBlog = () => {
    const [blog,setBlog]=useState(
        {
            id:uuidv4(),
            title: "",
            description: "",
            price: '',
            brand: "",
            category: "",
            thumbnail: ""
        }
    )
    const handleChange = (e) => {
        setBlog({...blog,[e.target.name]:e.target.value})
        console.log(blog);
    }

    const location=useNavigate()

    const dispatch=useDispatch()
    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addBlogFunc(blog))
        location('/blog')

    }


  return (
    <div className='AddBlog-section'>
        <div className="d-flex justify-content-center align-items-center ">
            <form id='form1' className='w-50' onSubmit={submitForm}>
              <h3>Add Blog</h3>
              <label htmlFor="title">Title:</label> <br />
              <input type="text" id='title' name='title' onChange={handleChange}  required="required" placeholder='Enter title'/> <br />

              <label htmlFor="description">Description:</label> <br />
              <textarea  id="description" name='description' onChange={handleChange}  rows="5" required="required" placeholder='Enter description'></textarea> <br />

              <label htmlFor="price">Price:</label> <br />
              <input type="number" id='price' name='price' onChange={handleChange} required="required" placeholder='Enter price'/> <br />

              <label htmlFor="brand">Brand:</label> <br />
              <input type="text"  id='brand' name='brand' onChange={handleChange} required="required" placeholder='Enter brand'/> <br />

              <label htmlFor="category">Category:</label> <br />
              <input type="text"  id='category' name='category' onChange={handleChange} required="required" placeholder='Enter category'/> <br />

              <label htmlFor="thumbnail">Image:</label> <br />
              <input type="text"  id='thumbnail' name='thumbnail' onChange={handleChange} required="required" placeholder='Enter Image'/> <br />

              <button className='btn btn-primary text-uppercase px-4 py-2 mb-5' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddBlog