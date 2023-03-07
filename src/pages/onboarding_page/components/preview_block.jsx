import React from 'react'
import DefaultButton from '../../../components/default_button'
import DefaultLogo from '../../../components/default_logo'

export default function PreviewBlock() {
    return (
      <section className='preview'>
      <div className='header-block'>
        <div className='default-logo-container'><DefaultLogo/></div>
        <h1 className='header-block-text'>Подчеркни <br/> свою <br/> красоту</h1>
        <DefaultButton text='Узнать больше'/>
        <div className='vector1'></div>
        <div className='gradient'></div>
      </div>
    </section>
    )
  }
  