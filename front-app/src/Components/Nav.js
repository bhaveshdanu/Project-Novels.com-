import React from 'react'
import { useState } from 'react';
import {IoMdSearch} from 'react-icons/io'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Home from './Home';
import { useNavigate } from 'react-router-dom';
import WriteNovel from '../Popups/WriteNovel';
function Nav() {
  const [OpenCreateWindow,setOpenCreateWindow]=useState(false);
  const navigate=useNavigate('/');
  const handleclose=()=>
  {
    setOpenCreateWindow(false);
  }
  const handlelogout=()=>
  {
    localStorage.clear();
    navigate('/');
  }
  return (
    <div>
       <div className='flex flex-row h-[90px] bg-gray-600 text-white items-center'>
        <div className='text-[18px] basis-3/12 pl-4'>
          Novels.com
        </div>
        <div className='basis-3/12 flex flex-row items-center justify-center'>
          <IoMdSearch className='h-[40px] bg-white text-gray-600 pl-3' size={32}/>
          <input type='text' className='w-[340px] h-[40px] pl-3 outline-none text-gray-500 text-[16px] pr-4' placeholder='search writers here'/>
          <BsFillArrowRightCircleFill className='h-[40px] bg-white text-gray-500 pr-4' size={38}/>
        </div>
        <div className='basis-3/12 flex flex-row items-center justify-center'>
          <button className='w-[180px] h-[40px] bg-red-700 text-[16px]' onClick={()=>setOpenCreateWindow(true)}>Upload your Story</button>
          <AiOutlineCaretDown className='h-[40px] text-gray-900  bg-red-700 pr-4' size={35}/>
        </div>
        <div className='flex flex-row text-[18px] space-x-1 basis-3/12 justify-center items-center'>
          
          <button className='w-[120px] h-[40px] bg-sky-500' onClick={handlelogout}>Logout</button>
        </div>
       </div>
       <Home/>
       <WriteNovel visible={OpenCreateWindow} close={handleclose}/>
    </div>
  )
}

export default Nav