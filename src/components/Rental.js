import React from 'react'
import { Link } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";

const Rental = ({Id, title, image, price, views}) => {
  return (
    <div classname = "">
      <Link to={`/property/${Id}`}>
        <div className = "relative">
          <div className = "grad absolute h-full w-full rounded-b-[1.3rem]"></div>
            <div className = "flex">
              {/* BackGround */}
              <img src = {image} alt = "" className = "object-cover rounded-[1.3rem] sm:h-[17rem] md:h-[13rem] w-full"/>
  
            </div>
        </div>
      </Link>
      {/* Description */}
      <div className = "pt-2 flex justify-between items-start">
        {/* Left */}
        <div className = "ml-1">
          <p className = "max-w-[17rem] font-bold text-[17px] pb-3">
            {title}
          </p>
          <p className = "max-w-[17rem] font-semibold text-[17px]">
            ${price}
          </p>
        </div>
        {/* Right */}
        <div className = "flex items-center space-x-1 gap-1 pt-4 mr-2">
          <BsFillEyeFill/>
          <p className = "text-[15px]">{views}</p>
        </div>
      </div>
    </div>   
  )
}

export default Rental