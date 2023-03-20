import React from 'react'
import SignUpButtonOne from '../../../components/sing_up_button_one'
import SignUpButton from './../../../components/sign_up_button'

export default function PriceServicesFirst() {
    return (
      <section className='salons-services-section'>
        <div className='salons-header-block3'>
          <div classNam='salons-wrapper-header-block3'>
          <h3 className='salons-header-block-text3'>Прайс на услуги</h3>
        </div>
        <div className='salons-services'>
        <div className='salons-services-wrapper'>
          <div className='salons-haircut'>
          <div className='salons-photo-haircut'></div>
          <div className='rectangle-1'></div>
          <div className='salons-haircut-background'>
          <div className='salons-haircut-text'><text>Стрижка</text></div>
          </div>
          
          <div className='salons-haircut-price-text'>
            <li>Стрижка “наголо” - 100 ₽</li>
            <li>Стрижка женская модельная -<br/>350-400 ₽</li>
            <li>Стрижка мужская модельная -<br/>350-400 ₽</li>
            <li>Мужская стрижка полубокс, бокс,<br/>спортивная - 250-300 ₽</li>
            <li>Стрижка “площадка” - 450 ₽</li>
            <li>Подравнивание длины - 200-250 ₽</li>
            <li>Подравнивание челки - 100 ₽</li>
            <li>Полировка волос - от 500 ₽</li>
            <li>Прическа - от 1000 ₽</li>
            <li>Мытье головы - 50 ₽</li>
            <li>Сушка волос феном - 50-100 ₽</li>
          </div>
          </div>
          <div className='salons-coloring'>
          <div className='salons-photo-coloring'></div>
          <div className='rectangle-2'></div>
          <div className='salons-coloring-background'>
          <div className='salons-coloring-text'><text>Окрашивание</text></div>
          </div>
          <div className='salons-coloring-price-text'>
            <li>Обесцвечивание/ мелирование -<br/>1000-4100 ₽</li>
            <li>Покраска волос с красителем<br/>гостя - от 350 ₽</li>
            <li>Покраска волос - 900-2600 ₽</li>
            <li>Укладка - 500-650 ₽</li>
          </div>
          </div>
          <div className='salons-manicure'>
          <div className='salons-photo-manicure'></div>
          <div className='rectangle-3'></div>
          <div className='salons-manicure-background'>
          <div className='salons-manicure-text'><text>Маникюр</text></div>
          </div>
          <div className='salons-manicure-price-text'>
            <li>Маникюр без покрытия - 400 ₽</li>
            <li>Маникюр с однотонным<br/>покрытием - 700 ₽</li>
            <li>Наращивание - 1000 ₽</li>
            <li>Ремонт одного ногтя - 50 ₽</li>
            <li>Снятие работы без<br/>последующего покрытия - 150 ₽</li>
            <li>Снятие чужой работы - 200 ₽</li>
            <li>Дизайн двух ноготков - от 50 ₽</li>
            <li>Стразы - 5-10 ₽</li>
            <li>Слайдеры/ стемпинг - 30 ₽</li>
            <li>Укрепление всех ногтей<br/>полигелем - +100 ₽</li>
            <li>Френч - +100 ₽</li>
          </div>
          </div>
          </div>
          <div className='button-sign-up-4'>
          <SignUpButtonOne text='Записаться'/>
          </div>
          <div className='futor-wrapper'>
          <div className='futor-text'><text>Подробнее о стоимости услуг вы можете узнать,<br/>связавшись с нами или в наших салонах</text></div>
          </div>
        </div>
        </div>
      </section>
    )
  }