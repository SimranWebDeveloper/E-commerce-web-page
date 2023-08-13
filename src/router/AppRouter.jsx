import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Collection from "../pages/collection/Collection";
import Blog from "../pages/blog/Blog";
import WishList from "../pages/WishList";
import { ContextProvider, GlobalContext } from "../context/GlobalState";
import DetailsProduct from "../pages/DetailsProduct";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import PrivateRoute from "../routes/PrivateRoute";
import { GlobalThemeContext } from "../context/ThemeContext";
import About from "../pages/pag/About";
import Contact from "../pages/pag/Contact";
import AddBlog from "../pages/blog/AddBlog";
import { useSelector } from "react-redux";
import EditPage from "../pages/blog/EditPage";
import Search from "../search/Search";
import Cart from "../pages/Cart/Cart";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Scroll from "../components/Scroll";





const AppRouter = () => {
  const myBlogs=useSelector(store => store.AppReducer)
  useEffect(()=> {
    localStorage.setItem('Blogs',JSON.stringify(myBlogs))
  },[myBlogs])
  const { darkMode } = useContext(GlobalThemeContext);
  return (
    <main className={darkMode ? "dark" : "light"}>
      <ContextProvider>
        <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false} // onhover not pause
          theme="light"
          />

          <Header />
          <Scroll/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:categoryName" element={<Shop />} />
            <Route path="/collection" element={<Collection />} />
   
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/details/:id" element={<DetailsProduct />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/addblog" element={<AddBlog/>} />
              <Route path="/editpage/:id" element={<EditPage/>} />
            </Route>
          </Routes>
          <Footer />
          
        </BrowserRouter>
      </ContextProvider>
    </main>
  );
};

export default AppRouter;
