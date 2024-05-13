
import React from 'react'
import { useParams } from 'react-router-dom';
import Shortcutbar from '../components/Shortcutbar';
import Carousel from '../components/carousel';
import Mortgage from '../components/mortgage';
import RealEstateAgent from '../components/realEstateAgent';
import Footer from '../components/Footer';
import RatingPopUp from '../components/RatingPopUp';

import { TiBookmark } from "react-icons/ti";
import { BsFillEyeFill } from "react-icons/bs";
import { BiBed, BiBath } from "react-icons/bi";

const UpdatePropertyPage = ({ rentals }) => {
  const { Id } = useParams(); // Retrieve the rental ID from the URL
  const rental = rentals.find(rental => rental.Id === Id); // Find the rental in the array

  var bedroom = 2;
  var bathroom = 3;

  if (!rental) return <div>Rental not found</div>;

  return (
    <div>
      <Shortcutbar />
      <Carousel images={rental.image} />
      <div className='ml-[20rem] w-[65rem] justify-between flex gap-8 pb-5'>
        <div className="w-{$p.length*2} px-4 inline-block text-green-400 border-green-300 border-2 rounded-lg">
          <p className="font-semibold text-[25px] pb-1" >{rental.tags[0]}</p>
        </div>
        <div className='flex'>
          <div className="flex items-center w-{$p.length*2} gap-2 py-1 px-3">
            <BsFillEyeFill className="" />
            <p className="font-semibold text-[19px]" >Views: {rental.viewCount}</p>
          </div>
          <div className="flex items-center w-{$p.length*2} gap-2 py-1 px-3">
            <TiBookmark className="" />
            <p className="font-semibold text-[19px]" >Shortlists: {rental.shortCount}</p>
          </div>
        </div>
      </div>
      <div className='w-[65rem] ml-80 items-center pb-4 font-bold text-[30px] border-b-2' >
        <p className="pb-1">{rental.title}</p>
        <div className="w-{$p.length*2} py-2 px-3 inline-block bg-gray-600 text-white border rounded-full">
          <p className="font-semibold text-[15px]" >{rental.tags[1]}</p>
        </div>
      </div>
      <div className='w-[65rem] ml-80 items-center py-4 border-b-2 flex' >
        <div className='border-r-2 pr-[15rem] py-5'>
          <p className="font-semibold text-[17px]">Price starts from:</p>
          <p className="font-bold text-[30px]">S${rental.price}</p>
        </div>
        <div className='ml-[3rem] mt-2 text-1xl flex gap-8'>
          <div className=''>
            <BiBath className='text-5xl'/>
            <p className='pt-2'>{bathroom} Bath</p>
          </div>
          <div className=''>
            <BiBed className='text-5xl'/>
            <p className='pt-2'>{bedroom} Bed</p>
          </div>
        </div>
      </div>
      <div className='w-[65rem] ml-80 items-center py-10 border-b-2' name='about'>
        <p className="font-bold text-[30px]">About this property</p>
        <p className="font-semibold text-[17px] py-3" >{rental.description}</p>
      </div>
      <div className='w-[65rem] ml-80 items-center pt-10 pb-5 border-b-2' name='location'>
        <p className="font-bold text-[30px]">Location</p>
        <p className="font-semibold text-[18px] py-3 pb-4" >Singapore Institute of management, idk</p>
        <div className="w-{$p.length*2} py-2 px-3 inline-block bg-gray-600 text-white border rounded-full">
          <p className="font-semibold text-[15px]" >{rental.tags[2]}</p>
        </div>
      </div>
      <div className='w-[65rem] ml-80 items-center pt-10 pb-5 border-b-2' name='mortgage'>
        <p className="font-bold text-[30px]">Estimated Mortgage</p>
        <Mortgage />
      </div>
      <RealEstateAgent />
      <div className=' ml-[45rem] flex gap-10 text-[20px] py-5'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 pb-2 px-3 rounded-full">Update</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 pb-2 px-3 rounded-full">Delete</button>
      </div>
      <Footer />
    </div>
  )
}

export default UpdatePropertyPage