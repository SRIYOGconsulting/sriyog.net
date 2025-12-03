import React from "react";

export default function RefundPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header / Ribbon */}
      <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Refund Policy</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mb-12 space-y-6">
        <section className="bg-white p-6 rounded-xl shadow-md space-y-6">
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-medium">SRIYOG Consulting Pvt. Ltd.</span>, we are committed to delivering high-quality products and services. This Refund Policy describes the situations in which refunds may be granted and the process to request them.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-teal-700 mb-2">Eligibility for Refunds</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Refunds may be provided under the following conditions:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Products or services received are defective or not as described.</li>
              <li>Orders are not delivered within the expected timeframe.</li>
              <li>Duplicate charges or payment errors occur.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-700 mb-2">Non-Refundable Cases</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Refunds will not be issued in the following cases:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Change of mind after purchase.</li>
              <li>Services or digital products that have already been fully delivered.</li>
              <li>Unauthorized use or distribution of digital content.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-700 mb-2">Refund Process</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              To request a refund, please contact our support team at <span className="font-medium">support@sriyog.com</span> within 7 days of purchase. Include your order details, reason for the refund, and any supporting documentation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Once your request is reviewed, we will respond within 5 business days. Approved refunds will be processed back to the original payment method within 7–10 business days.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-700 mb-2">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-1">Email: support@sriyog.com</p>
            <p className="text-gray-700 leading-relaxed mb-1">Phone: +977-XXXXXXXXXX</p>
            <p className="text-gray-700 leading-relaxed">Address: [SRIYOG Consulting Address], Kathmandu, Nepal</p>
          </div>
        </section>
      </div>
    </div>
  );
}
