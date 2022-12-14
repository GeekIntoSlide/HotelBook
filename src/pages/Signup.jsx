import{AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import React,{Fragment} from 'react'
import SigninPhoto from '../static/sign-in.jpg';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import {getAuth,createUserWithEmailAndPassword,updateProfile, signInWithPopup} from 'firebase/auth';
import { db } from '../firebase';
import { getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';

export default function SignIn() {
  const navigate=useNavigate();
  const[showPassword,setShowPassword]=useState(false);
  const[formData,setFormdData]=useState({
    name:" ",
    email:" ",
    password:"",
  });
  const{name,email,password}=formData;
  const onChange=(event)=>{
    event.preventDefault();
    setFormdData((prevState)=>({
      ...prevState,
      [event.target.id]:event.target.value
    }));

  }
  const iconChange=()=>{
    if(showPassword===true){
      setShowPassword(false);
    }
    else if(showPassword===false){
      setShowPassword(true);
    }
  }
  async function signup(e){
    e.preventDefault();
  try {
    const auth=getAuth();
    const userCredential=await 
    createUserWithEmailAndPassword(auth,email,password);
    updateProfile(auth.currentUser,{
      displayName:name
    })
    const user=userCredential.user;
    const formDataCopy={...formData};
    delete formDataCopy.password;
    formDataCopy.timestamp=serverTimestamp();
    await setDoc(doc(db,"users",user.uid),formDataCopy);
    toast.success("Sign-up Succesfully")
    navigate("/");
  } catch (error) {
    if(name.length<1){
      toast.error("Please enter name")
      return(false);
    }
    else if(password.length<7)
    {
      toast.error("Password is too small")
      return(false)
    }
    else{
    toast.error("User already exist");
  }
  
  }
}
async function googleSignUp(){
  try {
    const auth=getAuth();
    const provider=new 
    GoogleAuthProvider() 
    const result=await signInWithPopup(auth,provider);
    const user=result.user;
    const docRef=doc(db,'users',user.uid);
    const docSnap=await getDoc(docRef);
    if(!docSnap.exists()){
      await setDoc(docRef,{
        name:user.displayName,
        email:user.email,
        timestamp:serverTimestamp()

      })
      navigate("/")
    }
  } catch (error) {
    toast.error("Can't continue with google")
  }
}
  return (
    <React.Fragment>
      <div className='text-center'>
        <h1 className="text-[40px] font-black">Sign Up</h1>
      </div>
      <div className=' flex flex-wrap justify-center lg:mt-[20px]'>
        <div className='md:w-[47%] lg:w-[40%] mb-12 md:mb-6 lg:mt-[40px] '>
          <img src={SigninPhoto} className="w-full rounded-[20px]"/>
        </div>
        <div className='w-90% md:w-[67%] lg:w-[40%] lg:ml-[50px] lg:mt-[100px] md:ml-[250px] ml-[30px]'>
        <input id="name" onChange={onChange} value={name} type="text" placeholder='Full Name' className={`block w-[400px] border-2 mb-[10px] h-[40px] border-sky-500` } />
          <input id="email"onChange={onChange} value={email} type="email" placeholder='Email address' className={`block w-[400px] border-2 mb-[10px] h-[40px] border-sky-500` } />
          <input id='password' onChange={onChange} value={password} type={showPassword ?'text' :'password'} placeholder="Password" className='block w-[400px] border-2 mb-[10px] h-[40px] border-sky-500 transition ease-in-out relative'/>
          {showPassword?(
            <AiFillEyeInvisible className='relative left-[370px] top-[-38px] text-xl cursor-pointer' onClick={iconChange}/>
          ):(<AiFillEye className='relative left-[370px] top-[-38px] text-xl cursor-pointer 'onClick={iconChange} />)}
          <span className='mb-[10px] mt-[-10px] cursor-pointer'>have an account?</span>
          <span className=' mt-[-10px] ml-[5px] text-red-400 mb-[10px] cursor-pointer' onClick={()=>navigate('/sign-In')}>Sign-In</span>
          <span className=' mt-[-10px] ml-[70px] mb-[10px] text-cyan-400 mb-[10px] cursor-pointer' onClick={()=>navigate('/forgot-password')}>Forgot Password? </span>
          <button  type='submit' className='bg-sky-500 block w-[400px] h-[40px] mb-[10px] mt-[10px] text-white' onClick={signup}>Sign-Un</button>
          <h1 className='text-center font-bold  ml-[-150px]'>OR</h1>
          <button type="submit" className="w-[400px] bg-red-500 h-[40px] mt-[10px]"  onClick={googleSignUp}><i class="fa-brands fa-google"></i> Continue With Google</button>
        </div>
      </div>

    </React.Fragment>
  )
  }
