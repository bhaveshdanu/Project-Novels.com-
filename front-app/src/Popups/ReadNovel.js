import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {RxCross2} from 'react-icons/rx'
import { useParams } from 'react-router-dom'
function ReadNovel({match}) {

    const [content,setcontent]=useState([]);
    const{id}=useParams();
    const url='http://localhost:1000/books/'+id;
    useEffect(()=>
    {
        const Read=async()=>
        {
            let result=await axios.get(url);
            console.log(result.data);
            setcontent(result.data);
        }
        Read();
    },[])
  return (
    <div className='flex justify-center pt-[30px] pb-[30px]'>
        <div className='w-[950px] bg-gray-500 text-white flex flex-col p-[20px]'>
            <div className='text-[20px] pb-5'>Story:</div>
            {
                
                content.map((items,index)=>
                <div className='text-[18px] h-[520px]'>
                    {items.description}
                </div>)
            }
            <div className='flex flex-row'>
                <input type='text' className='w-full h-[40px] pl-3 text-gray-500 outline-none focus:ring-1 focus:ring-sky-500' placeholder='Add your comments here.'/>
                <button className='h-[40px] w-[120px] tracking-wider bg-sky-500'>comment</button>
            </div>
        </div>
    </div>
  )
}

export default ReadNovel