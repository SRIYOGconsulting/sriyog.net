import React from "react";
import BasicBreadcrumbs from "../Components/BasicBreadcrumb";

const breadcrumbItems = [
  { label: "Home", path: "/" },
  { label: "QR Code", path: "/qr" },
];

const cardData = [
  {
    id: 1,
    title: "Payment QR",
    image: "/images/qr/payment.jpg",
    link: "#payment",
    description: "Scan this QR code to make secure payments for services.",
  },
  {
    id: 2,
    title: "Facebook",
    image: "/images/qr/facebook.jpg",
    link: "https://www.facebook.com/sriyogconsulting",
    description: "Follow our latest updates and technology solutions.",
  },
  {
    id: 3,
    title: "Google",
    image: "/images/qr/google.jpg",
    link: "tel:+9779852024365",
    description: "Get in touch with our team for consultations and support.",
  },
  {
    id: 4,
    title: "Appointment",
    image: "/images/qr/appointment.jpg",
    link: "mailto:info@sriyogconsulting.com",
    description: "Reach out via email for inquiries and project discussions.",
  },
  {
    id: 5,
    title: "Instagram",
    image: "/images/qr/instagram.jpg",
    link: "https://dashboard.sriyogconsulting.com",
    description: "Access your personalized dashboard for project updates.",
  },
  {
    id: 6,
    title: "Location",
    image: "/images/qr/location.jpg",
    link: "https://www.google.com/maps/place/Sriyog+Consulting/",
    description: "Find our office location on Google Maps for visits.",
  },
];

function Qr() {
  return (
    <div>
      {/* Breadcrumb */}
      <BasicBreadcrumbs items={breadcrumbItems} />

      {/* Page Header */}
      <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">QR Codes & Quick Access</h1>
        </div>
      </div>

      {/* Cards */}
      <section className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardData.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center justify-between bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-96 h-[28rem] mx-auto"
            >
              <div className="pt-8 flex flex-col items-center">
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-64 h-64 object-contain mb-4 rounded-md shadow-sm"
                  />
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm px-4">{card.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Qr;
