import React, { useState } from 'react'

const NavBar = () => {
  const [visible ,setVisible] = useState(true);
  return (
    <>
    {visible && 
    <div className='relative w-full bg-[#074842] text-white  '>
    <div className='max-w-7xl mx-auto py-2.5 px-5  md:space-y-0'>
        <div className='w-full flex flex-row items-center justify-between md:gap-4'>
             <div>
             <p className='text-center text-sm sm:text-[13px] lg:text-sm md:pb-0'>Helpline Number  +977-01-4548068</p>
             </div>
             <div className='flex gap-3 items-center'> 
             <p className='text-[13px] lg:text-sm italic hidden md:flex'>SRIYOG App is having its own homepage and a new company.</p>
             <button className='text-sm hidden md:flex italic hover:bg-[#ebebeb] hover:text-[#074842] hover:border-none bg-transparent border border-[#ebebeb] px-2 py-1 rounded-md cursor-pointer'>View Now</button>
             <button className='text-md sm:text-sm hover:bg-[#ebebeb] hover:text-[#074842] hover:border-none bg-transparent border border-[#ebebeb] px-2 py-1 rounded-md cursor-pointer' onClick={()=>setVisible(false)}>
              X
            </button>
            </div>
        
        </div>
    </div>
    </div>}
    </>
  )
}

export default NavBar