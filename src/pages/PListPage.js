import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PListPage = ({rentals}) => {
  const { Id } = useParams(); // Retrieve the rental ID from the URL
  const rental = rentals.find(rental => rental.Id === Id); // Find the rental in the array

  if (!rental) return <div>Rental not found</div>;

  return (
    <div>
      <Navbar />
      <h2>Rental Details for: {rental.title}</h2>
      <img src={rental.image} alt={rental.title} />
      <p>Price: {rental.price}</p>
    </div>
  )
}

export default PListPage