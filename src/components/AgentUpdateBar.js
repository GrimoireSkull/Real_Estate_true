import React from 'react'
import logo from '../assets/logo.png';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from "react-router-dom";

const AgentUpdateBar = () => {
  return (
    <div className = "border-b sticky top-0 z-50 bg-white">
        <div className = "flex justify-between items-center border-b sm:mx-6 md:mx-12 lg:mx-12">
            {/* Left */}
            <div className = " h-[5rem] flex">
                <Link to = "/"><img src = {logo} className = "h-[5rem] flex object-cover" /></Link>
            </div>
            {/* Middle */}
            <div className = "">
                <p>Real Estate Agent's property update page</p>
            </div>
            {/* Right */}
            <div className = "flex items-center pr-2 font-semibold text-gray-600 gap-4">
                <p className = "text-[17px]">Real Estate agent</p>     

                <div className = "flex items-center gap-3 border px-3 py-2 rounded-full bg-[#ff5a60] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out">
                    <Link to = "/profile/"><p>Sign in</p></Link>
                    <Link to = "/profile/"><AiOutlineUser className = "text-[22px]"/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AgentUpdateBar