import React from 'react'
import Swal from 'sweetalert2'
import background from '../assets/svg/vectors/Vector_5.svg';
import withReactContent from 'sweetalert2-react-content'
import './SignUpButton.css'

const MySwal = withReactContent(Swal)


function SignUpButton({ text }) {

  const FirstSalon = () => {
    MySwal.fire({title: <header className='button-first-salon-header'>Вокзальная 21 г<br/>(здание ЖД вокзала)</header>, html: <div className='button-first-salon-text'>Для записи<br/>позвоните нам<br/>+7 917 733 28 09</div>, showCloseButton: true,
    showConfirmButton: false, width: 440, background: `#fff url(${background}) no-repeat left`});
  }
  const SecondSalon = () => {
    MySwal.fire({title: <header className='button-second-salon-header'>Караная Муратова, д. 6</header>, html: <div className='button-second-salon-text'>Для записи<br/>позвоните нам<br/>+7 917 733 28 09</div>, showCloseButton: true,
    showConfirmButton: false, width: 440, background: `#fff url(${background}) no-repeat left`,});
  }

  const ThirdSalon = () => {
    MySwal.fire({title: <header className='button-third-salon-header'>Набережная 3/4 (кв. 3) </header>, html: <div className='button-third-salon-text'>Для записи<br/>позвоните нам<br/>+7 917 733 28 09</div>, showCloseButton: true,
    showConfirmButton: false, width: 440, background: `#fff url(${background}) no-repeat left`,});
  }



  const handleClick = () => {
    MySwal.fire({
      title: <header className='header-alert'>Выберите салон</header>,
      html:
        <div>
        <button onClick={FirstSalon} className='button-first-salon'>Вокзальная 21 г<br/>(здание ЖД вокзала)</button> <br/>
        <button onClick={SecondSalon} className='button-second-salon'>Караная Муратова, д. 6</button>  <br/> 
        <button onClick={ThirdSalon} className='button-third-salon'>Набережная 3/4 (кв. 3)</button>
        </div>,
      background: `#fff url(${background}) no-repeat left`,
      showCloseButton: true,
      showConfirmButton: false,
      width: 440,
  })
}
  return (
    <button onClick={handleClick} className='button-sign-up'>{text}</button>
  )
}
  

export default SignUpButton;





