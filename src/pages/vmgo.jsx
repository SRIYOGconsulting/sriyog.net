import BasicBreadcrumbs from '../Components/BasicBreadcrumb';
// Icons are now loaded from the public folder

export default function Vmgo() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'VMGO', path: '/vmgo' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Ribbon Header */}
      <div className="bg-teal-800 text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold">Vision, Mission, Goals and Objectives</h1>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <BasicBreadcrumbs items={breadcrumbItems} />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Vision Section */}
        <section id="vision" className="mb-12 bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="bg-teal-100 p-2 rounded-full mr-4 w-10 h-10 flex items-center justify-center">
              <img src="/icons/lightbulb.svg" alt="" className="w-6 h-6 text-teal-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Vision</h2>
          </div>
          <div className="pl-16">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our vision is to create a future where every individual has access to opportunities that match their skills and aspirations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We envision a world where people can easily connect with skilled professionals through a transparent and efficient platform.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="mb-12 bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="bg-teal-100 p-2 rounded-full mr-4 w-10 h-10 flex items-center justify-center">
              <img src="/icons/flag.svg" alt="" className="w-6 h-6 text-teal-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Mission</h2>
          </div>
          <div className="pl-16">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to revolutionize the way work is connected with workers by providing a seamless platform that empowers individuals and businesses to find the perfect match for their needs.
            </p>
          </div>
        </section>

        {/* Goals Section */}
        <section id="goals" className="mb-12 bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="bg-teal-100 p-2 rounded-full mr-4 w-10 h-10 flex items-center justify-center">
              <img src="/icons/rocket.svg" alt="" className="w-6 h-6 text-teal-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Our Goals</h2>
          </div>
          <div className="pl-16 space-y-4">
            {[
              "Enable transparent and efficient interactions between professionals and businesses through our platform's tools and features.",
              "Ensure trust through robust verification processes and accurate listings for all users.",
              "Provide equal access to opportunities for professionals from all backgrounds.",
              "Continuously enhance our platform with new technologies to deliver the best user experience."
            ].map((goal, index) => (
              <div key={index} className="flex items-start">
                <img src="/icons/circle.svg" alt="" className="w-2 h-2 text-teal-500 mt-3 mr-3 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Objectives Section */}
        <section id="objectives" className="mb-12 bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="bg-teal-100 p-2 rounded-full mr-4 w-10 h-10 flex items-center justify-center">
              <img src="/icons/bullseye.svg" alt="" className="w-6 h-6 text-teal-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Objectives</h2>
          </div>
          <div className="pl-16 space-y-4">
            {[
              "Expand our reach to new markets and demographics",
              "Enhance user experience through continuous platform improvements",
              "Foster a strong community of professionals and businesses",
              "Maintain high standards of security and privacy"
            ].map((objective, index) => (
              <div key={index} className="flex items-start">
                <img src="/icons/circle.svg" alt="" className="w-2 h-2 text-teal-500 mt-3 mr-3 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{objective}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}