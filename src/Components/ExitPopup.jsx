import React, { useEffect, useState } from 'react'

const ExitPopup = () => {
//   const [show,setShow] = useState(false);


  window.addEventListener("beforeunload", function (event) {
      // Show confirmation dialog
      event.preventDefault();
      event.returnValue = "Leaving Site ?"; 
    });


//   if(!show) return null
  return (
    <>
    {/* {show &&
    <div className='fixed top-[260px] left-[630px] bg-[#074842] z-40 rounded-md'>
        <div className='flex flex-col justify-center items-center py-2 '>
            <h1 className=' text-3xl uppercase font px-5 pt-4 text-white'>You're Leaving?</h1>
            <p className='text-[#bebebe] w-[180px] text-center font pb-4 pt-1'>Changes you made may not be saved.</p>
            <div className='flex items-center justify-center font gap-2 pb-4'>
                <button onClick={()=>setShow(false)} className='bg-white hover:bg-[#ebebeb] text-[#074842] px-3 py-1 rounded-md'>Cancel</button>
                <a href="http://google.com">
                <button className='bg-[#b0b0b0] text-[#074842] px-4 py-1 hover:bg-[#848484] rounded-md'>Leave</button>
                </a>
            </div>
        </div>
    </div>} */}
    </>
  )
}

export default ExitPopup