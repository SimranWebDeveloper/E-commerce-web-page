import React, { useEffect, useRef, useState } from 'react'
import { json, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';



const Login = () => {
    const [visibleSign,setVisbleSign]=useState(true)
    const  user={
        userName:'simran',
        pass:'simran12'
    }
    const userName=useRef()
    const pass=useRef()

    const navigate = useNavigate();


    const signIn = JSON.parse(localStorage.getItem("signIn")) || []  //-sign up
    // login 

    
   
    // where go to page
    const location=useNavigate()
    const submitFormLogin = (e) => {
    e.preventDefault()
    if (user.userName===userName.current.value && user.pass===pass.current.value) {
        toast.success("Login is succesfully")
        localStorage.setItem('User',JSON.stringify(user) )
        location('/admin')
    }
    else if (checkUser(userName.current.value,pass.current.value)){
        localStorage.setItem('currentUser',JSON.stringify(userName.current.value)) 
        location('/cart')
    }
    
   
    

   
    else  { toast.error("Login is wrong"); }

}
    

    // Sing up
        
        // at the moment user name
        // const[currentUser,setCurrent]=useState('')
 
        const checkUser = (user,pass) => {
            let check=false
            signIn.map((item,index)=> {
                if( item.name==user && item.pass==pass) check= true
                
            })
            return check

                
            
        }
        
            
        
        const submitFormSignUp=(e)=>{
        e.preventDefault()
        let obj = {
            name : e.target.userNameSign.value ,
            pass : e.target.passSing.value
        }
        // set user + 
        if( checkUser(e.target.userNameSign.value, e.target.passSing.value)) {toast.error("This username or password already is used")}  
        else{
            signIn.push(obj)
            localStorage.setItem('currentUser',JSON.stringify(e.target.userNameSign.value)) 
            toast.success("Username registered successfully")

            navigate('/cart')

        } 

        setDataLocal()
 
    
    }
    const setDataLocal = ()=> {
        localStorage.setItem("signIn" ,JSON.stringify(signIn))
    }




  return (
    <section className='section-login  py-5'>
            <div className="container w-50">
                <h3 className='text-center'>Qeydiyat səhivəsi</h3>
                <p className='text-center fs-5'> E-commerce web səhivəsinə giriş et ve ya hesab yarat, endirimləri qacirma!</p>
                <div className='d-flex w-100'>
                    <button className='btn w-50 btn-outline-primary' onClick={()=>setVisbleSign(true)}>Login</button>
                    <button className='btn w-50 btn-outline-primary' onClick={()=>setVisbleSign(false)}>Sign up</button>
                </div>
            </div>

            {visibleSign? 
            // Login       
            <form onSubmit={submitFormLogin} className='container w-50'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">UserName* </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={userName} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password*</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" ref={pass} required/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
        </form>
        :
        // Sign up
        <form onSubmit={(e)=> submitFormSignUp(e)} className='container w-50'>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">UserName* </label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='userNameSign' required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Password*</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='passSing' required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Gender</label><br />

            <label htmlFor="male" className="form-label">Male:</label>
            <input type="radio"  id="male"  className='ms-2 me-4'name='gender'  />
            <label htmlFor="female" className="form-label">Female:</label>
            <input type="radio"  id="female"className='ms-2'name='gender' />
            

        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Age*</label>
            <input type="number" className="form-control" id="exampleInputPassword1" name='age' required/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Adress*</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='adress' required/>
        </div>
        <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
        }

    </section>
  )
}

export default Login