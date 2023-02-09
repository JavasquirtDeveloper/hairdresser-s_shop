import React from 'react'
import '../../onboarding_page/onboarding.css'
import Vector from '../../../assets/svg/header_vector.svg'
import VectorGradient from '../../../assets/svg/header_gradient.svg'
import DefaultLogo from '../components/default_logo'

function HeaderBlock() {
  return (
    <div className="App">
              <DefaultLogo />
<div className='header-block'>
  <h1 className='header-block-text'>Подчеркни <br/> свою <br/> красоту</h1>
  <div className="gradient">

  </div>
  {/* <img src={Vector} alt="" />
  <img src={VectorGradient} alt="" /> */}

</div>

    </div>
  )
}

export default HeaderBlock
