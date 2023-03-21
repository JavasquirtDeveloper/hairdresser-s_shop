import React from 'react'
import BackButton from '../../../components/back_button'
import DefaultLogo from '../../../components/default_logo'

export default function SalonsPreviewBlockThird() {
    return (
      <section className='salons-preview'>
      <div className='salons-header-block-third'>
      <div className='back-button-wrapper'>
      <BackButton text='Вернуться на главную страницу'/>
        </div>
        <div className='salons-default-logo-container'><DefaultLogo/></div>
        
        <h1 className='salons-header-block-text'>Наши салоны</h1>
        <div className='salons-vector1-third'></div>
        <div className='salons-gradient-third'></div>
      </div>
    </section>
    )
  }