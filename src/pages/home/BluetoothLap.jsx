import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'


const BluetoothLap = () => {
         // Language
         const { t } = useTranslation();
  return (
    <section className='bluetoothLap'>
        <div className='container-fluid'>
            <div className='row g-0'>

                <div className='col-lg-6'>
                    <div className='bluetoothLapBg1  d-flex  justify-content-end align-items-center '>
                        <div className='text w-50 p-2'>
                            <p className='text-uppercase fw-semibold fs-5'>{t('home.3')} </p>
                            <h3 className='display-5 fw-bold'> {t('home.4')}</h3>
                            <NavLink to={`/shop/phone_a`} className='btn mybtn text-uppercase fw-semibold py-3 px-5'>{t('home.5')}</NavLink>

                        </div>
                    </div>

                </div>
                <div className='col-lg-6'>
                <div className='bluetoothLapBg2  d-flex  justify-content-end align-items-center '>
                        <div className='text w-50 p-2'>
                            <p className='text-uppercase fw-semibold fs-5'>{t('home.6')} </p>
                            <h3 className='display-5 fw-bold'> {t('home.7')} </h3>
                            <NavLink to={`/shop/laptops-notebooks`} className='btn mybtn text-uppercase fw-semibold py-3 px-5'>{t('home.5')}</NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BluetoothLap