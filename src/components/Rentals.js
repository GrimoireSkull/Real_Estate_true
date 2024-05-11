import React from 'react'
import house1 from '../assets/house1.png'
import house2 from '../assets/house2.png';
import house3 from '../assets/house3.png';
import Rental from './Rental'

const rentalsData = [
  {Id: "rental001", title: "Texas Ranch Retreat", image: [house1, house2, house3], price: "1,620,000", description: "A nice abode", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental002", title: "Modern Urban Oasis in Texas", image: [house1, house2, house3], price: "980,000", description: "Discover the perfect urban escape.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental003", title: "Luxury Lakeside Estate", image: [house1, house2, house3], price: "3,750,000", description: "Experience the pinnacle of lakeside living.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental004", title: "Historic Southern Charm", image: [house1, house2, house3], price: "675,000", description: "Step into a piece of Southern history.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental005", title: "Contemporary Hill Country Home", image: [house1, house2, house3], price: "1,200,000", description: "Embrace modern living in the heart of the hill country.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental006", title: "Rustic Texas Retreat", image: [house1, house2, house3], price: "850,000", description: "Find serenity in a rustic retreat.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental007", title: "Family-Friendly Suburban Living", image: [house1, house2, house3], price: "450,000", description: "Ideal for families seeking suburban comfort.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental008", title: "Chic Downtown Loft", image: [house1, house2, house3], price: "725,000", description: "Live in style in a chic downtown loft.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental009", title: "Secluded Texas Hideaway", image: [house1, house2, house3], price: "1,950,000", description: "Escape to your own private hideaway.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental010", title: "Golf Course Living", image: [house1, house2, house3], price: "1,150,000", description: "Experience luxury living on the golf course.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental011", title: "Hilltop Mansion with Panoramic Views", image: [house1, house2, house3], price: "5,500,000", description: "Enjoy breathtaking views from your hilltop mansion.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental012", title: "Quaint Historic Cottage", image: [house1, house2, house3], price: "375,000", description: "Step back in time in a charming historic cottage.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental013", title: "Lakefront Cabin Retreat", image: [house1, house2, house3], price: "550,000", description: "Relax by the lake in your own private cabin.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental014", title: "Luxury High-Rise Living", image: [house1, house2, house3], price: "2,800,000", description: "Experience luxury living in the sky.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental015", title: "Charming Victorian Home", image: [house1, house2, house3], price: "725,000", description: "Step into the charm of a Victorian era home.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental016", title: "Spacious Suburban Estate", image: [house1, house2, house3], price: "1,350,000", description: "Find space and luxury in a suburban estate.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental017", title: "Texas Hill Country Paradise", image: [house1, house2, house3], price: "2,250,000", description: "Discover your own piece of paradise in the Texas hill country.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental018", title: "Cozy Bungalow in the Heart of Texas", image: [house1, house2, house3], price: "425,000", description: "Cozy up in a bungalow nestled in the heart of Texas.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental019", title: "Modern Farmhouse Retreat", image: [house1, house2, house3], price: "1,100,000", description: "Escape to a modern farmhouse retreat.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10},
  {Id: "rental020", title: "Ranch-style Living with Acreage", image: [house1, house2, house3], price: "950,000", description: "Experience the freedom of ranch-style living with ample acreage.", tags: ["Available", "Condominium", "Central Singapore"], viewCount: 25, shortCount: 10}
];

const Rentals = () => {
  return (
    <div className = "py-3 sm:py-5">
        <div className = "grid grid-cols-4 gap-4">
            {rentalsData.map((rental) => <Rental Id = {rental.Id} title = {rental.title} image = {rental.image[0]} price = {rental.price} views = {rental.viewCount} tag = {rental.tags[0]}/>)}
        </div>
    </div>
  )
}

export {rentalsData, Rentals};