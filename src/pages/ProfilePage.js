import React from 'react'
import ProfileBar from '../components/ProfileBar'
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const ProfilePage = () => {
    return (
        <div>
            <ProfileBar />
            <div className='w-[65rem] ml-[30rem] items-center py-10' >
                <p className="font-bold text-[30px]">My Profile</p>
            </div>
            <div className="w-[20rem] ml-[35rem] h-[15rem] ">
                <img src={logo} className="h-auto max-w-full" />
            </div>
            <div className='w-[65rem] ml-[30rem] items-center pt-20' >
                <p className="font-semibold text-[23px]">Personal Details</p>
            </div>
            <div className='w-[35rem] ml-[30rem] py-5 pb-7 border-b-2' >
                <form className = 'flex-col flex'>
                    <p className='py-3 text-[14px]'>First Name</p>
                    <label>
                        <input type="text" placeholder='First Name' className='py-2 pl-3 pr-60 border rounded-lg outline-0' />
                    </label>
                    <p className='pb-3 pt-6 text-[14px]'>Last Name</p>
                    <label>
                    <input type="text" placeholder='Last Name' className='py-2 pl-3 pr-60 border rounded-lg outline-0' />
                    </label>
                </form>
            </div>
            <div className='w-[65rem] ml-[30rem] items-center pt-10' >
                <p className="font-semibold text-[23px]">Contact Details</p>
            </div>
            <div className='w-[35rem] ml-[30rem] py-5 pb-7 border-b-2' >
                <form className = 'flex-col flex'>
                    <p className='py-3 text-[14px]'>Phone number</p>
                    <label>
                        <input type="text" placeholder='+65 1234 5678' className='py-2 pl-3 pr-60 border rounded-lg outline-0' />
                    </label>
                    <p className='pb-3 pt-6 text-[14px]'>Email address</p>
                    <label>
                    <input type="text" placeholder='RealEstate@gmai.com' className='py-2 pl-3 pr-60 border rounded-lg outline-0' />
                    </label>
                </form>
            </div>
            <div className='w-[65rem] ml-[30rem] items-center pt-8' >
                <p className="font-semibold text-[23px]">Change Password</p>
            </div>
            <div className='w-[35rem] ml-[30rem] items-center py-4 pb-7 border-b-2' >
                <button className = "py-1 px-5 bg-[#ff5a60] border rounded-full text-white hover:bg-[#f9787c] duration-100 ease-out">Change Password</button>
            </div>
            <div className='w-[65rem] ml-[30rem] items-center pt-8' >
                <p className="font-semibold text-[23px]">Delete Account</p>
            </div>
            <div className='w-[35rem] ml-[30rem] items-center py-4 pb-8' >
                <button className = "py-1 px-5 bg-[#ff5a60] border rounded-full text-white hover:bg-[#f9787c] duration-100 ease-out">Delete Account</button>
            </div>
            <Footer />
        </div>

    )
}

export default ProfilePage