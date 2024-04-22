import React from 'react'
import house1 from '../assets/house1.png'
import Rental from './Rental'

const Rentals = () => {
    const rentals = [
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
        {title:"Texas, USA", image: house1, price: "1,541"},
]
  return (
    <div className = "py-3 sm:py-5">
        <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {rentals.map((rental) => <Rental title = {rental.title} image = {rental.image} price = {rental.price}/>)}
        </div>
    </div>
  )
}

export default Rentals