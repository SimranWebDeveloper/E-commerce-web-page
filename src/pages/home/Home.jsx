import React from 'react'
import Slider from './Slider'
import Slider2 from './Slider2'
import Myproduct from './myproduct/Myproduct'
import BluetoothLap from './BluetoothLap'
import Slider3 from './Slider3'




const Home = () => {
  return (
    <div className='home-section'>
      <Slider/>
      <h2 className='text-center fw-bold fs-1 text-uppercase my-5'>top categories</h2>
    <Slider2/>


    
    <h2 className='text-center fw-bold fs-1 text-uppercase my-5'>trending product</h2>
    <Myproduct/>

    <BluetoothLap/>
    <h2 className='text-center fw-bold fs-1 text-uppercase my-5'>FEATURED PRODUCT</h2>
    <br />
    <Slider3/>
    <br />
    
    </div>
  )
}

export default Home
