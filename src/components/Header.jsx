import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import { BsFillSunFill,BsMoonFill } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";

import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18";


import { useWishlist } from "react-use-wishlist";
import AutBtn from "./AutBtn";
import { GlobalThemeContext } from "../context/ThemeContext";
import { GlobalContext } from "../context/GlobalState";
import { useCart } from "react-use-cart";




const Header = () => {
  const header = useRef();
  const [open, setOpen] = useState(false);
  const [classs, setClasss] = useState("close");

  // dark mode
  const{darkMode,toggleTheme}=useContext(GlobalThemeContext)
 

  const mobileMenu = () => {
    setOpen(!open);
  };

  // Language
  const { t } = useTranslation();

  const handleLangClick = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('Lang', lang)
  };

  const LeftDiv = document.querySelector("#hamburger");
  const HamburgetMenuBtn = document.querySelector("#HamburgetMenuBtn");

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!e.composedPath().includes(header.current)) {
        setOpen(false);
      }
    });
  });

  // Wishlist
  const{totalWishlistItems}=useWishlist()

  // Seach 
  const { search,setSearch } = useContext(GlobalContext);
  const location=useNavigate()  

  const seachFunc = (e) => {
    setSearch((e.target.value).toLowerCase())
    console.log(search);
    location('/search')
  }
  // Add to card
  const {totalUniqueItems} = useCart();
  //    totalUniqueItems       -- cards counter


 


  return (
    <section   className=' header-section  center position-sticky top-0 z-3 '  >
      <div className={open ? "hamgurgerDiv" : " hamgurgerDiv myZ"}></div>

      <nav className="container-fluid px-3 ">
        <div className="row d-flex align-items-center">
          <div className="col-lg-2 col-md-3 col-sm-5 col-5">
            <NavLink to='../' >
            <img
              src={darkMode?"https://cdn.shopify.com/s/files/1/0641/3431/6288/files/logo_1236eee3-f4c2-42e4-8f8c-2ed05bf5d6db.png?v=1650977792" :
              "https://electon6-store.myshopify.com/cdn/shop/files/logo.png?v=1650977679"} alt="" style={{width:'10rem'}} />
              </NavLink>
         </div>
          <div className="col-lg-4 col-md-4 col-sm-2 col-1  ">
            <ul className="d-none d-lg-flex pt-3  justify-start align-items-center list-unstyled  fw-semibold">
              <li className="pe-2">
                <NavLink to="/" className="nav-link">
                  {t("header.0")}
                </NavLink>
              </li>
              <li className="pe-2">
                <NavLink to="/shop/all" className="nav-link">
                  {t("header.1")}
                </NavLink>
              </li>
              <li className="pe-2">
                <NavLink to="/collection" className="nav-link">
                  {t("header.2")}
                </NavLink>
              </li>
              <li className="pe-2">
                <NavLink to="/blog" className="nav-link">
                  {t("header.3")}
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/pages" className="nav-link">
                  {t("header.4")}
                </NavLink>
              </li> */}
              <li className=" py-2 nav-link dropdown d-desktop">
                <a className="nav-link dropdown-toggle dt-desktop" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t("header.4")}
                  </a>
                <ul className="dropdown-menu dm-desktop">
                  <li><NavLink to="/about" className="nav-link">  About us </NavLink></li>
                  <li><NavLink to="/contact" className="nav-link">  Contact us </NavLink></li>
                </ul>
                </li>
              
            </ul>

          </div>


          <div className="col-lg-6  col-md-5 col-sm-5 col-6 ">
            <div className="d-lg-flex float-end align-items-center">
              {/* Search Bar */}
              <form className="d-none d-lg-block bg-secondary-subtle rounded py-1 px-1">
                <input
                  type="search"
                  placeholder="Find your search"
                  className="border-0 bg-secondary-subtle text-secondary py-2"
                  onChange={seachFunc}
                />


              </form>
              {/*Login Page  */}
              <div className="d-none d-lg-block d-flex justify-content-between ">
                <ul className="d-flex list-unstyled  mb-0">
                  <li className=""><AutBtn /></li>
                </ul>

              </div> 

              {/* ---------- */}

              
              {/*  WishList Page  */}
              <NavLink to="/wishlist" className="nav-link fs-4   d-none d-lg-block  " style={{width:'45px'}}>
              <AiOutlineHeart  className="p-0 m-0 "/>  <sup className="p-0 m-0   rounded  text-danger fw-bold" >{totalWishlistItems}</sup> 
                </NavLink>
                
              {/* -------------- */}
                
                
             {/*  Add to Card Page  */}
             <NavLink to="/cart" className="nav-link fs-4  d-none d-lg-block mx-1 "  style={{width:'45px'}}>
                <BsCart3  className="p-0 m-0 "/>  <sup className="p-0 m-0   rounded  text-danger fw-bold" >{totalUniqueItems}</sup>
             </NavLink>

              {/*  --------------  */}
   
              {/*Language Page  */}
                <div className="dropdown d-none d-lg-block ">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {i18n.language}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleLangClick("az")}
                      >
                        <span className="fi fi-az"></span> Az
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleLangClick("en")}
                      >
                        <span className="fi fi-gb"></span> En
                      </button>
                    </li>
                    
                  </ul>
                </div>
              {/*  --------------  */}


              {/*  Dark-Light Mode  */}
                <button className="btn d-none d-lg-block " onClick={()=>toggleTheme()}>{darkMode ? <BsMoonFill className="text-secondary"/> : <BsFillSunFill className="text-warning"/>}</button>
              {/*  --------------  */}
                
     

            

              
                 {/*-------------------------- Hamburger Menu------------------------------- */}
                        {/* Menu icon */}
              <button className="btn d-lg-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <GiHamburgerMenu />
              </button>

                      {/*Left Menu- */}

              <div className="hamburger-section offcanvas  offcanvas-start " tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header ">
                  <div></div>
                  <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ">
                  <div className="dropdown   mt-3">
                    <button className="btn  dropdown-toggle border-0 " type="button" data-bs-toggle="dropdown">
                      <GiHamburgerMenu/> Menu
                    </button>
                    <ul  className="dropdown-menu hamburger-dropdown-menu w-100 border-0">
                      <li className=" border-bottom border-top py-2">
                        <NavLink to="/" className="nav-link">HOME</NavLink>
                      </li>
                      <li className=" border-bottom py-2">
                        <NavLink to="/shop/all" className="nav-link">  SHOP </NavLink>


                      </li>
                      <li className=" border-bottom py-2">
                        <NavLink to="/collection" className="nav-link">  COLLECTION </NavLink>
                      </li>
                      <li className=" border-bottom py-2">
                        <NavLink to="/blog" className="nav-link">  BLOG </NavLink>
                      </li>
                      <li className=" border-bottom py-2 nav-item dropdown d-desktop">
                        <a className="nav-link dropdown-toggle dt-desktop" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pages
                          </a>
                        <ul className="dropdown-menu dm-desktop">
                          <li><NavLink to="/about" className="nav-link">  About us </NavLink></li>
                          <li><NavLink to="/contact" className="nav-link">  Contact us </NavLink></li>
                        </ul>
                      </li>



                       
                      <li>
                        <ul className="d-flex justify-content-around align-items-center list-unstyled">
                          {/*Login Page  */}
                          <li>
                            <div className="d-flex justify-content-between ">
                          <ul className="d-flex list-unstyled  mb-0">
                            <li className=""><AutBtn /></li>
                            <sup className=" mt-2 me-2 rounded  text-danger fw-bold" >{totalWishlistItems}</sup> 

                          </ul>

                        </div> 
                          </li>
                         {/*  WishList Page  */}
                          <li>
                              <NavLink to="/wishlist" className="nav-link fs-4   ">
                              <AiOutlineHeart /> 
                                </NavLink>
                          </li>
                         {/*  Add to Card Page  */}
                        <li>
                          <NavLink to="/cart" className="btn fs-4 hamburger-card ">
                            <BsCart3 />
                          </NavLink>
                        </li>

                        {/*  Dark-Light Mode  */}
                      <li>
                        <button className="btn  " onClick={()=>toggleTheme()}>{darkMode ? <BsMoonFill className="text-secondary"/> : <BsFillSunFill className="text-warning"/>}</button>
                      </li>
                        </ul>

                      </li>
                    </ul>
                  </div>

                </div>
              </div>
              {/* ----------------------------------------------------------------------- */}




            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;

