import React from 'react'
import Slider from './Slider'
import Slider2 from './Slider2'
import Myproduct from './myproduct/Myproduct'
import BluetoothLap from './BluetoothLap'
import Slider3 from './Slider3'
import { useTranslation } from 'react-i18next'




const Home = () => {
     // Language
     const { t } = useTranslation();
  return (
    <div className='home-section'>
      <Slider/>
      <h2 className='text-center fw-bold fs-1 text-uppercase my-5'>{t('home.0')}</h2>
    <Slider2/>


    
    <h2 className='text-center fw-bold fs-1 text-uppercase my-5'>{t('home.1')}</h2>
    <Myproduct/>

    <BluetoothLap/>
    <h2 className='text-center fw-bold fs-1 text-uppercase my-5'>{t('home.2')}</h2>
    <br />
    <Slider3/>
    <br />
    
    </div>
  )
}

export default Home
