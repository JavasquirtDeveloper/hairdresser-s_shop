import React from 'react';

function DefaultButton({text}) {
  function scrollToBlock() {
    const block = document.querySelector('#block');
    block.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <button onClick={scrollToBlock} className='button-info-more' id="scrollBtn">{text}</button>
  );
}

export default DefaultButton;