import React from 'react'
import Swal from 'sweetalert2'
import background from '../assets/svg/vectors/Vector_5.svg';
import withReactContent from 'sweetalert2-react-content'
import './SignUpButton.css'

const MySwal = withReactContent(Swal)


function SignUpButtonTwo({ text }) {
  const SecondSalon = () => {
    MySwal.fire({title: <header className='button-second-salon-header'>Караная Муратова, д. 6</header>, html: <div className='button-second-salon-text'>Для записи<br/>позвоните нам<br/>+7 917 733 28 09</div>, showCloseButton: true,
    showConfirmButton: false, width: 440, background: `#fff url(${background}) no-repeat left`,});
  }

  return (
    <button onClick={SecondSalon} className='button-sign-up-two'>{text}</button>
  )
}
  

export default SignUpButtonTwo;