import React from 'react'
import { Route } from 'react-router-dom'
import  Arrow1  from '../assets/svg/vectors/Arrow1.svg'

export default function BackButton() {
  return (
    <div className='back-button-container'>
    <a href='/home' className='back-button'>Вернуться<br/>на главную<br/>страницу</a>
    <img src={Arrow1} className='back-button-arrow'></img>

    </div>
    )
}
