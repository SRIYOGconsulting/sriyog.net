import React, { useEffect } from 'react'

const Lightbox = ({data,setLightbox,lightbox,setIndex,index}) => {
   

   useEffect(() => {
    document.body.classList.toggle('hideScroll', lightbox);
    document.body.classList.toggle('showScroll', !lightbox);

    return () => {
        document.body.classList.remove('hideScroll', 'showScroll');
    };
}, [lightbox]);
  return (
        <>
            <button onClick={()=>setIndex(i => i === 0 ? data.length - 1 : i - 1)} className='fixed left-5 top-[44%] z-[9999] text-white text-7xl'>‹</button>
            <div
                className="fixed top-0 left-0 right-0 h-screen bg-black/100 z-[999] flex flex-col items-center justify-center"
            >
                <button onClick={()=>{setLightbox(false)}} className='absolute top-3 right-5 text-5xl rounded-full w-10 h-10 text-white'>×</button>
                <h1 className=' text-white z-40 pb-8'>{index + 1}/{data.length}</h1>
                <img
                src={data[index].img}
                alt={index}
                className="max-w-[75%] max-h-[75%] rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
                /> 
                
            </div>
            <button onClick={()=>setIndex(i => (i + 1) % data.length)} className='fixed right-5 top-[44%] z-[9999] text-white text-7xl'>›</button>
        </>
  )
}

export default Lightbox