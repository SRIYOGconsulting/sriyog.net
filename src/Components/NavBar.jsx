import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full bg-[#074842] text-white'>
    <div className='max-w-5xl mx-auto py-2.5 px-5  md:space-y-0'>
        <div className='flex flex-col items-center  md:justify-between md:flex-row'>
            <p className='text-center pb-3 md:pb-0'>Grab a limited time offer. get upto USD 120 credits in professional plans. Hurry up.</p>
            <button className='bg-white text-black font-semibold px-2 py-1 rounded-md'>Apply Now</button>
        </div>
    </div>
    </div>
  )
}

export default NavBar