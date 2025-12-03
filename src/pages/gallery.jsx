import React from 'react';
import { FaCalendarAlt, FaImages } from 'react-icons/fa';

function Gallery() {
    // Using existing placeholder images from public folder
    const galleryItems = [
        { id: 1, image: '/images/gallery/1.jpg', title: 'Digital Solutions Launch', date: 'Jun 14, 2018', count: 10, description: 'Marking the beginning of SRIYOG Consulting Pvt. Ltd., empowering organizations with innovative IT solutions.' },
        { id: 2, image: '/images/gallery/2.jpg', title: 'Healthcare Digitization', date: 'Mar 05, 2019', count: 15, description: 'Implemented advanced digital infrastructure to streamline healthcare operations and improve patient experiences.' },
        { id: 3, image: '/images/gallery/3.jpg', title: 'Employment Platform ', date: 'Aug 12, 2019', count: 12, description: 'Developed robust and scalable job-matching platforms connecting employers and job seekers effectively.' },
        { id: 4, image: '/images/gallery/4.jpg', title: 'Tourism Management System', date: 'Feb 20, 2020', count: 8, description: 'Optimized tourism services with user-friendly digital solutions for enhanced visitor engagement.' },
        { id: 5, image: '/images/gallery/5.jpg', title: 'E-commerce Solutions', date: 'Jul 15, 2020', count: 20, description: 'Delivered scalable e-commerce platforms enabling businesses to expand their digital presence.' },
        { id: 6, image: '/images/gallery/6.jpg', title: 'Progressive Web Apps', date: 'Nov 03, 2020', count: 18, description: 'Created mobile-first PWAs with offline functionality for smooth user experiences.' },
        { id: 7, image: '/images/gallery/7.jpg', title: 'Business Process Automation', date: 'Mar 22, 2021', count: 14, description: 'Implemented automated workflows to increase operational efficiency and reduce costs.' },
        { id: 8, image: '/images/gallery/8.jpg', title: 'Digital Marketing Services', date: 'Aug 10, 2021', count: 22, description: 'Enhanced client presence through SEO, social media, and targeted digital campaigns.' },
        { id: 9, image: '/images/gallery/9.jpg', title: 'Database & Data Management', date: 'Jan 18, 2022', count: 16, description: 'Designed secure and scalable databases to manage critical business information efficiently.' },
        { id: 10, image: '/images/gallery/10.jpg', title: 'IT Consultancy', date: 'May 05, 2022', count: 19, description: 'Provided expert IT consultancy to guide organizations in implementing effective technology strategies.' },
        { id: 11, image: '/images/gallery/11.jpg', title: 'UI/UX Design Excellence', date: 'Sep 12, 2023', count: 11, description: 'Delivered modern, intuitive designs focused on enhancing user engagement and satisfaction.' },
        { id: 12, image: '/images/gallery/12.jpg', title: 'Global Client Impact', date: 'Dec 20, 2023', count: 13, description: 'Successfully served over 500 clients across 15 countries with tailored IT solutions.' },
    ];

     return (
        <div>
            {/* Header */}
            <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="px-5 py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-80 w-full overflow-hidden"> {/*  Increased height */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover" // Image fully covers
                                />
                                {/* Photo Count Badge */}
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                                    <FaImages className="text-teal-600 text-sm" />
                                    <span className="text-sm font-semibold text-gray-700">{item.count}</span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-4 card2 flex flex-col">
                                <h2 className="text-lg font-medium">{item.title}</h2>
                                <p className="text-gray-500 text-sm mt-1">{item.description}</p> {/*  Reduced gap */}
                                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1"> {/*  Tight spacing */}
                                    <FaCalendarAlt className="text-gray-400" />
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;