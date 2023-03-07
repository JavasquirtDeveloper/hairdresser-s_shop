import React from 'react'
import './salons_first.css'
import SalonsBlockFirst from './components/salons_header_block_first'



function SalonsPageFirst() {
  return (
    <div className="App">
      <header className="salons">
              <SalonsBlockFirst/>
      </header>
    </div>
  )
}

export default SalonsPageFirst
