import React from 'react'
import { store } from '../../redux/Store'
import { useSelector } from 'react-redux'
import BlogSingleCard from './BlogSingleCard'



const Blog = () => {
  const myBlogs=useSelector(store => store.AppReducer)
  return (
    <div className='Blog-section py-5'>
      <div className="container">
        <div className="row">
          {
            myBlogs.map((blog,index)=> {
              return <BlogSingleCard product={blog} key={blog.id} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Blog
