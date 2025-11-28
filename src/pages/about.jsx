import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

export default function about() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' }
    ];

    return (
        <div>
            {/* <BasicBreadcrumbs items={breadcrumbItems} /> */}

            {/* Full-width Ribbon Header */}
            <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">About Us</h1>
                </div>
            </div>
           

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left side - Text content */}
                    <div className="md:w-2/3 space-y-6 text-gray-700 leading-relaxed">
                        <p>
                            Established on June 14, 2018, SRIYOG Consulting Pvt. Ltd., based in Kamalpokhari,
                            Kathmandu, Nepal, is a leading provider of digital solutions dedicated to driving
                            digital transformation in the healthcare, employment, and tourism sectors. Our mission
                            is to empower organizations in these vital industries with innovative, scalable, technology-driven
                            services that enhance operational efficiency and support long-term growth.
                        </p>

                        <p>
                            At SRIYOG Consulting, we believe that smart technology is key to addressing sector-specific challenges.
                            Our diverse IT services include data processing, software and web application development, digital
                            marketing, database management, business process automation, and expert IT consultancy—each tailored
                            to the unique needs of agriculture, employment platforms, and tourism operations.
                        </p>

                        <p>
                            By optimizing digital infrastructure, we help our clients streamline services, engage users effectively,
                            and scale sustainably. We specialize in crafting robust, user-friendly web solutions with a focus on
                            modern UI/UX design, full-stack development, and industry-specific platforms—whether for agritech,
                            job-matching portals, or tourism management systems.
                        </p>

                        <p>
                            Our offerings include e-commerce platforms, CMS, SaaS-based solutions, and Progressive Web Applications
                            (PWAs) designed for mobile-first experiences with offline functionality.
                        </p>

                        <p>
                            Our comprehensive IT services are tailored to the unique demands of healthcare, employment platforms,
                            and tourism operations.
                        </p>
                    </div>

                    {/* Right side - Images */}
                    <div className="md:w-1/3 space-y-6">
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img
                                src="/images/about/1.png"
                                alt="About SRIYOG 1"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}