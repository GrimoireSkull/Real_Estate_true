import React from 'react'
import Navbar from '../components/Navbar'

const PListLayout = ({childOne, childTwo}) => {
  return (
    <div>
        <Navbar />
        <div>{childOne}</div>
    </div>
  )
}

export default PListLayout