import React from 'react'
import BackgroundCirclesFirst from '../../../components/background_circles_first'
import BackgroundCirclesSecond from '../../../components/background_circles_second'
import SignUpButton from '../../../components/sign_up_button'

export default function Services() {
    return (
      <section className='services'>
        <div className='header-block3'>
          <div classNam='wrapper-header-block3'>
          <h3 className='header-block-text3'>Предоставляемые услуги</h3>
          <div className='wrapper-ellipse-block-1'>
          <BackgroundCirclesSecond/>
          </div>
          <div className='man-haircuts'>
          <div className='man-haircuts-text'><text>Мужские стрижки</text></div>
          </div>
          <div className='wrapper-ellipse-block-2'>
          <BackgroundCirclesFirst/>
          </div>
  
        <div className='woman-haircuts'>
        <div className='woman-haircuts-text'><text>Женские стрижки</text></div>
        </div>
        <div className='wrapper-ellipse-block-3'>
          <BackgroundCirclesSecond/>
          </div>
        <div className='manicure'>
        <div className='manicure-text'><text>Маникюр</text></div>
        </div>
        <div className='button-sign-up-block-1'>
        <SignUpButton text='Записаться'/>
        </div>
        <div className='vector2'></div>
        <div className='gradient2'></div>
        </div>
        </div>
      </section>
    )
  }