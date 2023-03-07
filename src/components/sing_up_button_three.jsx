import React from 'react'
import Swal from 'sweetalert2'
import background from '../assets/svg/vectors/Vector_5.svg';
import withReactContent from 'sweetalert2-react-content'
import './SignUpButton.css'

const MySwal = withReactContent(Swal)


function SignUpButtonThree({ text }) {
  const ThirdSalon = () => {
    MySwal.fire({title: <header className='button-third-salon-header'>Набережная 3/4 (кв. 3) </header>, html: <div className='button-third-salon-text'>Для записи<br/>позвоните нам<br/>+7 917 733 28 09</div>, showCloseButton: true,
    showConfirmButton: false, width: 440, background: `#fff url(${background}) no-repeat left`,});
  }
  return (
    <button onClick={ThirdSalon} className='button-sign-up-three'>{text}</button>
  )
}
  

export default SignUpButtonThree;