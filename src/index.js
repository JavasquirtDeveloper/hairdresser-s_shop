import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import OnboardingPage from './pages/onboarding_page/onboarding_page.jsx'
import SalonsPageFirst from './pages/salons_page_first/salons_page_first'
import SalonsPageSecond from './pages/salons_page_second/salons_page_second'
import SalonsPageThird from './pages/salons_page_third/salons_page_third'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import background from '../assets/svg/vectors/Vector_5.svg';
import './components/SignUpButton.css'



const MySwal = withReactContent(Swal)
const SalonsContainer = () => {
 const FirstSalon = () => {
    MySwal.fire({title: <header className='button-first-salon-header'>Вокзальная 21 г<br/>(здание ЖД вокзала)</header>, html: <div className='button-first-salon-text'>Для записи<br/>позвоните нам<br/>+7 917 733 28 09</div>, showCloseButton: true,
    showConfirmButton: false, width: 440, });
  }

  const SecondSalon = () => {
    MySwal.fire({title: <header className='button-second-salon-header'>Караная Муратова, д. 6</header>, html: <div className='button-second-salon-text'>Для записи<br/>позвоните нам<br/>+7 917 733 28 09</div>, showCloseButton: true,
    showConfirmButton: false, width: 440, });
  }
  
  const ThirdSalon = () => {
    MySwal.fire({title: <header className='button-third-salon-header'>Набережная 3/4 (кв. 3) </header>, html: <div className='button-third-salon-text'>Для записи<br/>позвоните нам<br/>+7 917 733 28 09</div>, showCloseButton: true,
    showConfirmButton: false, width: 440, });
  }
}
export default SalonsContainer
  


const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
  <Routes>
    <Route path="/home" element={<OnboardingPage/>}/>
    <Route path="/about1" element={<SalonsPageFirst/>}/>
    <Route path="/about2" element={<SalonsPageSecond/>}/>
    <Route path="/about3" element={<SalonsPageThird/>}/>
              </Routes>
  {/* </React.StrictMode> */}
  </BrowserRouter>
)

reportWebVitals()
