import React from 'react'

function WrongPass({onclose,visible}) {
    if(!visible)
    {
        return null;
    }
    
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center'>
        <div className='flex flex-col bg-white w-[600px] h-[200px] rounded-lg shadow-2xl justify-center items-center space-y-4'>
                <div className='text-[19px]'>Please enter the correct Password.</div>
                <button className='w-[190px] h-[40px] text-[20px] text-white bg-sky-500 justify-center items-center flex' onClick={onclose}>I Understand</button>
        </div>
    </div>
  )
}

export default WrongPass