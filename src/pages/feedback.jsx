// import BasicBreadcrumbs from '../Components/BasicBreadcrumb';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Ribbon from '../Components/Ribbon';
export default function Feedback() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Feedback', path: '/feedback' }
    ];
    const [captchaToken, setCaptchaToken] = useState(null);
    const [formData, setFormData] = useState({
        firstname: '',
        middlename: '',
        lastname: '',
        organization: '',
        designation: '',
        phone:'',
        email: '',
        country: '',
        headshot: null,
        service: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaToken) {
            alert("Please verify you're not a robot!");
            return;
        }
        alert(`Captcha token received: ${captchaToken}`);
        console.log('Feedback submitted:', formData);
        alert('Thank you for your feedback!');
        setFormData({ name: '', email: '', service: '', message: '' });
    };

    return (
        <div className="w-full">
            {/* Full-width Ribbon Header */}
            <Ribbon name="Feedback"/>

            {/* FORM SECTION */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-0 pt-8 pb-12 max-w-6xl mx-auto font-sans">

                <p className="text-center  mb-10 px-2">
                    Please share your experience with our services. Your feedback helps us improve.
                </p>

                <form 
                    onSubmit={handleSubmit}
                    className=" space-y-6 md:space-y-0 md:grid sm:grid-cols-2 gap-4 footer p-6 sm:p-8 rounded-xl shadow shadow-gray-700 border-gray-200"
                >

                    {/* Name */}
                    <div className="flex flex-col">
                        <label  className="mb-2 font-medium">First Name *</label>
                        <input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            placeholder="Your First Name"
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                        />
                    </div>
                    
                    {/* Middle Name */}
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">Middle Name *</label>
                        <input
                            type="text"
                            name="middlename"
                            value={formData.middlename}
                            onChange={handleChange}
                            placeholder="Your Middle Name"
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                        />
                    </div>


                    {/* Last Name */}
                     <div className="flex flex-col">
                        <label  className="mb-2 font-medium">Last Name *</label>
                        <input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            placeholder="Your Last Name"
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                        />
                    </div>

                    {/* Country */}
                     <div className="flex flex-col">
                        <label  className="mb-2 font-medium">Country *</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Your Last Name"
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                        />
                    </div>


                    {/* Organization */}
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">Organization *</label>
                        <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="Organization Name"
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                        />
                    </div>

                     {/* Designation */}
                     <div className="flex flex-col">
                        <label  className="mb-2 font-medium">Designation *</label>
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            placeholder="Organization Name"
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                        />
                    </div>
                    

                     {/* Phone */}
                     <div className="flex flex-col">
                        <label className="mb-2 font-medium">Phone *</label>
                        <input
                            type="text"
                            inputMode='Number'
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone Number"
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label  className="mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                        />
                    </div>
                     {/* Headshot */}
                     <div className="flex flex-col">
                        <label  className="mb-2 font-medium">Headshot *</label>
                        <input
                            type="file"
                            name="headshot"
                            onChange={(e)=>setFormData({...formData,headshot: e.target.files[0]})}
                            required
                            className="px-4 h-[50px] pt-2 bg-white rounded-md focus:ring-2
                                       file:border-none text-gray-700 file:mr-3 file:py-1 file:rounded-md file:shadow-md file:cursor-pointer file:bg-red-50
                                     file:text-red-600 border border-gray-300 file:hover:bg-red-100  focus:ring-teal-700 focus:outline-none"
                        />
                    </div>
                    {/* Service */}
                    <div className="flex flex-col ">
                        <label htmlFor="service" className="mb-2 font-medium">Service</label>
                        <div className='relative h-[48px]'>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="absolute inset-0 appearance-none w-full px-4 py-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                        >
                            <option value="">Select a service</option>
                            <option value="Website Development">Website Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Social Media Marketing">Social Media Marketing</option>
                            <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                            <option value="IT Consultation">IT Consultation</option>
                        </select>
                        <span
                         className='absolute right-5 pointer-events-none translate-y-1/2 top-1 cursor-pointer'>
                            <svg  fill="#4b4b4b" width="20px" height="20px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#4b4b4b">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                <g id="SVGRepo_iconCarrier"> <title>dropdown</title> <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"/> </g>
                            </svg>
                        </span>
                        </div>
                    </div>

                    {/* Feedback Message */}
                    <div className="flex flex-col col-span-2">
                        <label htmlFor="message" className="mb-2 font-medium">Feedback</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your feedback here..."
                            rows={5}
                            required
                            className="px-4 py-3 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none resize-none"
                        ></textarea>
                    </div>
                    <div className='flex items-center justify-center col-span-2 scale-75'>
                        <ReCAPTCHA
                        sitekey="6LfeSyUsAAAAAHUNk-NbZKDKe6YqXU5WJxh9iscC"
                        onChange={(token) => setCaptchaToken(token)}
                        size="normal"          // <-- change size here
                        badge = "inline"
                    
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="flex items-center justify-center col-span-2">
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 transition-all  sm:w-auto"
                        >
                            Submit Feedback
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
