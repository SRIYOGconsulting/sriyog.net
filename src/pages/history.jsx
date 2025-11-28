import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

export default function History() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'History', path: '/history' }
    ];

    return (
        <div>
            {/* <BasicBreadcrumbs items={breadcrumbItems} /> */}

            {/* Header */}
            <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-12">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">History</h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16">

                {/* Introduction Section */}
                <section>
                    <h2 className="text-2xl font-bold text-teal-700 mb-4">Our Beginning</h2>
                    <p className="text-gray-700 leading-relaxed">
                        SRIYOG Consulting Pvt. Ltd. began its journey with a mission to bring advanced digital
                        transformation to industries that needed it the most. What started as a small initiative
                        has now grown into a trusted technology partner for organizations across healthcare,
                        employment, and tourism.
                    </p>

                    <div className="mt-6 rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/images/history/1.jpg"
                            alt="History Image 1"
                            className="w-full h-72 object-cover"
                        />
                    </div>
                </section>

                {/* Evolution Section */}
                <section>
                    <h2 className="text-2xl font-bold text-teal-700 mb-4">Evolution Over the Years</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Over the years, our company evolved by adopting modern technologies, expanding our 
                        team, and building systems that support thousands of users. Continuous learning,
                        innovation, and adaptability have shaped our growth and helped us stay ahead of
                        technological advancements.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img
                                src="/images/history/2.png"
                                alt="History Image 2"
                                className="w-full h-56 object-contain"
                            />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img
                                src="/images/history/1.png"
                                alt="History Image 3"
                                className="w-full h-56 object-contain"
                            />
                        </div>
                    </div>
                </section>

                {/* Milestones */}
                <section>
                    <h2 className="text-2xl font-bold text-teal-700 mb-4">Key Milestones</h2>

                    <div className="space-y-6">

                        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold text-teal-700">2018 – Company Established</h3>
                            <p className="text-gray-600 mt-2">
                                Official registration and initial establishment of the company.
                            </p>
                        </div>

                        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold text-teal-700">2020 – Service Expansion</h3>
                            <p className="text-gray-600 mt-2">
                                Introduced more services including IT consulting, digital marketing, and automation.
                            </p>
                        </div>

                        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold text-teal-700">2022 – Major Platform Launch</h3>
                            <p className="text-gray-600 mt-2">
                                Developed and deployed large-scale platforms for employment and agriculture sectors.
                            </p>
                        </div>

                        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold text-teal-700">2024 – Modernization & Innovation</h3>
                            <p className="text-gray-600 mt-2">
                                Adopted cloud infrastructure, smart automation, AI integration, and modern UI/UX design.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Closing Section */}
                <section className="pb-12">
                    <h2 className="text-2xl font-bold text-teal-700 mb-4">Our Journey Continues</h2>
                    <p className="text-gray-700 leading-relaxed">
                        With each passing year, SRIYOG Consulting grows stronger and more dedicated to delivering
                        high-quality digital experiences. Our history reflects our commitment to innovation,
                        service excellence, and building solutions that make a real difference.
                    </p>
                </section>

            </div>

        </div>
    );
}
