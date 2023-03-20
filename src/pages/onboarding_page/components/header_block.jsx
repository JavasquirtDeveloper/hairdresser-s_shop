import React from 'react'
import '../../onboarding_page/onboarding_page'
import PreviewBlock from './preview_block'
import AboutUs from './about_us'
import Services from './services'
import AboutSalons from './about_salons'


function HeaderBlock() {
  return (
  <div className='App'>
    <PreviewBlock/>
    <AboutUs/>
    <Services/>
    <AboutSalons/>
  </div>
  )
}

export default HeaderBlock












