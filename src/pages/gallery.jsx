import React from 'react';
import { FaCalendarAlt, FaImages } from 'react-icons/fa';

export default function Gallery() {
    // Generate 12 gallery items
    const galleryItems = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        image: `/images/gallery/${i + 1}.jpg`,
        title: `Gallery Event ${i + 1}`,
        date: 'Oct 24, 2023',
        count: Math.floor(Math.random() * 20) + 5
    }));

    return (
        <div>
            {/* Full-width Ribbon Header */}
            <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="group card border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:border-teal-500 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/400x300?text=Gallery+Image';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Photo Count Badge */}
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                                    <FaImages className="text-teal-600 text-sm" />
                                    <span className="text-sm font-semibold text-gray-700">{item.count}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 card2">
                                <h3 className="font-bold text-xl  mb-2 group-hover:text-teal-700 transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
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