import React from 'react'
import DefaultLogo from '../../../components/default_logo'
import InfoMoreButton from '../../../components/info_more_button'
import SignUpButton from '../../../components/sign_up_button'
import WhpLogo from '../../../assets/svg/whp/Vector-1-whp.svg'
import WhpLogo_2 from '../../../assets/svg/whp/Vector-2-whp.svg'
import InstLogo from '../../../assets/svg/inst/Vector-inst.svg'
import VkLogo from '../../../assets/svg/vk/Vector-vk.svg'
import TgLogo from '../../../assets/svg/tg/Vector-tg.svg'
import SignUpButtonOne from '../../../components/sing_up_button_one'
import SignUpButtonTwo from '../../../components/sing_up_button_two'
import SignUpButtonThree from '../../../components/sing_up_button_three'


export default function AboutSalons() {
    return (
      <section className='our-salons'>
        <div className='header-block4'>
        <div className='wrapper-header-block4'>
          <h4 className='header-block-text4'>Наши салоны</h4>
          <div className='hair-scissors'></div>
          <div className='vector3'></div>
          <div className='gradient3'></div>
  
          
          <div className='wrapper-salon-1'>
          <div className='photo-salon-1'></div>
          
          <div className='wrapper-wrapper-salon-1'>
          <div className='address-salon-1'>Вокзальная 21 г<br/>(здание ЖД вокзала)</div>
          <div className='text-salon-1'>Одна из самых<br/>первых<br/>парикмахерских<br/>нашей<br/>небольшой сети</div>
          <div className='wrapper-sign-up-button-2'>
          <div className='button-sign-up-block-2'>
          <SignUpButtonOne text='Записаться'/>
          </div>
          </div>
          <div className='button-info-more-block-2'>
          <InfoMoreButton text='УЗНАТЬ БОЛЬШЕ' link='/about1'/>
          </div>
          <div className='vector-salon-1'></div>
          </div>
          </div>
          
          <div className='line8'></div>
  
          <div className='wrapper-salon-2'>
          <div className='photo-salon-2'></div>
          <div className='wrapper-wrapper-salon-2'>
          <div className='address-salon-2'>Караная Муратова, д. 6</div>
          <div className='text-salon-2'>Самый<br/>прогрессивный салон<br/>нашего города</div>
          <div className='button-sign-up-block-3'>
          <SignUpButtonTwo text='Записаться'/>
          </div>
          <div className='button-info-more-block-3'>
          <InfoMoreButton text='УЗНАТЬ БОЛЬШЕ' link='/about2'/>
          </div>
          <div className='vector-salon-2'></div>
          </div>
          </div>
          <div className='line9'></div>
  
          <div className='wrapper-salon-3'>
          <div className='photo-salon-3'></div>
          <div className='wrapper-wrapper-salon-3'>
          <div className='address-salon-3'>Набережная 3/4(кв. 3)</div>
          <div className='text-salon-3'>Самый<br/>уютный<br/>салон</div>
          <div className='button-sign-up-block-4'>
          <SignUpButtonThree text='Записаться'/>
          </div>
          <div className='button-info-more-block-4'>
          <InfoMoreButton text='УЗНАТЬ БОЛЬШЕ' link='/about3'/>
          </div>
          <div className='vector-salon-3'></div>
          </div>
          
          </div>
          
          <div>
          
            <div className='wrapper-futor'>
            <div className='photo-futor'>
            <div className='logo-futor'><DefaultLogo/></div>
            </div>
            </div>
            <div className='wrapper-contacts'>
              <div className='wrapper-wrapper-contacts-us'>
              <div className='contact-us'>Связаться с нами в<br/>социальных сетях</div>
              <div className='wrapper-social'>
              <div className='vk'>
                <img className='vk-logo' src={VkLogo} alt=''></img>
              </div>
              <div className='inst'>
                <img className='inst-logo' src={InstLogo} alt=''></img>
              </div>
              <div className='whp'>
                <img className='whp-logo' src={WhpLogo} alt=''></img>
                <img className='whp-logo-2' src={WhpLogo_2} alt=''></img>
                </div>
              <div className='tg'>
                <img className='tg-logo' src={TgLogo} alt=''></img>
              </div>
              </div>
              </div>
              <div className='wrapper-wrapper-contacts'>
              <div className='contacts'>Контакты</div>
              <div className='numbers'>+73473330031<br/>+79177332809</div>
              </div>
              </div>  
            </div> 
        </div>
        </div>
        </section>
    )
  }