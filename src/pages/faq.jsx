import React, { useState } from 'react';
import BasicBreadcrumbs from '../Components/BasicBreadcrumb'; // optional

export default function Faq() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'FAQ', path: '/faq' },
  ];

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'You can create an account by clicking the Sign Up button on the top-right corner and filling out the registration form.',
    },
    {
      question: 'What is your refund policy?',
      answer: 'Refunds are available within 30 days of purchase, provided the product is unused and in original packaging.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    },
    {
      question: 'Can I access the service on mobile devices?',
      answer: 'Yes, our platform is fully responsive and works on all modern mobile browsers.',
    },
    {
      question: 'Who can I contact for support?',
      answer: 'You can reach our support team via the Contact page or email us at support@sriyog.com.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Ribbon/Header */}
      <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        </div>
      </div>

      <div className="px-5 py-10 max-w-7xl mx-auto">
        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border card  rounded-lg overflow-hidden group"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 group-hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-xl font-semibold group-hover:text-black">{faq.question}</h2>
                <span className="text-2xl font-bold card2 group-hover:text-gray-700">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 card3 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
