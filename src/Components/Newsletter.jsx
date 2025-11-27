import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-teal-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text */}
        <h2 className="text-white font-semibold italic  text-4xl text-center md:text-left">
          Join our Newsletter
        </h2>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 md:mt-0 w-full md:w-auto">
          <input
            type="email"
            placeholder="enter your eMail"
            className="
              w-[460px]            
              py-3 px-5            
              bg-transparent
              border border-white
              rounded-xl             
              italic                
              text-white
              text-xl
              font-semibold
              placeholder-white/100  
              focus:outline-none
            "
          />

          <button
            className="
              bg-[#FFC700]           
              text-green-900        
              italic               
              text-2xl              
              font-medium
              py-3 px-12           
              rounded-xl            
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
