import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

const pageName = "This is Services Page";

export default function services() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' }
    ];

    const servicesList = [
        {
            title: "Web Development",
            desc: "Modern, responsive and high-performance websites tailored to your business needs.",
            
        },
        {
            title: "Mobile App Development",
            desc: "User-friendly and scalable mobile apps for Android and iOS platforms.",
           
        },
        {
            title: "Digital Marketing",
            desc: "SEO, social media management, and marketing campaigns that grow your brand.",
            
        },
        {
            title: "IT Consulting",
            desc: "Expert guidance to help you make smarter technology decisions.",
            
        },
        {
            title: "Cloud & Hosting Solutions",
            desc: "Secure and reliable cloud hosting, email servers, and backup systems.",
            
        },
        {
            title: "Cybersecurity",
            desc: "Protect your digital assets from data loss, hacking, and cyber threats.",
            
        }
    ];

    return (
        <div>
            {/* <BasicBreadcrumbs items={breadcrumbItems} /> */}

            <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-12">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">Our Services</h1>
                    <p className="text-lg mt-2 opacity-90">
                        What we provide to help your business grow and stay ahead.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            className="card border rounded-xl shadow-md p-6 hover:shadow-lg transition duration-200"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                            <p className=" leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
