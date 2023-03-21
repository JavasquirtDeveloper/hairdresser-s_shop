
import React from 'react'
import SalonsAddressFirst from './salons_address_first'
import './../salons_page_first'
import SalonsPreviewBlockFirst from './salons_preview_block_first'
import PriceServicesFirst from './salons_price_services_first'



export default function SalonsBlockFirst() {
    return (
    <div className='App'>
            <SalonsPreviewBlockFirst />
            <div className='header-background'>
            <SalonsAddressFirst />
            <PriceServicesFirst />
            </div>
    </div>
    )
  }