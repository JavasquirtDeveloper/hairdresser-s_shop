
import React from 'react'
import SalonsAddressThird from './salons_address_third'
import '../salons_page_third'
import SalonsPreviewBlockThird from './salons_preview_block_third'
import PriceServicesThird from './salons_price_services_third'



export default function SalonsBlockFThird() {
    return (
    <div className='App'>
            <SalonsPreviewBlockThird/>
            <div className='header-background-third'>
            <SalonsAddressThird />
            <PriceServicesThird />
            </div>
    </div>
    )
  }