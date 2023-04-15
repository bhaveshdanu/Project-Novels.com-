import React, { useState } from 'react';
import {FiBox} from 'react-icons/fi'
import login from '../Images/login.jpg'
import {FaUserCircle} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserNot from '../Popups/UserNot';
import WrongPass from '../Popups/WrongPass';
import Nav from './Nav.js';
function Login()
{
    const [showusernotfoundmodel,setusernotfoundmodel]=useState(false);
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [wrongpasswordmodel,setwrongpasswordmodel]=useState(false);
    const navigate=useNavigate();
    const handleusernotfoundmodel=()=>
    {
        setusernotfoundmodel(false);
    }
    const handlewrongpasswordmodel=()=>
    {
        setwrongpasswordmodel(false);
    }
    const auth=localStorage.getItem("email");
   
    const handlesignin=async ()=>
    {
        console.log(email,password);
        const body={email:email,password:password}
        let result=await axios.post('http://localhost:1000/login',body);
        console.log(result);
        if(!(result.data==='user not found'))
        {
            if(result.data.password===password)
            {
                localStorage.setItem("email",email);
                navigate("/")
            }
            else{
                setwrongpasswordmodel(true);
                setpassword('');
            }
        }
        else{
            setusernotfoundmodel(true);
            setemail('');
            setpassword('');
        }
    }

    return(
        <div className='flex flex-col select-none '>
            {auth?<Nav/>:<>
            <div className='h-[125px] w-full flex flex-row justify-start pl-4 pt-[40px]'>
                <div className='flex flex-row space-x-3 basis-10/12'>
                <FiBox size={32} className='text-sky-500'/>
                <div className='text-[20px] text-gray-700 font-semibold'>Novels.com</div>
                </div>
                <div className='basis-2/12 flex flex-row pt-[12px]'>
                   <FaUserCircle className='text-red-600 bg-sky-300 h-[30px] pl-3 rounded-l-lg' size={35}/>
                   <div className='bg-sky-300 h-[30px] w-[130px] pl-2 pt-[1px] text-white rounded-r-lg'>Not Logged In</div>
                </div>
            </div>
           <div className='flex flex-row'>
           <div className=' w-full flex flex-col items-center pt-[80px] basis-9/12'>
                <div className='text-[35px]'>Login to your Account</div>
                <div className='w-[500px] flex flex-col items-center justify-center space-y-5 pt-[40px]'>
                  <input type='text' className='bg-gray-200 w-[420px] h-[40px] pl-4 text-[17px] outline-none border-none focus:ring-2 ring-sky-400' placeholder='Email' value={email} name='email' onChange={(e)=>setemail(e.target.value)}/>
                  <input type='password' className='bg-gray-200 w-[420px] h-[40px] pl-4 text-[17px] outline-none border-none focus:ring-2 ring-sky-400' placeholder='password' value={password} name='password' onChange={(e)=>setpassword(e.target.value)}/>
                 <button className='bg-cyan-500 w-[420px] h-[40px] pl-4 text-[15px] outline-none border-none text-white ' onClick={handlesignin}>
                    Sign in
                 </button>
                 <div className='text-gray-500'>Don't have an account? <Link to='/register'><span className='text-red-600 cursor-pointer'>Register now</span></Link></div>
                </div>    
            </div>
            <div className='h-[600px] w-full flex flex-col items-center basis-5/12'>
                <img src={login} alt='login' className='w-[600px]'/>
            </div>
           </div>
           <UserNot closevisible={handleusernotfoundmodel} visible={showusernotfoundmodel}/>
           <WrongPass onclose={handlewrongpasswordmodel} visible={wrongpasswordmodel}/>
            </>}
        </div>
        
    )
}
export default Login;