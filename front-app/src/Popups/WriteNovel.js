import axios from 'axios';
import React, { useState } from 'react'
import {RxCross2} from 'react-icons/rx'
import { useNavigate } from 'react-router-dom';
function WriteNovel({visible,close}) {
    const [authorname,setauthorname]=useState('');
    const [title,settitle]=useState('');
    const [description,setdescription]=useState('');
    const navigate=useNavigate();
    const savebook=async ()=>
    {
        try{
           await axios.post('http://localhost:1000/book/upload',{
            authorName:authorname,
            title:title,
            description:description
            })
            close()
            window.location.reload();
        }catch(e)
        {
            console.log(e);
        }
       
    }


    if(!visible)
    {
        return null;
    }
  return (
    
    <div className='bg-black bg-opacity-30 inset-0 fixed flex items-center justify-center'>
        <div className='w-[1020px] h-[640px] bg-white flex flex-col'>
                <div className='flex items-end justify-end pr-4 pt-5'>
                    <RxCross2 className='text-gray-500 cursor-pointer' size={25} onClick={close}/>
                </div>
                <div className='flex justify-center mt-[40px] flex-row'>
                    <p className='flex items-center text-[18px] tracking-wider w-[100px] justify-center'>AUTHOR</p>
                    <input className='bg-gray-300 w-[600px] h-[45px] pl-4 focus:ring-2 focus:outline-none focus:ring-sky-500 ' placeholder="Author's Name" onChange={(e)=>setauthorname(e.target.value)} value={authorname}/>
                </div>
                <div className='flex justify-center mt-[30px] flex-row'>
                    <p className='flex items-center text-[18px] tracking-wider w-[100px] justify-center'>TITLE</p>
                    <input className='bg-gray-300 w-[600px] h-[45px] pl-4 focus:ring-2 focus:outline-none focus:ring-sky-500 ' placeholder='Story Title' onChange={(e)=>settitle(e.target.value)} value={title}/>
                </div>
                <div className='flex justify-center mt-[30px] flex-row'>
                    <p className='flex items-center text-[18px] tracking-wider w-[100px] justify-center'>CONTENT</p>
                    <textarea className='bg-gray-300 w-[600px] h-[315px] resize-none focus:ring-2 focus:outline-none focus:ring-sky-500 pl-4 pt-4' placeholder='Write your Short Story here.' onChange={(e)=>setdescription(e.target.value)} value={description}/>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='bg-sky-500 mt-[30px] w-[600px] h-[40px] ml-[100px] text-white' onClick={savebook}>publish</button>
                </div>
        </div>
    </div>
  )
}

export default WriteNovel