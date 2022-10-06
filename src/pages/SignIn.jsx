import{AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import React,{Fragment} from 'react'
import SigninPhoto from '../static/sign-in.jpg';
import { useNavigate } from 'react-router';


import { useState } from 'react';

export default function SignIn() {
  const navigate=useNavigate();
  const[showPassword,setShowPassword]=useState(false);
  const[formData,setFormdData]=useState({
    email:" ",
    password:"",
  });
  const{email,password}=formData;
  const onChange=(event)=>{
    event.preventDefault();
    setFormdData((prevState)=>({
      ...prevState,
      [event.target.id]:event.target.value
    }));
    console.log(formData);

  }
  const iconChange=()=>{
    if(showPassword===true){
      setShowPassword(false);
    }
    else if(showPassword===false){
      setShowPassword(true);
    }
  }
  return (
    <React.Fragment>
      <div className='text-center'>
        <h1 className="text-[40px] font-black">Sign In</h1>
      </div>
      <div className=' flex flex-wrap justify-center lg:mt-[20px]'>
        <div className='md:w-[47%] lg:w-[40%] mb-12 md:mb-6 lg:mt-[40px] '>
          <img src={SigninPhoto} className="w-full rounded-[20px]"/>
        </div>
        <div className='w-90% md:w-[67%] lg:w-[40%] lg:ml-[50px] lg:mt-[100px] md:ml-[250px] ml-[30px]'>
          <input id="email"onChange={onChange} value={email} type="email" placeholder='Email address' className={`block w-[400px] border-2 mb-[10px] h-[40px] border-sky-500` } />
          <input id='password' onChange={onChange} value={password} type={showPassword ?'text' :'password'} placeholder="Password" className='block w-[400px] border-2 mb-[10px] h-[40px] border-sky-500 transition ease-in-out relative'/>
          {showPassword?(
            <AiFillEyeInvisible className='relative left-[370px] top-[-38px] text-xl cursor-pointer' onClick={iconChange}/>
          ):(<AiFillEye className='relative left-[370px] top-[-38px] text-xl cursor-pointer 'onClick={iconChange} />)}
          <span className='mb-[10px] cursor-pointer'>Don't have an account?</span>
          <span className='ml-[5px] text-red-400 mb-[10px] cursor-pointer' onClick={()=>navigate('/sign-up')}>Register</span>
          <span className='ml-[40px] mb-[10px] text-cyan-400 mb-[10px] cursor-pointer' onClick={()=>navigate('/forgot-password')}>Forgot Password? </span>
          <button  type='submit' className='bg-sky-500 block w-[400px] h-[40px] mb-[10px] mt-[10px] text-white'>Sign-In</button>
          <h1 className='text-center font-bold'>OR</h1>
          <button type="submit" className="w-[400px] bg-red-500 h-[40px] mt-[10px]"><i class="fa-brands fa-google"></i> Continue With Google</button>
        </div>
      </div>

    </React.Fragment>
  )
  }
