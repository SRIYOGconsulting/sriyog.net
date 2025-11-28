import React from 'react';

export default function Contact() {
    // Minimalistic team members
    const teamMembers = [
        { name: 'Alice Johnson', designation: 'CEO', img: '/images/contact/1.png', whatsapp: '+1234567890' },
        { name: 'Bob Smith', designation: 'CTO', img: '/images/contact/2.png', whatsapp: '+1234567891' },
        { name: 'Carol Lee', designation: 'CMO', img: '/images/contact/3.png', whatsapp: '+1234567892' },
    ];

    return (
        <div>
            {/* Full-width Ribbon Header */}
            <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">Contact</h1>
                </div>
            </div>

            <div className="px-6 py-12 max-w-5xl mx-auto font-sans">
                {/* Contact Details & Map */}
                <div className="flex flex-col md:flex-row gap-12 mb-16">
                    {/* Left: Contact Details */}
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-2xl font-medium">Get in Touch</h2>
                        <p className="">
                            We'd love to hear from you. Reach out to us via any of the following:
                        </p>
                        <div className="space-y-2 ">
                            <p><strong>Email:</strong> contact@company.com</p>
                            <p><strong>Phone:</strong> +123 456 7890</p>
                            <p><strong>Address:</strong> 123 Main Street, Kathmandu, Nepal</p>
                            <p><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>

                    {/* Right: Google Map */}
                    <div className="md:w-1/2 h-80 md:h-full rounded-lg overflow-hidden shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1234567890!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190123456789%3A0x1234567890abcdef!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1699999999999"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Team Members */}
                <h2 className="text-3xl font-medium mb-8 text-center">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="w-full max-w-xs text-center space-y-4"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-28 h-28 mx-auto rounded-full object-cover shadow-sm"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="">{member.designation}</p>
                            </div>
                            
                               <a href={`https://wa.me/${member.whatsapp.replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-5 py-2 text-sm  bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                            >
                                WhatsApp
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}