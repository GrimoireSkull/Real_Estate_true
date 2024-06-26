import React from 'react'
import logo from '../assets/logo.png';
import { BsStarFill } from 'react-icons/bs';

{/* NAME, PROFILEPIC, COMPANYLOGO, COMPANYNAME, LICENSE, RATING, PHONENUM, EMAIL */ }
const agentDetails = ["Faishal shal", logo, logo, "FAISHALCORP PTE LTD", "R061883J/L3002382K", 4.9, 12345678, "faishal@gmail.com"]

const realEstateAgent = () => {
  return (
    <div className='w-[65rem] ml-80 pb-10 pt-7' name = "realEstate" >
      <p className="font-bold text-[25px] pb-5">Associated Estate Agent</p>
      <div className='h-[32rem] rounded-[1rem] border-2 border-gray-400'>
        <div className='flex justify-center gap-4 items-center rounded-t-[1rem] bg-gray-100 py-3'>
          <img src={agentDetails[2]} className="h-[4rem] flex object-cover" />
          <p>{agentDetails[3]}</p>
        </div>

        <div className='flex justify-between border-b-2 px-7 py-9'>
          <div className='flex gap-5'>
            <img src={agentDetails[1]} className="h-[4rem] flex object-cover border rounded-[50rem] w-[4.3rem]" />
            <div className=''>
              <p className='mb-3'>{agentDetails[0]}</p>
              <p>{agentDetails[4]}</p>
            </div>
          </div>
          <div className='flex gap-7 items-center h-auto'>
            <div className='flex gap-2 items-center'>
              <p className='text-[20px]'>{agentDetails[5]}</p>
              <BsStarFill />
            </div>
            <div className="text-gray-900 underline hover:no-underline duration-200 py-1 px-3 rounded-full text-[19px]">
              <p >Reviews</p>
            </div>
          </div>
        </div>

        <div className='border-b-2 px-7 py-7'>
          <p className='text-[17px] mb-4'>Phone Number</p>
          <p className='text-[25px] font-bold'>+65 {agentDetails[6]}</p>
        </div>

        <div className='px-7 py-7'>
          <p className='text-[17px] mb-4'>Email address</p>
          <p className='text-[25px] font-bold'>{agentDetails[7]}</p>
        </div>
      </div>
    </div>
  )
}

export default realEstateAgent