import React, { useState } from 'react';

const Sidekick = () => {
  const [show, setShow] = useState(true);
  const [menu, setMenu] = useState(false);

  return (
    <div
      className="
        fixed 
        right-2 md:right-0 
        top-auto md:top-[15%] 
        bottom-4 md:bottom-auto
        z-20 
        flex 
        md:block
      "
    >
      {/* SIDEBAR SHORTCUTS (Desktop: vertical / Mobile: small icon bubble) */}
      {show && (
        <div className="relative cursor-pointer">
          <div
            onClick={() => {
              setShow(false);
              setMenu(true);
            }}
            className="
              sidekick
              px-4 py-3
              rounded-xl
              bg-white/5
              backdrop-blur-sm

              flex md:flex-col 
              flex-row             
              items-center 
              gap-4 md:gap-2

              shadow-lg
            "
          >
            {/* WhatsApp */}
            <div className="flex flex-col items-center gap-1">
              <img
                src="/icons/whatsapp.svg"
                onClick={() => window.open('https://sriyog.com', '_blank')}
                className="h-[34px] w-[34px] hover:scale-110 transition"
              />
              <p className="hidden md:block text-[9.5px] font-bold text-[#888888]">
                Whatsapp
              </p>
            </div>

            {/* Desktop-only separators */}
            <img src="/icons/line.svg" className="hidden md:block h-[1px] w-14" />

            {/* Messenger */}
            <div className="flex flex-col items-center gap-1">
              <img
                src="/icons/messenger.svg"
                onClick={() => window.open('https://sriyog.com', '_blank')}
                className="h-[34px] w-[34px] hover:scale-110 transition"
              />
              <p className="hidden md:block text-[9.5px] font-bold text-[#888888]">
                Messenger
              </p>
            </div>

            <img src="/icons/line.svg" className="hidden md:block h-[1px] w-14" />

            {/* Signal */}
            <div className="flex flex-col items-center gap-1">
              <img
                src="/icons/signal.svg"
                onClick={() => window.open('https://sriyog.com', '_blank')}
                className="h-[34px] w-[34px] hover:scale-110 transition"
              />
              <p className="hidden md:block text-[9.5px] font-bold text-[#888888]">
                Signal
              </p>
            </div>

            <img src="/icons/line.svg" className="hidden md:block h-[1px] w-14" />

            {/* Discord */}
            <div className="flex flex-col items-center gap-1">
              <img
                src="/icons/discord.svg"
                onClick={() => window.open('https://sriyog.com', '_blank')}
                className="h-[34px] w-[34px] hover:scale-110 transition"
              />
              <p className="hidden md:block text-[9.5px] font-bold text-[#888888]">
                Discord
              </p>
            </div>

            <img src="/icons/line.svg" className="hidden md:block h-[1px] w-14" />

            {/* Phone */}
            <div className="flex flex-col items-center gap-1">
              <img
                src="/icons/phone.svg"
                onClick={() => window.open('https://sriyog.com', '_blank')}
                className="h-[34px] w-[34px] hover:scale-110 transition"
              />
              <p className="hidden md:block text-[9.5px] font-bold text-[#888888]">
                Phone
              </p>
            </div>
          </div>
        </div>
      )}

      {/* EXPANDED MENU PANEL */}
      <div
        className={`absolute top-14 w-[250px] transition-transform duration-300 
        ${menu ? '-translate-x-[270px]' : 'translate-x-80'}`}
      >
        <button
          onClick={() => {
            setMenu(false);
            setTimeout(() => setShow(true), 200);
          }}
          className="absolute top-2 right-4 bg-[#888888] rounded-full p-1"
        >
          <img src="/icons/cross.svg" className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center sidekick py-4 rounded-xl w-[250px]">
          <div className="flex items-center gap-3">
            <img src="/icons/info.svg" className="w-[25px] h-[25px]" />
            <p className="text-[#888888]">Quick Contact</p>
          </div>

          <div className="my-3 bg-[#888888] w-[225px] h-[1.5px]" />

          <div className="flex items-center gap-3">
            <img
              src="/icons/phone.svg"
              onClick={() => window.open('https://sriyog.com', '_blank')}
              className="w-[30px] h-[30px] hover:scale-110 transition"
            />
            <p className="text-[#888888] py-2">Hotline Number</p>
          </div>

          <p className="font-semibold text-[#888888] text-center">
            +977-01-4548068
          </p>

          <div className="flex items-center gap-3 p-1 my-2 border-[1px] border-[#B3ADAD] rounded-md">
            <img src="/icons/email2.svg" className="h-5 w-5" />
            <p className="text-xs text-[#888888]">info@thecompanyname.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidekick;
