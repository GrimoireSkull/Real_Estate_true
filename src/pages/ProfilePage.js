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
            <form>
                <div className='w-[65rem] ml-[30rem] items-center pt-20' >
                    <p className="font-semibold text-[23px]">Personal Details</p>
                </div>
                <div className='w-[35rem] ml-[30rem] py-5 pb-7 border-b-2' >
                    <div className='flex-col flex'>
                        <p className='py-3 text-[14px]'>Full name</p>
                        <label>
                            <input id='Username' type="text" placeholder='Full name' className='py-2 pl-3 pr-60 border rounded-lg outline-0' />
                        </label>
                    </div>
                </div>
                <div className='w-[65rem] ml-[30rem] items-center pt-10' >
                    <p className="font-semibold text-[23px]">Contact Details</p>
                </div>
                <div className='w-[35rem] ml-[30rem] py-5 pb-7 border-b-2' >
                    <div className='flex-col flex'>
                        <p className='py-3 text-[14px]'>Phone number</p>
                        <label>
                            <input id='phonenum' type="text" placeholder='+65 1234 5678' className='py-2 pl-3 pr-60 border rounded-lg outline-0' />
                        </label>
                        <p className='pb-3 pt-6 text-[14px]'>Email address</p>
                        <label>
                            <input id='email' type="text" placeholder='RealEstate@gmai.com' className='py-2 pl-3 pr-60 border rounded-lg outline-0' />
                        </label>
                    </div>
                </div>
                <div className='w-[65rem] ml-[30rem] items-center pt-8' >
                    <p className="font-semibold text-[23px]">Change Password</p>
                    <p className='py-3 text-[14px]'>Current Password</p>
                    <label>
                        <input id='currentpassword' type="text" placeholder='Current password' className='py-2 pl-3 pr-60 border rounded-lg outline-0' />
                    </label>
                    <p className='py-3 text-[14px]'>New Password</p>
                    <label>
                        <input id='newpassword1' type="text" placeholder='New password' className='py-2 pl-3 pr-60 border rounded-lg outline-0' />
                    </label>
                    <p className='py-4 text-[14px]'>Confirm New Password</p>
                    <label>
                        <input id='newpassword2' type="text" placeholder='Confirm New password' className='py-2 pl-3 pr-60 border rounded-lg outline-0' />
                    </label>
                </div>
                <div className='w-[35rem] ml-[30rem] items-center py-9' >
                    <button type = 'submit' className="py-1 px-5 bg-[#ff5a60] border rounded-full text-white hover:bg-[#f9787c] duration-100 ease-out">Update Profile</button>
                </div>
            </form>

            <Footer />
        </div>

    )
}

export default ProfilePage