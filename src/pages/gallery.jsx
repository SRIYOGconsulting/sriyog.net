import React from 'react';
import { FaCalendarAlt, FaImages } from 'react-icons/fa';

export default function Gallery() {
    // Generate 12 gallery items
    const galleryItems = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        image: `/images/gallery/${i + 1}.jpg`,
        title: `Gallery Event ${i + 1}`,
        date: 'Oct 24, 2023', // Placeholder date
        count: Math.floor(Math.random() * 20) + 5 // Random count between 5 and 24
    }));

    return (
        <div className="min-h-screen font-sans ">
            <div className="container mx-auto px-4 py-16 max-w-6xl">
                <div className="text-center mb-16">
                   <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                </div>
            </div>
                    <p className="text-lg  max-w-2xl mx-auto">
                        Explore our collection of memories and events.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="card border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-lg  mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <div className="flex items-center space-x-1">
                                        <FaCalendarAlt className="text-gray-400" />
                                        <span>{item.date}</span>
                                    </div>
                                    <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full">
                                        <FaImages className="text-gray-400" />
                                        <span>{item.count} Photos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}