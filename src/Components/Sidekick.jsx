import React, { useState } from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { FaWhatsapp, FaFacebookMessenger, FaDiscord, FaPhone } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { HiX } from 'react-icons/hi';
import { MdHelpOutline, MdMail } from 'react-icons/md';
import { SiSignal,SiViber } from 'react-icons/si';
const Sidekick = () => {
  const [show,setShow] = useState(true);
  const [menu,setMenu] = useState(false);
  return (
    <div className='fixed right-0 top-[30%] min-h-screen'>
      <div className='relative '>

      </div>
        {show && 
        <div className='relative cursor-pointer hover:scale-[1.01] transition-all duration-200'>
            <div onClick={()=>{setShow(false);setMenu(true)}} className="flex flex-col justify-center items-center gap-4 rounded-tl-xl rounded-bl-xl bg-[#EBEBEB] px-4 py-3">
            <FaWhatsapp size={32} className='text-[#888888] hover:scale-[1.15] transition-all duration-200' />
            <div className='w-[40px] h-[3px] bg-[#888888] '></div>
            <FaFacebookMessenger className='text-[#888888] hover:scale-[1.15] transition-all duration-200' size={30} />
            <div className='w-[40px] h-[3px] bg-[#888888] '></div>
            <FaDiscord size={32} className='text-[#888888] hover:scale-[1.15] transition-all duration-200' />
            <div className='w-[40px] h-[3px] bg-[#888888] '></div>
            <SiSignal size={32} className='text-[#888888] hover:scale-[1.15] transition-all duration-200' />
            <div className='w-[40px] h-[3px] bg-[#888888] '></div>
            <BiPhoneCall size={32} className='text-[#888888] hover:scale-[1.15] transition-all duration-200' />
         </div>
        </div> }

        {menu &&
        <div className={`absolute top-0 right-0 h-full w-[260px] transform transition-transform duration-500 ease-in-out ${menu ? "translate-x-0" : "translate-x-full"}`}>
            <button onClick={()=>{setMenu(false);setShow(true)}} className='absolute -top-2 -left-2 bg-[#888888] rounded-full p-1'><HiX size={18}/></button>
            <div className='flex flex-col justify-center items-center bg-[#ebebeb] py-4 mr-3 rounded-md w-[250px]'>
                <div className='flex items-center gap-3 justify-start'>
                  <MdHelpOutline size={25} className='text-[#888888]'/>
                  <p className='text-[#888888]'>Quick Contact</p>
                </div>
                <div className='my-3 bg-[#888888] w-[225px] h-[1.5px]'></div>
                <div className='flex items-center gap-3'>
                  <BiPhoneCall size={25} className='text-[#888888]' />
                  <p className='text-[#888888] py-2'>Hotline Number</p>
                </div>
                <p className='font-semibold text-[#888888] text-center'>+977-01-4548068</p>
                <div className='flex items-center w-fit justify-center gap-3 p-1 my-2 rounded-md border-[1.5px] border-[#B3ADAD]'>
                    <FiMail size={18} className='text-[#888888]'/>
                    <p className='text-xs text-[#888888] pt'>info@thecompanyname.com</p>
                </div>
                <div className='flex items-center justify-center gap-4 py-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <FaFacebookMessenger size={23} className='text-[#888888]'/>
                        <p className='text-xs text-[#888888]'>Messenger</p>
                    </div>
                    <div className='flex items-center w-fit justify-center gap-3 p-1 my-2 rounded-md border-[1.5px] border-[#B3ADAD]'>
                        <FaWhatsapp size={18} className='text-[#888888]'/>
                        <p className='text-xs text-[#888888] pt'>+977 98520-24-365</p>
                    </div>
                </div>
            </div>
        </div>
        }
    </div>
  )
}

export default Sidekick