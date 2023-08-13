import React, { useRef, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';


const Login = () => {
    const  user={
        userName:'simran',
        pass:'simran12'
    }

    const location=useNavigate()
const submitForm = (e) => {
    e.preventDefault()
    if (user.userName===userName.current.value && user.pass===pass.current.value) {
        toast.success("Login is succesfully")
        localStorage.setItem('User',JSON.stringify(user) )
        location('/admin')
    
       
    }
    else   toast.error("Login is wrong")
    // const data=JSON.parse(localStorage.getItem('User')) 
    // console.log(data);
} 
    const userName=useRef()
    const pass=useRef()



  return (
    <section className='section-login  py-5'>
        <form onSubmit={submitForm} className='container w-50'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">UserName </label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={userName}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" ref={pass}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </section>
  )
}

export default Login