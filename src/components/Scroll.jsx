
import React,{useState,useEffect} from 'react'
const Scroll = () => {
    
    const[visible,setVisible]=useState(false)

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
  
         window.scrollY>200 ? setVisible(true) :setVisible(false)
        //  console.log(window.scrollY);
      })
    },[visible])

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'   // slowly up to top:0    
        })
    }


  return (
    <div className='scrollPage  ' >
    <button  className='btn  btn-primary rounded-pill'
        style={{ 
            display:visible? 'block':'none',
            position:'fixed',
            bottom: '20px',
            right: '20px',
            zIndex:'5',
            border: '2% solid red !important'

        }} onClick={scrollToTop} >⇑
    </button>
  </div>
  )
}

export default Scroll