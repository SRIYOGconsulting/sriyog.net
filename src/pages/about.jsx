import BasicBreadcrumbs from '../Components/BasicBreadcrumb';
import ClapButton from '../Components/ClapButton';
import FontSizeChanger from '../Components/FontSizeChanger';

export default function About() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' }
    ];

    return (
        <div className='about'>
            {/* Full-width Ribbon Header */}
            <div className="bg-teal-800 text-white py-8 md:py-12 px-4 md:px-8 mb-6 md:mb-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    {/* Mobile: Stack vertically, Desktop: Side by side */}
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
                        {/* Hide on mobile, show on tablet+ */}
                        <div className="hidden md:block">
                            <FontSizeChanger />
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
                {/* Font Size Changer for Mobile - Show only on mobile */}
                <div className="md:hidden mb-6 flex justify-center">
                    <FontSizeChanger />
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                     {/* Image on mobile - inserted here for better reading flow */}
                        <div className="md:hidden overflow-hidden">
                            <img
                                src="/images/about/1.png"
                                alt="About SRIYOG 1"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    {/* Left side - Text content */}
                    <div className="md:w-2/3 space-y-4 md:space-y-6 leading-relaxed ">
                        <p className="content-text text-sm md:text-base">
                            Established on June 14, 2018, SRIYOG Consulting Pvt. Ltd., based in Kamalpokhari,
                            Kathmandu, Nepal, is a leading provider of digital solutions dedicated to driving
                            digital transformation in the healthcare, employment, and tourism sectors. Our mission
                            is to empower organizations in these vital industries with innovative, scalable, technology-driven
                            services that enhance operational efficiency and support long-term growth.
                        </p>

                        <p className="content-text text-sm md:text-base">
                            At SRIYOG Consulting, we believe that smart technology is key to addressing sector-specific challenges.
                            Our diverse IT services include data processing, software and web application development, digital
                            marketing, database management, business process automation, and expert IT consultancy—each tailored
                            to the unique needs of agriculture, employment platforms, and tourism operations.
                        </p>

                       

                        <p className="content-text text-sm md:text-base">
                            By optimizing digital infrastructure, we help our clients streamline services, engage users effectively,
                            and scale sustainably. We specialize in crafting robust, user-friendly web solutions with a focus on
                            modern UI/UX design, full-stack development, and industry-specific platforms—whether for agritech,
                            job-matching portals, or tourism management systems.
                        </p>

                        <p className="content-text text-sm md:text-base">
                            Our offerings include e-commerce platforms, CMS, SaaS-based solutions, and Progressive Web Applications
                            (PWAs) designed for mobile-first experiences with offline functionality.
                        </p>

                        <p className="content-text text-sm md:text-base">
                            Our comprehensive IT services are tailored to the unique demands of healthcare, employment platforms,
                            and tourism operations.
                        </p>
                    </div>

                    {/* Right side - Images (Desktop only) */}
                    <div className="hidden md:block md:w-1/3 space-y-6">
                        <div className="overflow-hidden">
                            <img
                                src="/images/about/1.png"
                                alt="About SRIYOG 1"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Clap Button with better mobile spacing - aligned left */}
                <div className="mt-6 md:mt-8 flex justify-start">
                    <ClapButton/>
                </div>
            </div>
        </div>
    );
}