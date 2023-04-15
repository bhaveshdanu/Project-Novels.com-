import React, { useState } from 'react'
import register from '../Images/register.jpg'
import {FiBox} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Regpopup from './Regpopup'

function Register() {

  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [showmymodel,setshowmymodel]=useState(false);

  const handleonclose=()=>
  {
    setshowmymodel(false);
  }
  const registerbtn=()=>
  {
    axios.post('http://localhost:1000/register',{
      name:name,
      email:email,
      password:password
    }).then((res)=>{console.log(res);
    setshowmymodel(true);
    setname('');
    setemail('');
    setpassword('');
  
    
    }).catch((err)=>{console.log("user not register due to "+err)})
  }
  return (
    <div className='flex flex-col select-none '>
            <div className='h-[90px] w-full flex flex-row-reverse justify-start pl-4 pt-[40px]'>
                <div className='flex flex-row space-x-3 basis-6/12 mt-[23px] ml-[150px]'>
                <FiBox size={32} className='text-sky-500'/>
                <div className='text-[20px] text-gray-700 font-semibold'>Novels.com</div>
                </div>
                <div className='basis-9/12 flex flex-row pt-[12px] ml-[125px]'>
                   <FaUserCircle className='text-red-600 bg-sky-300 h-[30px] pl-3 rounded-l-lg' size={35}/>
                   <div className='bg-sky-300 h-[30px] w-[150px] pl-2 pt-[1px] text-white rounded-r-lg'>Account Creation</div>
                </div>
            </div>
           <div className='flex flex-row-reverse'>
           <div className=' w-full flex flex-col items-center pt-[80px] basis-8/12'>
                <div className='text-[35px]'>Create your Account</div>
                <div className='w-[500px] flex flex-col items-center justify-center space-y-5 pt-[40px]'>
                  <input type='text' className='bg-gray-200 w-[420px] h-[40px] pl-4 text-[17px] outline-none border-none focus:ring-2 ring-sky-400' placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}/>
                  <input type='text' className='bg-gray-200 w-[420px] h-[40px] pl-4 text-[17px] outline-none border-none focus:ring-2 ring-sky-400' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} />
                  <input type='password' className='bg-gray-200 w-[420px] h-[40px] pl-4 text-[17px] outline-none border-none focus:ring-2 ring-sky-400' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                 <button className='bg-red-600 w-[420px] h-[40px] pl-4 text-[15px] outline-none border-none text-white 'onClick={registerbtn}>
                    Sign up
                 </button>
                 <div className='text-gray-500'>Already have an account? <Link to='/'><span className='text-sky-500 cursor-pointer'>Sign in</span></Link></div>
                </div>    
            </div>
            <div className='h-[500px] w-full flex flex-col items-center basis-8/12 '>
                <img src={register} alt='login' className='w-[600px]  '/>
            </div>
           </div>
        <Regpopup onclose={handleonclose} visible={showmymodel}/>
        </div>
  )
}

export default Register