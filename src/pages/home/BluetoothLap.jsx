import React from 'react'
import { NavLink } from 'react-router-dom'


const BluetoothLap = () => {
  return (
    <section className='bluetoothLap'>
        <div className='container-fluid'>
            <div className='row g-0'>

                <div className='col-lg-6'>
                    <div className='bluetoothLapBg1  d-flex  justify-content-end align-items-center '>
                        <div className='text w-50 p-2'>
                            <p className='text-uppercase fw-semibold fs-5'>GET UP TO 50% OFF</p>
                            <h3 className='display-5 fw-bold'> Bluetooth headphones</h3>
                            <NavLink to={`/shop/phone_a`} className='btn mybtn text-uppercase fw-semibold py-3 px-5'>shop collection</NavLink>

                        </div>
                    </div>

                </div>
                <div className='col-lg-6'>
                <div className='bluetoothLapBg2  d-flex  justify-content-end align-items-center '>
                        <div className='text w-50 p-2'>
                            <p className='text-uppercase fw-semibold fs-5'>GET UP TO 33% OFF</p>
                            <h3 className='display-5 fw-bold'> Laptop I5 collection</h3>
                            <NavLink to={`/shop/laptops-notebooks`} className='btn mybtn text-uppercase fw-semibold py-3 px-5'>shop collection</NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BluetoothLap