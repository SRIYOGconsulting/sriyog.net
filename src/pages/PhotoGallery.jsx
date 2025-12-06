import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Ribbon from '../Components/Ribbon';

const PhotoGallery = ({album}) => {
    const location = useLocation();
    const {count,title} = location.state || {};
    const images = Array.from({ length: count }, (_, i) => ({
        id: i,
        count: i + 1,
}));
  return (
        <div>
            {/* Header */}
            <Ribbon name={title}/>
            <div className='max-w-7xl pl-4 mx-auto'>
                <Link to="/gallery">
                <button className='bg-teal-800 text-white px-6 rounded-md text-xl py-1'>Back</button>
                </Link>
            </div>
            {/* Gallery Grid */}
            <div className="px-5 py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {images.map((item,id)=>(
                        <div
                            key={item.id}
                            className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-80 w-full overflow-hidden"> {/*  Increased height */}
                                <img
                                    src="/images/gallery/1.jpg"
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-lg" // Image fully covers
                                />
                                {/* Photo Count Badge */}
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                                    <span className="text-sm font-semibold text-gray-700">{item.count}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default PhotoGallery