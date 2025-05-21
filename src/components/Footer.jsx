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
import { useTranslation } from 'react-i18next';




const Footer = () => {
 // dark mode
const{darkMode}=useContext(GlobalThemeContext)
// language 
const{t}=useTranslation()

  return (
    <footer       className='footer-section' >
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-3'>
          <img 
              src={darkMode? "logo.png" :
              "logo.png"} />
           

            <form >
              <p>
                <BsTelephone/>
                <a href="tel:(+63) 0123 456 789">(+63) 0123 456 789</a>
              </p>
              <p>
                <MdLocationOn/>
                <a href="https://goo.gl/maps/VhNEY7JGufd3YK3d6">{t('footer.0')}</a>
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
            <h5>{t('footer.18')}</h5>
            <p><NavLink to={'/shop/laptops-notebooks'}>{t('footer.1')}</NavLink></p>
            <p><NavLink to={'/shop/laptops-notebooks'}>{t('footer.2')}</NavLink></p>
            <p><NavLink to={'shop/laptop_a'}>{t('footer.3')}</NavLink></p>
            <p><NavLink to={'shop/tablets'}>{t('footer.4')}</NavLink></p>
            <p><NavLink to={'shop/laptop_a'}>{t('footer.5')}</NavLink></p>
            <p><NavLink to={'shop/phone_a'}>{t('footer.6')}</NavLink></p>
          </div>
          <div className='col-lg-3'>
          <h5>{t('footer.7')}</h5>
            <p><NavLink to={'/contact'}>{t('footer.8')}</NavLink></p>
            <p><NavLink to={'/about'}>{t('footer.9')}</NavLink></p>
            <p><NavLink to={'/about'}>{t('footer.10')}</NavLink></p>
            <p><NavLink to={'/about'}>{t('footer.11')}</NavLink></p>
            <p><NavLink to={'/about'}>{t('footer.12')} </NavLink></p>
            <p><NavLink to={'/wishlist'}>{t('footer.13')}</NavLink></p>
          </div>
          <div className='col-lg-3'>
          <h5>{t('footer.14')}</h5>
            <p>{t('footer.15')}</p>
            <form >
              <input type="email" placeholder='email@.example.com' className='w-100'/>
              <button className='btn btn-primary text-uppercase w-100' type='submit'>{t('footer.16')}</button>
            </form>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-md-6 col-lg-6'>
            Copyright &copy; {t('footer.17')} by Simran Abbasov
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
