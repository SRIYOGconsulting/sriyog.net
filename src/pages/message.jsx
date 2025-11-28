import BasicBreadcrumbs from '../Components/BasicBreadcrumb';

export default function Message() {
    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Message', path: '/message' }
    ];

    return (
        <div>
            {/* <BasicBreadcrumbs items={breadcrumbItems} /> */}

            {/* Header */}
            <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-12">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold">Message</h1>
                </div>
            </div>

            {/* Main Section */}
            <div className="max-w-5xl mx-auto px-4 md:px-8 pb-20">

                {/* Title */}
                <h2 className="text-3xl font-bold text-teal-700 mb-6">
                    Message from The CTO
                </h2>

                {/* Card */}
                <div className="bg-white border rounded-xl shadow-md p-8 leading-relaxed text-gray-700">

                    {/* Optional Image (You can replace or remove it) */}
                    <div className="w-full flex justify-center mb-6">
                        <div className="w-40 h-40 rounded-full overflow-hidden shadow-md bg-gray-200">
                            <img
                                src="/images/message/1.png"
                                alt="CTO"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Message Content */}
                    <p className="mb-6">
                        Technology has been connecting everyone from one corner of the globe to another 
                        corner in the very fastest way. Businesses and almost all organisations need to 
                        have their proper digital presence and adapt technology in a very effective way. 
                        Their main motive should be to perform great in competition and stay ahead.
                    </p>

                    <p className="mb-6">
                        My journey into the realm of technology began over a decade ago when I founded 
                        my first IT startup in 2007 A.D. as <span className="font-semibold">PRACAS Infosys</span> 
                        in Biratnagar. Recognizing the potential of technology to bridge the digital divide 
                        and catalyze progress, I embarked on a mission to leverage digital solutions to 
                        address local challenges and foster economic development.
                    </p>

                    <p className="mb-6">
                        My vision was not merely to create successful businesses but to effect meaningful 
                        change in my community. I have contributed to more than 500 clients across 
                        15 countries, helping them develop websites, optimize search visibility, build 
                        mobile applications, manage social media, strengthen digital presence, implement 
                        corporate email solutions, and offer dedicated IT consulting services.
                    </p>

                    <p className="mb-6">
                        Having good Information Technology practices can grow businesses faster, enhance 
                        digital presence, save expensive man hours, optimize workforce, manage data privacy, 
                        and protect the reputation of any organisation from forthcoming digital disasters 
                        like data loss, hacking, identity theft, ransomware attacks, and other unforeseen 
                        issues which we may face anytime.
                    </p>

                    {/* Signature */}
                    <div className="mt-10">
                        <p className="font-bold text-gray-800 text-lg">PRACAS Upreti</p>
                        <p className="text-gray-500 text-sm">Chief Technology Officer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
