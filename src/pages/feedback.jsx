// import BasicBreadcrumbs from '../Components/BasicBreadcrumb';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
export default function Feedback() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Feedback', path: '/feedback' }
    ];
    const [captchaToken, setCaptchaToken] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
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
            <div className="bg-teal-800 text-white py-10 px-4 md:px-8 mb-10">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold">Feedback</h1>
                </div>
            </div>

            {/* FORM SECTION */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-0 py-10 max-w-3xl mx-auto font-sans">

                <p className="text-center text-gray-700 mb-10 px-2">
                    Please share your experience with our services. Your feedback helps us improve.
                </p>

                <form 
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-200"
                >

                    {/* Name */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 font-medium">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 font-medium">Email</label>
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

                    {/* Service */}
                    <div className="flex flex-col">
                        <label htmlFor="service" className="mb-2 font-medium">Service</label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none"
                        >
                            <option value="">Select a service</option>
                            <option value="Website Development">Website Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Social Media Marketing">Social Media Marketing</option>
                            <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                            <option value="IT Consultation">IT Consultation</option>
                        </select>
                    </div>

                    {/* Feedback Message */}
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2 font-medium">Feedback</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your feedback here..."
                            rows={5}
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-700 focus:outline-none resize-none"
                        ></textarea>
                    </div>
                    <div className='flex items-center justify-center'>
                    <ReCAPTCHA 
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
                    onChange={(token) => setCaptchaToken(token)}
                    />
                    </div>
                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition-all w-full sm:w-auto"
                        >
                            Submit Feedback
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
