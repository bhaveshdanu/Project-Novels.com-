import React from 'react'

function Regpopup({onclose, visible}) {
    if(!visible)
    {
        return null;
    }
  return (
    
    <div className='fixed inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center'>
        <div className='flex flex-col bg-white w-[600px] h-[200px] rounded-lg shadow-2xl justify-center items-center space-y-4'>
                <div className='text-[27px]'>User has been Registered.</div>
                <button className='w-[190px] h-[50px] text-[27px] text-white bg-sky-500 justify-center items-center flex' onClick={onclose}>I Understand</button>
        </div>
    </div>
  )
}

export default Regpopup