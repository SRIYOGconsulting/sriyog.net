
import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-teal-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* Left Text */}
        <h2 className="text-2xl italic font-light text-center md:text-left">
          Join our Newsletter
        </h2>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 md:mt-0 w-full md:w-auto">

          <input
            type="email"
            placeholder="enter your eMail"
            className="
              px-5 py-2
              rounded-md
              bg-transparent
              border border-white
              placeholder-white
              text-white
              focus:outline-none
              w-full
              sm:w-64
            "
          />

          <button
            className="
              bg-yellow-400
              hover:bg-yellow-300
              text-teal-900
              px-6 py-2
              rounded-md
              font-semibold
              w-full
              sm:w-auto
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
