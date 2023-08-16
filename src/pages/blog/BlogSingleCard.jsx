import React from 'react'

const BlogSingleCard = ({product}) => {
  return (
    <div className='col-12 col-sm-6 col-md-6 col-lg-4 py-2 '>
      <div className='overflow-y-scroll'>
        <div className="img-box text-center" >
          <img src={product.thumbnail} style={{width:'300px',height:'200px',objectFit:'cover'}} className="card-img-top" alt="..." />
          </div>
          <div className="text-center  border-top p-3">
              <h5 className="card-title">{product.title}</h5>
              <p>{product.price}</p>
              <p>{product.rating}</p>
              <p >{product.description}</p>
              <div className='d-flex justify-content-between align-items-center position-absolute bottom-0   '>
              </div>

          </div>
      </div>

  </div>
  )
}

export default BlogSingleCard