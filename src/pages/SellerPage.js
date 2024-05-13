import React from 'react'
import SellerBar from '../components/SellerBar'
import { RatedRentals } from '../components/RatedRentals'

const SellerPage = () => {
  return (
    <div>
        <SellerBar />
        <div className='px-20'>
          <RatedRentals />
            
        </div>
    </div>
  )
}

export default SellerPage