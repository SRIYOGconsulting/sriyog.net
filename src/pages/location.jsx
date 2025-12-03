import React from "react";

export default function Location() {
  return (
    <div>
      {/* Header / Ribbon */}
      <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold">Location</h1>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mb-12">
        <div className="w-full h-96 md:h-[600px] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1234567890!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190123456789%3A0x1234567890abcdef!2sKamalpokhari%2C%20Kathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1699999999999"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SRIYOG Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
