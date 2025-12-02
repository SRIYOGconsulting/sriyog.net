import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Services Page";

export default function Services() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' }
    ];

    const servicesList = [
        {
            title: "Web Development",
            desc: "Modern, responsive and high-performance websites tailored to your business needs.",
            image: "/images/services/1.svg"
        },
        {
            title: "Mobile App Development",
            desc: "User-friendly and scalable mobile apps for Android and iOS platforms.",
            image: "/images/services/2.svg"
        },
        {
            title: "Digital Marketing",
            desc: "SEO, social media management, and marketing campaigns that grow your brand.",
            image: "/images/services/3.svg"
        },
        {
            title: "IT Consulting",
            desc: "Expert guidance to help you make smarter technology decisions.",
            image: "/images/services/4.svg"
        },
        {
            title: "Cloud & Hosting Solutions",
            desc: "Secure and reliable cloud hosting, email servers, and backup systems.",
            image: "/images/services/5.svg"
        },
        {
            title: "Cybersecurity",
            desc: "Protect your digital assets from data loss, hacking, and cyber threats.",
            image: "/images/services/6.svg"
        }
    ];

    return (
        <div className="footer">
            {/* <BasicBreadcrumbs items={breadcrumbItems} /> */}

           <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-12">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">Our Services</h1>

              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            className="group card border-2 rounded-2xl shadow-sm hover:shadow-2xl  transition-all duration-300 p-8 transform hover:-translate-y-2"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="w-24 h-24  rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="w-14 h-14 object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3   transition-colors">
                                {service.title}
                            </h3>
                            <p className=" leading-relaxed">
                                {service.desc}
                            </p>
                            <div className="mt-6 flex items-center  font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Learn more</span>
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}