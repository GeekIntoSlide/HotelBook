import React from 'react'
import SigninPhoto from '../static/sign-in.jpg';
import { useNavigate } from 'react-router';

export default function ForgotPassword() {
  const navigate=useNavigate();
  return (
    <React.Fragment>
      <div className='text-center'>
        <h1 className="text-[40px] font-black">Forgot Password</h1>
      </div>
      <div className='flex justify-between ml-[40px] mt-[80px]'>
        <div>
          <img src={SigninPhoto} className="h-[400px] rounded-[20px]"/>
        </div>
        <div className='mr-[300px] mt-[25px]'>
       
          <input type="email" placeholder='Email address' className={`block w-[400px] border-2 mb-[10px] h-[40px] border-sky-500` } />
         
          <span className='mb-[10px] cursor-pointer'>Don't have an account?</span>
          <span className='ml-[5px] text-red-400 mb-[10px] cursor-pointer' onClick={()=>navigate('/sign-up')}>Register</span>
          <span className='ml-[60px] mb-[10px] text-cyan-400 mb-[10px] cursor-pointer' onClick={()=>navigate('/sign-in')}>Sign-In instead </span>
          <button  type='submit' className='bg-sky-500 block w-[400px] h-[40px] mb-[10px] mt-[10px] text-white'>Sign-In</button>
          <h1 className='text-center font-bold'>OR</h1>
          <button type="submit" className="w-[400px] bg-red-500 h-[40px] mt-[10px]"><i class="fa-brands fa-google"></i> Continue With Google</button>
        </div>
      </div>

    </React.Fragment>
  )
}
