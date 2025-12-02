// import BasicBreadcrumbs from '../Components/BasicBreadcrumb';
import React from 'react';

export default function Certificate() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Certificates', path: '/certificates' }
    ];

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
            {/* <BasicBreadcrumbs items={breadcrumbItems} /> */}
            <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-12">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">Certificates</h1>
                </div>
            </div>
            <div className="px-5 py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={cert.img}
                                alt={cert.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-medium text-gray-800">{cert.title}</h2>
                                <p className="text-gray-500 text-sm mt-2">
                                    Short description about the certificate.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
