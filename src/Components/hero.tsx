export default function Hero(){

    return(
        <div className="w-full text-[#0B5D5E] h-[554px] bg-[#D0D0D0] flex justify-between md:flex-row flex-col-reverse p-16">

            <div className="flex flex-col my-auto text-[#0D5D59] ">
                    <div className="text-[25px] mb-2">Welcome to</div>
                   <div className="font-bold  text-3xl ">SRIYOG Consulting</div>

                   <div className="mt-4 text-[20px] w-[678px]">
                        empower organizations in these vital industries with innovative, scalable, technology-driven services that enhance operational efficiency and support long-term growth.
                   </div>

                   <div className="mt-4 flex space-x-4">
                        <button className="border border-[#0D5D59] py-2 px-6 rounded ">About</button>
                        <button className="bg-[#0D5D59] text-white px-6 py-2 rounded">Book Meeting</button>
                   </div>
            </div>
             

            <img src="/images/home/1.jpg" width={"500px"} height={"500px"} alt="hero banner" />
        </div>
    )
}