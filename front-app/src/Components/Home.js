import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Home() {
    const [bookdata,setbookdata]=useState([]);
   useEffect(()=>
   {
            const getdata=async()=>
            {
                const result=await axios.get('http://localhost:1000/books/all')
                console.log(result);
                setbookdata(result.data);
            }
           getdata();
           
        
   },[]);
  
  return (
    <div>
        <div className='flex flex-row mt-3'>
            <div className='basis-3/12'>

            </div>
            {/*-------------------Center-------------- */}
            <div className='basis-6/12 flex flex-col space-y-3'>
                <div className='w-full h-[300px] text-white bg-gray-500'>
                    <p className='text-[18px] pl-5 pt-7 flex'>Recommended Stories</p>
                    <div className='flex flex-row pt-7 pl-[20px] pr-[20px] space-x-4'>
                        <div className='w-[232px] h-[180px] bg-white text-gray-500 flex flex-col'>
                            <p className='h-[120px] flex items-center justify-center pt-7'>Story Name-1</p>
                            <div className='w-full justify-center flex '>
                                <button className='bg-green-500 text-white w-[150px] h-[30px]'>Start Reading</button>
                            </div>
                        </div>
                        <div className='w-[232px] h-[180px] bg-white text-gray-500 flex flex-col'>
                            <p className='h-[120px] flex items-center justify-center pt-7'>Story Name-2</p>
                            <div className='w-full justify-center flex '>
                                <button className='bg-green-500 text-white w-[150px] h-[30px]'>Start Reading</button>
                            </div>
                        </div>
                        <div className='w-[232px] h-[180px] bg-white text-gray-500 flex flex-col'>
                            <p className='h-[120px] flex items-center justify-center pt-7'>Story Name-3</p>
                            <div className='w-full justify-center flex '>
                                <button className='bg-green-500 text-white w-[150px] h-[30px]'>Start Reading</button>
                            </div>
                        </div>
                    </div>      
                </div>
                <div className='flex flex-col space-y-3 bg-gray-500 text-white h-fit'>
                        <p className='pl-5 text-[18px] pt-5'>All Stories</p>
                        <div className='flex flex-col pt-2 space-y-4'>
                            {
                                bookdata.map((data,index)=>

                                    <div className='w-[720px] h-[90px] ml-4 bg-white flex flex-row'>
                                        <div className='basis-9/12 flex flex-col justify-center pl-5'>
                                            <p className='text-gray-700 font-semibold tracking-wider text-[17px]'>{data.title}</p>
                                            <p className=' font-medium tracking-wider text-gray-500'>uploaded by: <span>{data.authorName}</span></p>
                                      
                                        </div>
                                         <div className='basis-3/12 flex justify-center items-center'>
                                            <Link to={'/books/'+data._id}><button className='bg-green-500 text-white w-[150px] h-[30px]'>Read Now</button></Link>
                                            
                                        </div>
                                       
                                     </div>
                                )
                                    
                                 
                            }
                        </div>
                        <div className='h-[20px]'></div>
                    </div>
            </div>
            {/*-------------------Center-------------- */}
            <div className='basis-3/12'>

            </div>
        </div>
        
    </div>
  )
}

export default Home