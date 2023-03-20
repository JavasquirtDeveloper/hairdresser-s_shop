import React from 'react'


export default function InfoMoreButton({text, link}) {
  return (
    <a className='button-info-more-naked' href={link}>{text}</a>
  )
}
