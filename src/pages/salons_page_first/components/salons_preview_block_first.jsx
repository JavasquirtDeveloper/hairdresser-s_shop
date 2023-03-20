import React from 'react'
import BackButton from '../../../components/back_button'
import DefaultLogo from '../../../components/default_logo'

export default function SalonsPreviewBlockFirst() {
    return (
      <section className='salons-preview'>
      <div className='salons-header-block'>
      <div className='back-button-wrapper'>
      <BackButton text='Вернуться на главную страницу'/>
        </div>
        <div className='salons-default-logo-container'><DefaultLogo/></div>
        
        <h1 className='salons-header-block-text'>Наши салоны</h1>
        <div className='salons-vector1'></div>
        <div className='salons-gradient'></div>
      </div>
    </section>
    )
  }