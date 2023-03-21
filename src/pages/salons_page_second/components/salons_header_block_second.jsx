
import React from 'react'
import SalonsAddressSecond from './salons_address_second'
import '../salons_page_second'
import SalonsPreviewBlockSecond from './salons_preview_block_second'
import PriceServicesSecond from './salons_price_services_second'



export default function SalonsBlockSecond() {
    return (
    <div className='App'>
            <SalonsPreviewBlockSecond/>
            <div className='header-background-second'>
            <SalonsAddressSecond />
            <PriceServicesSecond />
            </div>
    </div>
    )
  }