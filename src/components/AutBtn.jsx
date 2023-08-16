import React from 'react'
import { autUsers, autUsersNotAdmin } from '../utils'
import { NavLink, useNavigate } from 'react-router-dom'
import { FcBusinessman } from "react-icons/fc";
import {  toast } from 'react-toastify';


const AutBtn = () => {

  const data=JSON.parse(localStorage.getItem('User'))
  const currentUser=JSON.parse(localStorage.getItem('currentUser'))
  const logOut = () => {
    localStorage.removeItem('User')
    window.location.reload()
    toast.success("You are logged out of your account")
  }

  const location=useNavigate()
  const logOutNotAdmin = () => {
    localStorage.removeItem('currentUser')
    location('/login')

    toast.success("You are logged out of your account")
  }

    const aut = () =>{
        if (autUsers()) {
            return   <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FcBusinessman className='fs-4'/>{data.userName}
            </button>
            <ul className="dropdown-menu">
              <li style={{cursor:'pointer'}} onClick={logOut} >Log out</li>
              <li><NavLink className="dropdown-item" to={'/admin'}>Dasboard</NavLink></li>
            </ul>
            </div>
        }
        if (autUsersNotAdmin()) {
          return   <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FcBusinessman className='fs-4'/>{currentUser}
          </button>
          <ul className="dropdown-menu">
            <li style={{cursor:'pointer'}} onClick={logOutNotAdmin} >Log out</li>

          </ul>
          </div>
      }
        else{
           return <NavLink to={'/login'}><FcBusinessman className='fs-4'/></NavLink>
        }
    }

  return (
    <div>{aut()}</div>
  )
}

export default AutBtn