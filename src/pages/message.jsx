import React from "react";

const Message = () => {
  return (
    <div className="message-page">
      {/* Full-width Teal Ribbon Header */}
      <header className="bg-teal-800 text-white py-8 md:py-12 px-4 md:px-8 mb-6 md:mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Message</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gray-100 py-14 px-4 md:px-10 lg:px-16">
        <div className="bg-white rounded-2xl p-10 md:p-14 max-w-5xl mx-auto shadow-md">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <img
              src="/images/Logo/sriyoglogo.svg"
              alt="Sriyog Logo"
              className="w-40 h-auto"
            />
          </div>

          {/* Message Paragraphs */}
          <section className="space-y-6 text-justify text-gray-700 leading-relaxed mb-10">
            <p>
              Technology has been connecting everyone from one corner of the
              globe to another in the fastest way. Businesses and organizations
              need a strong digital presence and must adopt technology
              effectively to stay ahead in competition.
            </p>

            <p>
              My journey into technology began over a decade ago when I founded
              <strong> PRACAS Infosys</strong> in 2007 A.D. in Biratnagar. I
              aimed to leverage digital solutions to address local challenges
              and foster economic development.
            </p>

            <p>
              My vision has always been to create meaningful impact. I have
              worked with over 500 clients across 15 countries, helping them
              with websites, mobile apps, SEO, social media, corporate emails,
              and IT consulting.
            </p>

            <p>
              Good IT practices help businesses grow faster, enhance digital
              presence, optimize workforce, protect data, and safeguard
              reputation against digital threats like hacking, ransomware, or
              identity theft.
            </p>
          </section>

          {/* Two Paragraphs + Image */}
          <section className="flex flex-wrap md:flex-nowrap items-start gap-10 mb-12">
            {/* Left Text */}
            <div className="w-full md:w-3/5 space-y-6 text-justify text-gray-700 leading-relaxed">
              <p>
                Technology is transforming industries globally, creating
                opportunities for innovation and growth. At Sriyog, we harness
                these advancements to support businesses and individuals in
                achieving their highest potential.
              </p>

              <p>
                We believe in smart digital transformation solutions that solve
                today's problems and prepare organizations for the future. Our
                commitment is to deliver excellence and measurable value through
                every service.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-end">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-md bg-gray-200">
                <img
                  src="/images/message/1.png"
                  alt="CTO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <footer className="mt-10 text-left">
            <p className="text-xl font-bold">Prakash Upreti [ PRACAS ]</p>
            <p className="text-gray-600 text-sm mb-2">
              Chief Technology Officer
            </p>
            <p className="text-gray-700 font-medium mb-4">p@sriyog.com</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-3">
              <img src="/icons/x.svg" alt="Twitter" className="w-5 h-5" />
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Message;
