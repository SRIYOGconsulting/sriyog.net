import React from "react";
import FontSizeChanger from '../Components/FontSizeChanger';

const appData = {
  organizationName: "Sriyog Consulting",
  municipality: "Kathmandu",
  wardno: 5,
  address1: "Street 123",
  address2: "Area XYZ",
  city: "Kathmandu",
  established: 2010,
};

const teamMembers = [
  { id: 1, name: "Team Member 1", role: "Role 1", image: "/images/team/1.png" },
  { id: 2, name: "Team Member 2", role: "Role 2", image: "/images/team/2.png" },
  { id: 3, name: "Team Member 3", role: "Role 3", image: "/images/team/3.png" },
  { id: 4, name: "Team Member 4", role: "Role 4", image: "/images/team/4.png" },
  { id: 5, name: "Team Member 5", role: "Role 5", image: "/images/team/5.png" },
  { id: 6, name: "Team Member 6", role: "Role 6", image: "/images/team/6.png" },
  { id: 7, name: "Team Member 7", role: "Role 7", image: "/images/team/7.png" },
  { id: 8, name: "Team Member 8", role: "Role 8", image: "/images/team/8.png" },
  { id: 9, name: "Team Member 9", role: "Role 9", image: "/images/team/9.png" },
];

const OurTeam = () => {
  return (
    <div>
      {/* Full-width Ribbon Header */}
      <div className="bg-teal-800 text-white py-8 md:py-12 px-4 md:px-8 mb-6 md:mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Mobile: Stack vertically, Desktop: Side by side */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-bold">Our Team</h1>
            {/* Hide on mobile, show on tablet+ */}
            <div className="hidden md:block">
              <FontSizeChanger />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Font Size Changer for Mobile - Show only on mobile */}
        <div className="md:hidden mb-6 flex justify-center">
          <FontSizeChanger />
        </div>

        {/* President Section */}
        <div className="rounded-lg mb-8 md:mb-10 border border-gray-300 bg-gray-50 p-4 sm:p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* President Image */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/3">
              <img
                src="/images/team/pracas.png"
                alt="President"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full mb-3 md:mb-4 object-cover shadow-lg"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
                Full Name
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center">
                C.T.O
              </p>
            </div>

            {/* About Section */}
            <div className="flex-1 text-justify">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-center md:text-left">
                About PRACAS
              </h1>
              <p className="content-text text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg">
                Pracas Upreti's journey from a startup founder to a
                technology-driven change-maker in Biratnagar, Nepal, exemplifies
                the profound impact that individuals can have when they combine
                innovation with a commitment to social responsibility. Through his
                endeavors, Upreti has not only transformed his community but has
                also set a precedent for how technology can be harnessed to drive
                positive change and create a better future for all.
                <br />
                <br />
                Upreti's journey into the realm of technology began over a decade
                ago when he founded his first IT startup in 2007 A.D. as PRACAS
                Infosys in Biratnagar. Recognizing the potential of technology to
                bridge gaps and catalyze progress, he embarked on a mission to
                leverage digital solutions to address local challenges and foster
                economic development. His vision was not merely to create
                successful businesses but to effect meaningful change in his
                community.
              </p>

              {/* Social Media */}
              <div className="mt-4 md:mt-6 flex flex-col sm:flex-row sm:flex-wrap items-center gap-3 md:gap-4 justify-center md:justify-start">
                <p className="text-gray-900 font-medium text-sm sm:text-base">
                  Follow us on social media:
                </p>
                <div className="flex gap-3 items-center">
                  <img
                    src="/icons/x.svg"
                    alt="Twitter"
                    className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 transition cursor-pointer"
                  />
                  <img
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 transition cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {teamMembers.slice(1).map((member) => (
            <div
              key={member.id}
              className="bg-gray-50 border border-gray-300 rounded-lg shadow-sm p-3 sm:p-4 md:p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mb-2 sm:mb-3 object-cover shadow-md"
              />
              <h2 className="text-sm sm:text-base md:text-lg font-semibold line-clamp-2">
                {member.name}
              </h2>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base line-clamp-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;