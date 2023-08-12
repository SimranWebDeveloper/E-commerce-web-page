import React from 'react'
import { autUsers } from '../utils'
import { NavLink } from 'react-router-dom'
import { FcBusinessman } from "react-icons/fc";


const AutBtn = () => {

  const data=JSON.parse(localStorage.getItem('User'))
  const logOut = () => {
    localStorage.removeItem('User')
    // window.location.reload()
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
        else{
           return <NavLink to={'/login'}><FcBusinessman className='fs-4'/></NavLink>
        }
    }

  return (
    <div>{aut()}</div>
  )
}

export default AutBtn