import React from 'react'
import Swal from 'sweetalert2'
import background from '../assets/svg/vectors/Vector_5.svg';
import withReactContent from 'sweetalert2-react-content'
import './SignUpButton.css'

const MySwal = withReactContent(Swal)


function SignUpButtonOne({ text }) {
    const FirstSalon = () => {
        MySwal.fire({title: <header className='button-first-salon-header'>Вокзальная 21 г<br/>(здание ЖД вокзала)</header>, html: <div className='button-first-salon-text'>Для записи<br/>позвоните нам<br/>+7 917 733 28 09</div>, showCloseButton: true,
        showConfirmButton: false, width: 440, background: `#fff url(${background}) no-repeat left`});
      }

  return (
    <button onClick={FirstSalon} className='button-sign-up-one'>{text}</button>
  )
}
  

export default SignUpButtonOne;