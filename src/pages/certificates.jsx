// import BasicBreadcrumbs from '../Components/BasicBreadcrumb';
import React, { useState } from 'react';
import Ribbon from '../Components/Ribbon';

export default function Certificate() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Certificates', path: '/certificates' }
    ];
    const [lightbox,openLightbox] = useState(false);
    const [index,setIndex] = useState(null);
    // Updated certificate data with new image paths
    const certificates = [
        { title: 'Certificate 1', img: '/images/certificates/1.jpg' },
        { title: 'Certificate 2', img: '/images/certificates/2.jpg' },
        { title: 'Certificate 3', img: '/images/certificates/3.jpg' },
        { title: 'Certificate 4', img: '/images/certificates/4.jpg' },
        { title: 'Certificate 5', img: '/images/certificates/5.jpg' },
        { title: 'Certificate 6', img: '/images/certificates/6.jpg' },
        { title: 'Certificate 7', img: '/images/certificates/7.jpg' },
        { title: 'Certificate 8', img: '/images/certificates/8.jpg' },
        { title: 'Certificate 9', img: '/images/certificates/9.jpg' },
    ];

    return (
        <div >
            {/* Header */}
            <Ribbon name="Certificates"/>
            <div className="px-5 py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={cert.img}
                                alt={cert.title}
                                onClick={()=>{openLightbox(true);setIndex(index)}}
                                className="w-full h-56 object-cover"
                            />
                            <div className="px-4 py-5 card2">
                                <h2 className="text-lg font-medium ">{cert.title}</h2>
                                <p className="text-gray-500 text-sm mt-2">
                                    Short description about the certificate.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {lightbox && (
            <div
                className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center"
                onClick={() => openLightbox(false)}
            >
                <button className='absolute top-5 right-5 text-2xl rounded-full w-10 h-10 bg-white'>X</button>
                <img
                src={certificates[index].img}
                alt=""
                className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
                />
            </div>
            )}
        </div>
    );
}
