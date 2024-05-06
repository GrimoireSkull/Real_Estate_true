import React from 'react'
import { useParams } from 'react-router-dom';
import Shortcutbar from '../components/Shortcutbar';
import Carousel from '../components/carousel';
import Mortgage from '../components/mortgage';
import RealEstateAgent from '../components/realEstateAgent';
import Footer from '../components/Footer';

const PListPage = ({rentals}) => {
  const { Id } = useParams(); // Retrieve the rental ID from the URL
  const rental = rentals.find(rental => rental.Id === Id); // Find the rental in the array

  if (!rental) return <div>Rental not found</div>;

  return (
    <div>
      <Shortcutbar />
      <Carousel />
      <div className='w-[65rem] ml-80 items-center pb-7 font-bold text-[30px] border-b-2' >
        <p className = "">{rental.title}</p>
      </div>
      <div className='w-[65rem] ml-80 items-center py-7 border-b-2' >
        <p className = "font-semibold text-[17px]">Price starts from:</p>
        <p className = "font-bold text-[30px]">S${rental.price}</p>
      </div>
      <div className='w-[65rem] ml-80 items-center py-10 border-b-2' >
        <p className = "font-bold text-[30px]">About this property</p>
        <p className = "font-semibold text-[17px] py-3" >{rental.description}</p>
      </div>
      <div className='w-[65rem] ml-80 items-center py-10 border-b-2' >
        <p className = "font-bold text-[30px]">Location</p>
        <p className = "font-semibold text-[17px] py-3" >Singapore Institute of management, idk</p>
      </div>
      <Mortgage />
      <RealEstateAgent />
      <Footer />
    </div>
  )
}

export default PListPage