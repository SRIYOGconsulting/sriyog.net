import { FaLightbulb, FaFlag, FaLink, FaEye, FaHandshake, FaRocket, FaBullseye, FaDotCircle } from 'react-icons/fa';

export default function Vmgo() {
  return (
    <div className="min-h-screen bg-[var(--bg)] font">
      {/* Hero Section */}
      <div className="bg-[var(--header)] py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)]">Vision, Mission, Goals and Objectives</h1>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-[var(--header)] shadow-sm border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            {['Vision', 'Mission', 'Goals', 'Objectives'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-6 py-3 text-sm font-medium text-[var(--text)] hover:text-[var(--text)] border-b-2 border-transparent hover:border-[var(--text)] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Vision Section */}
        <section id="vision" className="mb-16">
          <div className="card rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4 flex items-center">
              <FaLightbulb className="text-[var(--text)] mr-2" />
              Vision
            </h2>
            <div className="prose">
              <p className="mb-4">
                Our vision is to create a future where every individual has access to opportunities that match their skills and aspirations.
              </p>
              <p>
                We envision a world where people can easily connect with skilled professionals through a transparent and efficient platform.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="mb-16">
          <div className="card rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4 flex items-center">
              <FaFlag className="text-[var(--text)] mr-2" />
              Mission
            </h2>
            <p>
              Our mission is to revolutionize the way work is connected with workers by providing a seamless platform that empowers individuals and businesses to find the perfect match for their needs.
            </p>
          </div>
        </section>

        {/* Goals Section */}
        <section id="goals" className="mb-16">
          <div className="card rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4 flex items-center">
              <FaRocket className="text-[var(--text)] mr-2" />
              Our Goals
            </h2>
            <div className="space-y-4">
              {[
                "Enable transparent and efficient interactions between professionals and businesses through our platform's tools and features.",
                "Ensure trust through robust verification processes and accurate listings for all users.",
                "Provide equal access to opportunities for professionals from all backgrounds.",
                "Continuously enhance our platform with new technologies to deliver the best user experience."
              ].map((goal, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[var(--header)] p-1 rounded-full text-[var(--text)] mr-3 mt-1">
                    <FaDotCircle className="text-xs" />
                  </div>
                  <p className="text-[var(--text)]">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section id="objectives" className="mb-16">
          <div className="card rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4 flex items-center">
              <FaBullseye className="text-[var(--text)] mr-2" />
              Objectives
            </h2>
            <div className="space-y-4">
              {[
                "Expand our reach to new markets and demographics",
                "Enhance user experience through continuous platform improvements",
                "Foster a strong community of professionals and businesses",
                "Maintain high standards of security and privacy"
              ].map((objective, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[var(--header)] p-1 rounded-full text-[var(--text)] mr-3 mt-1">
                    <FaDotCircle className="text-xs" />
                  </div>
                  <p className="text-[var(--text)]">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}