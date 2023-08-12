import React from 'react'
import {HiOutlineLocationMarker,HiOutlineMail} from 'react-icons/hi'
import {BiPhone} from 'react-icons/bi'

const Contact = () => {
  return (
    <div className='contact-section'>
      <div className="container-fluid p-5 ">
        <div className=" text-center ">
          <h1 className='fw-bold'>CONTACT US</h1>
          <p>Lorem ipsum is printing & typesetting industry's standard <br/> dummy text since texts</p>

        </div>
        <div className='w-100 mt-5'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388952.0356639955!2d49.26406756135733!3d40.393611946801954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLE!5e0!3m2!1saz!2saz!4v1691212217209!5m2!1saz!2saz" 
           height={600} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
      
      <div className="container-fluid">
        <div className='row  p-5'>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <form id='form1' >
              <h3>Drop us message</h3>
              <label htmlFor="name">Name</label> <br />
              <input type="text" id='name'  required="required"/> <br />

              <label htmlFor="mail">Email</label> <br />
              <input type="email"  id='mail' required="required"/> <br />

              <label htmlFor="tele">Phone number</label> <br />
              <input type="number" id='tele' required="required"/> <br />

              <label htmlFor="mesagge">Message</label> <br />
              <textarea name="" id="mesagge"  rows="10" required="required" ></textarea> <br />

              <button className='btn btn-primary text-uppercase px-4 py-2 mb-5' type='submit'>Submit</button>
            </form>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <form id='form2 '>
              <h3 >Get in touch</h3>
              <ul className='list-unstyled mt-4'>
                <li className='d-flex align-items-center'>
                  <HiOutlineLocationMarker className='form-icons text-primary fs-1 border border-2 border-primary p-2 mb-2 me-2 '/>
                  <a href="https://goo.gl/maps/Qy28RGtxCbMcQ3bL9"  target='_blank' className='nav-link'>Azerbaijan Baku</a>
                  </li>
                <li className='d-flex align-items-center'>
                  <BiPhone className='form-icons text-primary fs-1 border border-2 border-primary p-2 mb-2 me-2 '/>
                  <a href="tel:051-694-4794"  target='_blank' className='nav-link'>051-694-4794</a>
                </li>
                <li className='d-flex align-items-center'>
                  <HiOutlineMail className='form-icons text-primary fs-1 border border-2 border-primary p-2 mb-2 me-2 '/>
                  <a href="mailto:simran.abbasov.00@mail.ru" target='_blank' className='nav-link'>simran.abbasov.00@mail.ru</a>
                  </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact