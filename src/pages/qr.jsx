import React from "react";
import BasicBreadcrumbs from "../Components/BasicBreadcrumb";
import Ribbon from "../Components/Ribbon";

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
    title: "Google Reviews",
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

      {/* Page Header */}
      <Ribbon name= "QR Codes"/>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className=" flex flex-col ">
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-contain mb-4 rounded-t-md shadow-sm"
                  />
                )}
                <h3 className="text-2xl font-semibold px-4 mb-2">
                  {card.title}
                </h3>
                <p className="card2 text-sm px-4 pb-4 pt-3">{card.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Qr;
