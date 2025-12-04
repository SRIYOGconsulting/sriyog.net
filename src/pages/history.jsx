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
                    <h2 className="text-2xl font-bold  mb-4">Our Beginning</h2>
                    <p className="card2 leading-relaxed">
                        SRIYOG Consulting Pvt. Ltd. began its journey with a mission to bring advanced digital
                        transformation to industries that needed it the most. What started as a small initiative
                        has now grown into a trusted technology partner for organizations across healthcare,
                        employment, and tourism.
                    </p>

                    <div className="mt-6 rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/images/history/2.jpg"
                            alt="History Beginning"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Evolution Section */}
                <section>
                    <h2 className="text-2xl font-bold  mb-4">Evolution Over the Years</h2>
                    <p className="card2 leading-relaxed">
                        Over the years, our company evolved by adopting modern technologies, expanding our 
                        team, and building systems that support thousands of users. Continuous learning,
                        innovation, and adaptability have shaped our growth and helped us stay ahead of
                        technological advancements.
                    </p>

                    {/* Two Card Format */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                        {/* Card 1 */}
                        <div className="bg-white p-6 shadow rounded-xl border hover:shadow-md transition">
                            <img
                                src="/images/history/1.png"  // placeholder
                                alt=" Placeholder"
                                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                            />

                            <h3 className="text-xl font-semibold text-center text-teal-700">
                                Full Name
                            </h3>
                            <p className="text-center text-gray-600 text-sm">
                                Designation
                            </p>
                            <p className="mt-3 text-gray-700 text-center text-sm leading-relaxed">
                                Short placeholder message about this individual’s contribution
                                or involvement in the company’s evolution.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 shadow rounded-xl border hover:shadow-md transition">
                            <img
                                src="/images/history/2.png"  //  placeholder
                                alt=" Placeholder"
                                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                            />

                            <h3 className="text-xl font-semibold text-center text-teal-700">
                                Full Name
                            </h3>
                            <p className="text-center text-gray-600 text-sm">
                                Designation
                            </p>
                            <p className="mt-3 text-gray-700 text-center text-sm leading-relaxed">
                                Short placeholder message describing contributions, leadership,
                                or role in the company’s development.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Milestones */}
                <section>
                    <h2 className="text-2xl font-bold card2 mb-4">Key Milestones</h2>

                    <div className="space-y-6">

                        <div className="p-6 card  border rounded-xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold ">2018 – Company Established</h3>
                            <p className=" mt-2 card2">
                                Official registration and initial establishment of the company.
                            </p>
                        </div>

                        <div className="p-6 card border rounded-xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold ">2020 – Service Expansion</h3>
                            <p className="card2 mt-2">
                                Introduced more services including IT consulting, digital marketing, and automation.
                            </p>
                        </div>

                        <div className="p-6 card border rounded-xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold ">2022 – Major Platform Launch</h3>
                            <p className="card2 mt-2">
                                Developed and deployed large-scale platforms for employment and agriculture sectors.
                            </p>
                        </div>

                        <div className="p-6 card border rounded-xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold ">2024 – Modernization & Innovation</h3>
                            <p className="card2 mt-2">
                                Adopted cloud infrastructure, smart automation, AI integration, and modern UI/UX design.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Closing Section */}
                <section className="pb-12">
                    <h2 className="text-2xl font-bold  mb-4">Our Journey Continues</h2>
                    <p className="card2 leading-relaxed">
                        With each passing year, SRIYOG Consulting grows stronger and more dedicated to delivering
                        high-quality digital experiences. Our history reflects our commitment to innovation,
                        service excellence, and building solutions that make a real difference.
                    </p>
                </section>

            </div>
        </div>
    );
}
