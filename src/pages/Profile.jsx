import React from 'react'
import { useState } from 'react'
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router';
export default function Profile() {
  const auth=getAuth();
  const navigate=useNavigate();
  const[formData,setFormdData]=useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email
  });
  const[edit,setEdit]=useState(false);
  function editClick(){
    setEdit(true);
  }
  const{name,email}=formData;
  function onLogout(){
    auth.signOut();
    navigate("/");
  }
  return (
    <section className='max-w-6xl mx-auto justify-center flex items-center flex-col '>
      <h1 className='text-center text-bold font-bold mt-6 text-3xl'>Profile</h1>
      <div className='w-full md:w-[50%] px-3'>
      <form className='mt-[50px]'>
      <input disabled id="name" value={name}type="text" className='mb-6 w-full bg-white-900 border-gray-300 text-xl px-[16px] py-[2px] text-center font-bold '/>
      <input disabled id="email"value={email}type="email" className=' mb-6 w-full bg-white-900 border-gray-300 text-xl px-[16px] py-[2px] text-center font-bold '/> 
      <div className='mt-2 flex justify-between'>
        <p className=''>Do you want to change your name
        <span className='ml-[5px] text-blue-700 cursor-pointer' onClick={editClick}>? edit</span></p>
       <p onClick={onLogout} className='cursor-pointer'>Sign-Out</p>
      </div>        
      </form>  
      </div>    
    </section>
  )
}
