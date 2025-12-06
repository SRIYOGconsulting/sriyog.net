import BasicBreadcrumbs from '../Components/BasicBreadcrumb';
import Ribbon from '../Components/Ribbon';

export default function Services() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' }
    ];

    
    const servicesList = [
        {
            title: "Data Processing",
            desc: "We have a proven track record of delivering high-quality data analysis and reporting solutions that meet the needs of our clients.",
            image: "/images/services/1.svg"
        },
        {
            title: "Database Management",
            desc: "We offer a range of database management services, including database design, implementation, and optimization.",
            image: "/images/services/2.svg"
        },
        {
            title: "Data Analysis",
            desc: "Our team of experienced data analysts can help you extract insights from your data and make data-driven decisions.",
            image: "/images/services/3.svg"
        },
        {
            title: "Software Development",
            desc: "We offer a range of software development services, including coding, testing, and debugging.",
            image: "/images/services/4.svg"
        },
        {
            title: "Web Application Development",
            desc: "We offer a range of web application development services, including design, development, and deployment.",
            image: "/images/services/5.svg"
        },
        {
            title: "Payment Processing",
            desc: "Our team of experienced developers can help you build high-quality payment processing solutions that meet your business needs.",
            image: "/images/services/6.svg"
        },
        {
            title: "Survey Form Development",
            desc: "We offer a range of survey form development services, including survey creation, data collection, and analysis.",
            image: "/images/services/7.svg"
        },
        {
            title: "Digital Marketing",
            desc: "We offer a range of digital marketing services, including SEO, social media management, and content creation.",
            image: "/images/services/8.svg"
        },
        {
            title: "SEO/SEM Services",
            desc: "Our team of experienced SEO experts can help you improve your website's visibility and drive more traffic to your site.",
            image: "/images/services/9.svg"
        },
        {
            title: "Social Media Management",
            desc: "Our team of experienced marketers can help you build high-quality social media campaigns that drive traffic and engagement.",
            image: "/images/services/10.svg"
        },
        {
            title: "Business eMail",
            desc: "Our team of experienced marketers can help you build high-quality Business eMail campaigns that drive traffic and engagement.",
            image: "/images/services/11.svg"
        },
        {
            title: "Human Resource Management",
            desc: "We offer a range of human resource management services, including recruitment, onboarding, and performance management.",
            image: "/images/services/12.svg"
        },
        {
            title: "IT Consultancy Management",
            desc: "We offer a range of IT consultancy services, including system design, implementation, and support.",
            image: "/images/services/13.svg"
        },
        {
            title: "UI/UX Designing",
            desc: "We offer a range of UI/ UX designing services, including wireframing, prototyping, and user testing.",
            image: "/images/services/14.svg"
        },
        {
            title: "Content/ Email Marketing",
            desc: "We offer a range of video / email / content marketing services, including video creation, email marketing, and content creation.",
            image: "/images/services/15.svg"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <Ribbon name="Services"/>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white border space-y-6 sm:space-y-4 border-gray-400 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-9 flex flex-col "
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-28 h-28 object-contain"
                                />
                            </div>
                            {/* Title */}
                            <h3 className="text-xl text-gray-700 py-1 sm:py-0 mb-4 text-center">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-l py-1 sm:py-0 leading-relaxed mb-4 flex-grow text-justify">
                                {service.desc}
                            </p>

                            {/* Read More Button */}
                            <div className="flex  py-1 sm:py-0 justify-center">
                                <button className="px-6 py-2.5 border-2 border-teal-700 text-teal-700 rounded-md hover:bg-teal-700 hover:text-white transition-all duration-300 font-medium text-sm">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}