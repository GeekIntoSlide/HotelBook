import React from 'react'
import { useLocation,useNavigate } from 'react-router';
import HotelLogo from '../static/HotelBook-logos_transparent.png';

export default function Header() {
    const location=useLocation();
    const navigate=useNavigate();
    function pathMatchRoute(route){
        if(route===location.pathname){
            return true;
        }
    }
    
  return (
    <div className='bg-white sticky top-0 border-b shadow-sm z-50'>
        <header className='flex justify-between items-center mx-auto px-3'>
            <div >
                <img src={HotelLogo} alt='Logo' className="h-[100px] px-0" onClick={()=>navigate("/")}></img>
            </div> 
            <div>
                <ul className='flex space-x-10 mr-[100px]'>
                    <li  onClick={()=>navigate("/")} className={`cursor-pointer py-3 size-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && " border-b-red-500 text-black"}`}>Home</li>
                    <li  onClick={()=>navigate("/offers")} className={`cursor-pointer py-3 size-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && " border-b-red-500 text-black"}`}>Offers</li>
                    <li  onClick={()=>navigate("/sign-in")} className={`cursor-pointer py-3 size-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in") && " border-b-red-500 text-black"}`}>Sign-In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
