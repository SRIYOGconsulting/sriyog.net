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
    <div className='fixed top-[90%] right-5 bg-[#888888] rounded-full'>
      <div>
          <BsArrowUpCircle onClick={scrollToTop} size={40} className='text-[#EBEBEB] rounded-full cursor-pointer hover:scale-[1.1] transition-all duration-200'/>
      </div>
    </div>}
    </>
  )
}

export default BacktoTop
