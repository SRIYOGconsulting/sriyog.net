import React from "react";


const Home = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="w-full min-h-[554px] bg-[#D0D0D0] flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:py-16 md:pt-0 relative overflow-hidden">
        {/*   header width and alignment */}
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center px-6">
          {/* Text Content  Aligned directly below logo column */}
          <div className="flex flex-col justify-start md:justify-center text-left text-[#0D5D59] z-10 w-full md:w-1/2 order-1 md:order-1 mt-4 md:mt-0">
            <div className="text-[25px] md:text-2xl lg:text-3xl font-semibold mb-3 leading-tight opacity-90">
              Welcome to
            </div>
            <div className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-shadow-sm">
              SRIYOG Consulting
            </div>
            <div className="mt-4 text-[16px] md:text-[18px] lg:text-[20px] max-w-[600px] leading-relaxed opacity-95 line-height-loose">
              Empower organizations in these vital industries with innovative, scalable,
              technology-driven services that enhance operational efficiency and support
              long-term growth.
            </div>
            <div className="mt-8 md:mt-10 flex flex-row flex-wrap justify-start gap-4 md:gap-6">
              <button className="border-2 border-[#0D5D59] py-3 px-8 rounded-xl text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition-all duration-300 ease-in-out min-w-[130px] shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                About
              </button>
              <button className="bg-[#0D5D59] text-white px-10 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 ease-in-out min-w-[150px] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Book Meeting
              </button>
            </div>
          </div>

          {/* Spacer for mobile to push image below */}
          <div className="w-full md:hidden h-px"></div>

          {/* Image - Full width on mobile, fixed on desktop, enhanced with better styling */}
          <div className="w-full md:w-1/2 h-[300px] md:h-full flex justify-center md:justify-end order-2 md:order-2 px-0 md:px-0 z-0 mt-6 md:mt-0">
            <div className="relative w-full max-w-[500px] h-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src="/images/home/1.jpg"  // Ensure your image is at public/images/home/1.jpg
                alt="Hero banner - Scenic view representing growth and innovation"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#D0D0D0]/50 to-transparent md:from-transparent"></div> */}
      </section>


      {/* More sections to be added below */}
    </div>
    
  );

};

export default Home;