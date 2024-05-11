import React from 'react'
import ShortlistBar from '../components/ShortlistBar'
import { Rentals } from '../components/Rentals'

const ShortlistPage = () => {
  return (
    <div>
        <ShortlistBar />
        <div className='px-20'>
          <Rentals />
            
        </div>
    </div>
  )
}

export default ShortlistPage