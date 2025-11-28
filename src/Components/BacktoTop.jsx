import React, { useEffect, useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'

const BacktoTop = () => {
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 0){
        setScrolled(true)
      }else{
        setScrolled(false);
    }}
    window.addEventListener('scroll', handleScroll);
    return ()=>{removeEventListener('scroll',handleScroll)}
  },[])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    {scrolled &&
    <div className='fixed top-[90%] right-4  rounded-full bg-[#888888] scale-[0.8] border-2 border-[#ebebeb]'>
      <div>
        <svg onClick={scrollToTop} className='  rounded-full -rotate-90 cursor-pointer scale-[1.3] hover:scale-[1.1] transition-all duration-200' width="50px" height="50px" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier">
            <g id="icomoon-ignore"/>
            <path d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z" fill="#ebebeb"/>
            <path d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z" fill='#ebebeb' className='font-bold'/>
          </g>
        </svg>
      </div>
    </div>}
    </>
  )
}

export default BacktoTop
