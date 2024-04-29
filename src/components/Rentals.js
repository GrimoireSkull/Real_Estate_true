import React from 'react'
import house1 from '../assets/house1.png'
import Rental from './Rental'

const rentalsData = [
  {Id: "rental001", title: "Texas Ranch Retreat", image: house1, price: "1,620,000", description: "A nice abode"},
  {Id: "rental002", title: "Modern Urban Oasis in Texas", image: house1, price: "980,000", description: "Discover the perfect urban escape."},
  {Id: "rental003", title: "Luxury Lakeside Estate", image: house1, price: "3,750,000", description: "Experience the pinnacle of lakeside living."},
  {Id: "rental004", title: "Historic Southern Charm", image: house1, price: "675,000", description: "Step into a piece of Southern history."},
  {Id: "rental005", title: "Contemporary Hill Country Home", image: house1, price: "1,200,000", description: "Embrace modern living in the heart of the hill country."},
  {Id: "rental006", title: "Rustic Texas Retreat", image: house1, price: "850,000", description: "Find serenity in a rustic retreat."},
  {Id: "rental007", title: "Family-Friendly Suburban Living", image: house1, price: "450,000", description: "Ideal for families seeking suburban comfort."},
  {Id: "rental008", title: "Chic Downtown Loft", image: house1, price: "725,000", description: "Live in style in a chic downtown loft."},
  {Id: "rental009", title: "Secluded Texas Hideaway", image: house1, price: "1,950,000", description: "Escape to your own private hideaway."},
  {Id: "rental010", title: "Golf Course Living", image: house1, price: "1,150,000", description: "Experience luxury living on the golf course."},
  {Id: "rental011", title: "Hilltop Mansion with Panoramic Views", image: house1, price: "5,500,000", description: "Enjoy breathtaking views from your hilltop mansion."},
  {Id: "rental012", title: "Quaint Historic Cottage", image: house1, price: "375,000", description: "Step back in time in a charming historic cottage."},
  {Id: "rental013", title: "Lakefront Cabin Retreat", image: house1, price: "550,000", description: "Relax by the lake in your own private cabin."},
  {Id: "rental014", title: "Luxury High-Rise Living", image: house1, price: "2,800,000", description: "Experience luxury living in the sky."},
  {Id: "rental015", title: "Charming Victorian Home", image: house1, price: "725,000", description: "Step into the charm of a Victorian era home."},
  {Id: "rental016", title: "Spacious Suburban Estate", image: house1, price: "1,350,000", description: "Find space and luxury in a suburban estate."},
  {Id: "rental017", title: "Texas Hill Country Paradise", image: house1, price: "2,250,000", description: "Discover your own piece of paradise in the Texas hill country."},
  {Id: "rental018", title: "Cozy Bungalow in the Heart of Texas", image: house1, price: "425,000", description: "Cozy up in a bungalow nestled in the heart of Texas."},
  {Id: "rental019", title: "Modern Farmhouse Retreat", image: house1, price: "1,100,000", description: "Escape to a modern farmhouse retreat."},
  {Id: "rental020", title: "Ranch-style Living with Acreage", image: house1, price: "950,000", description: "Experience the freedom of ranch-style living with ample acreage."}
];

const Rentals = () => {
  return (
    <div className = "py-3 sm:py-5">
        <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {rentalsData.map((rental) => <Rental Id = {rental.Id} title = {rental.title} image = {rental.image} price = {rental.price}/>)}
        </div>
    </div>
  )
}

export {rentalsData, Rentals};