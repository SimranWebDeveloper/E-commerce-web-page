import React, { useContext } from 'react'
import { BsTelephone } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF,FaTwitter,FaPinterest,FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import visa from '../pages/home/img/visa.png'
import paypal from '../pages/home/img/paypal.png'
import master from '../pages/home/img/master.png'
import american from '../pages/home/img/american.png'

import { GlobalThemeContext } from '../context/ThemeContext';




const Footer = () => {
 // dark mode
const{darkMode}=useContext(GlobalThemeContext)

  return (
    <footer       className='footer-section' >
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-3'>
          <img
              src={darkMode? "https://cdn.shopify.com/s/files/1/0641/3431/6288/files/logo_1236eee3-f4c2-42e4-8f8c-2ed05bf5d6db.png?v=1650977792" :
              "https://electon6-store.myshopify.com/cdn/shop/files/logo.png?v=1650977679"} />
           

            <form >
              <p>
                <BsTelephone/>
                <a href="tel:(+63) 0123 456 789">(+63) 0123 456 789</a>
              </p>
              <p>
                <MdLocationOn/>
                <a href="https://goo.gl/maps/VhNEY7JGufd3YK3d6">20 Princess road, london, greater london NW1, UK</a>
              </p>
              <p>
                <GrMail/>
                <a href="mailto:demo@demo.com">demo@demo.com</a>
              </p>

            </form>
            <ul className='d-flex justify-content-between list-unstyled w-75'>
              <li><NavLink to={'https://www.facebook.com/'}><FaFacebookF/></NavLink></li>
              <li><NavLink to={'https://twitter.com/'}><FaTwitter/></NavLink></li>
              <li><NavLink to={'https://in.pinterest.com/'}><FaPinterest/></NavLink></li>
              <li><NavLink to={'https://www.instagram.com/'}><FaInstagram/></NavLink></li>

            </ul>
          </div>
          <div className='col-lg-3'>
            <h5>FIND CATEGORIES</h5>
            <p><NavLink>Desktop</NavLink></p>
            <p><NavLink>Laptops & notebooks</NavLink></p>
            <p><NavLink>Components</NavLink></p>
            <p><NavLink>Tablets</NavLink></p>
            <p><NavLink>Software</NavLink></p>
            <p><NavLink>Phone & PDAS</NavLink></p>
          </div>
          <div className='col-lg-3'>
          <h5>CUSTOMER CARE</h5>
            <p><NavLink>Contact us</NavLink></p>
            <p><NavLink>About us</NavLink></p>
            <p><NavLink>Faq's</NavLink></p>
            <p><NavLink>Privacy policy</NavLink></p>
            <p><NavLink>Terms & condition</NavLink></p>
            <p><NavLink>Wishlist</NavLink></p>
          </div>
          <div className='col-lg-3'>
          <h5>JOIN OUR NEWSLETTER</h5>
            <p>Subscribe the newsletter for all the latest updates</p>
            <form >
              <input type="email" placeholder='email@.example.com' className='w-100'/>
              <button className='btn btn-primary text-uppercase w-100' type='submit'>subuscribe</button>
            </form>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-md-6 col-lg-6'>
            Copyright &copy; 2023 ecommerce by spacingtech
          </div>
          <div className='col-md-6 col-lg-6'>
            <div className='d-flex justify-content-end '>
              <ul className='d-flex list-unstyled w-50 '>
              <li><NavLink to={'https://www.visa.com.az/az_AZ/pay-with-visa/find-a-card/debit-cards.html'}><img src={visa}  className='w-50'/></NavLink></li>
              <li><NavLink to={'https://www.paypal.com/az/home'}><img src={paypal} className='w-50' /></NavLink></li>
              <li><NavLink to={'https://www.mastercard.az/az-az.html'}><img src={master} className='w-50' /></NavLink></li>
              <li><NavLink to={'https://www.americanexpress.com/'}><img src={american} className='w-50' /></NavLink></li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
