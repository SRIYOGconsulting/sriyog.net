import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Ribbon from '../Components/Ribbon';
import { services } from '../data/ServicesData';

const ServicePage = () => {
    const location = useLocation();

    // Ensure index is always valid
    const index = location.state?.index;

    const service = services[index];
    const otherServices = services.filter((_, i) => i !== index);


    const relatedServices = otherServices
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

    // Stop crash if no service found
    if (!service) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold text-red-600">Service not found</h2>
                <p className="text-gray-600 mt-2">Please go back and select a valid service.</p>
            </div>
        );
    }

    return (
        <div>
            <Ribbon name={service.title} />
            <div className="max-w-7xl mx-auto px-4 py-10">
                {/* Display content here */}
                <div className='max-w-4xl mx-auto h-64'>
                   <img src={service.image} alt=""  className='h-full w-full'/>
                </div>
                <p className='py-8'>{service.Desc}</p>

                <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Related Services</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedServices.map((item, i) => (
                        <div key={i} className="p-5 border rounded-lg shadow hover:shadow-lg hover:scale-[1.02] transition-all">
                            <img src={item.image} className='w-full h-52 py-9' alt="" />
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                {item.description}
                            </p>
                            <Link to="/services/servicepage" state={{index : services.indexOf(item)}}>
                            <button 
                                className="text-[#074842] hover:underline font-medium"
                            >
                                View Service →
                            </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}

export default ServicePage;
