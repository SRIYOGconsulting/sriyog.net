import React, { useState } from 'react';
import BasicBreadcrumbs from '../Components/BasicBreadcrumb'; // optional

export default function Faq() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'FAQ', path: '/faq' },
  ];

 const faqs = [
  {
    id: 1,
    question: "When was SRIYOG Consulting Pvt. Ltd. established?",
    answer: "The company was established on June 14, 2018.",
  },
  {
    id: 2,
    question: "Where is SRIYOG Consulting based?",
    answer: "It is headquartered in Kamalpokhari, Kathmandu, Nepal.",
  },
  {
    id: 3,
    question: "Is SRIYOG App have a new homepage?",
    answer: "Yes, SRIYOG App is now an independent company.",
  },
  {
    id: 4,
    question: "What industries does SRIYOG Consulting serve?",
    answer:
      "SRIYOG Consulting serves a broad range of industries, including healthcare, employment and tourism.",
  },
  {
    id: 5,
    question: "Who is the CTO of SRIYOG Consulting?",
    answer:
      "Prakash Upreti, also known as PRACAS, is the Chief Technology Officer of SRIYOG Consulting.",
  },
  {
    id: 6,
    question: "What makes SRIYOG Consulting unique?",
    answer:
      "The company offers custom-tailored, secure, and scalable IT solutions with end-to-end digital transformation services.",
  },
  {
    id: 7,
    question: "Difference between website development & maintenance.",
    answer:
      "Website development involves creating a website from scratch, while website maintenance focuses on regularly updating, securing, and optimizing it after launch.",
  },
  {
    id: 8,
    question: "What is covered under social media management?",
    answer:
      "It involves monthly strategy, content creation, engagement, and analytics to enhance digital branding.",
  },
  {
    id: 9,
    question: "What does the database/ web server rental service offer?",
    answer:
      "It provides secure server space for hosting websites, databases, and applications.",
  },
  {
    id: 10,
    question: "What does the mobile app development service entail?",
    answer:
      "Development of professional mobile apps tailored to client needs, compatible with Android and iOS.",
  },
  {
    id: 11,
    question: "What kind of websites does SRIYOG Consulting develop?",
    answer:
      "We build custom, user-friendly websites including e-commerce, CMS, and SaaS applications.",
  },
  {
    id: 12,
    question: "What technologies does SRIYOG Consulting use?",
    answer:
      "SRIYOG Consulting uses a mix of modern web and data technologies, including web and software development tools, UI/UX design with Figma, databases with SQL, data analytics tools etc.",
  },
  {
    id: 13,
    question: "Does SRIYOG Consulting provides cloud hosting services?",
    answer: "Yes, we provide secured cloud hosting services.",
  },
  {
    id: 14,
    question: "Is security included in the services?",
    answer:
      "Yes, SSL certification, security audits, and cyber protection are part of our cloud services.",
  },
  {
    id: 15,
    question: "What analytics services are offered?",
    answer:
      "Data analysis, survey form development, and insights to improve business decision-making.",
  },
  {
    id: 16,
    question: "How many clients has the CTO served so far?",
    answer: "Over 500 clients across 15 countries.",
  },
  {
    id: 17,
    question: "What are some of SRIYOG's notable clients?",
    answer:
      "Clients include Magic Footwear, Trans Nepal, PUSOM, Neuro Hospital, CVDS Nepal, and more.",
  },
  {
    id: 18,
    question: "What is the mission of SRIYOG Consulting?",
    answer:
      "To empower businesses with reliable IT solutions that streamline operations and drive growth.",
  },
  {
    id: 19,
    question: "What is the vision of SRIYOG Consulting?",
    answer:
      "To be a leading IT consulting firm in Nepal and globally through innovation and strategic partnerships.",
  },
  {
    id: 20,
    question: "Why should businesses choose SRIYOG Consulting?",
    answer:
      "For their industry expertise, customized solutions, scalability, security, and full-spectrum digital services.",
  },
  {
    id: 21,
    question: "Is SRIYOG Consulting offering Internship opportunity?",
    answer:
      "Yes, we do. The intakes are on June-August, September-November, December-February, March-May.",
  },
  {
    id: 22,
    question: "How can I apply for an Internship?",
    answer: "You need to fill our online form in Internship section.",
  },
  {
    id: 23,
    question: "Do I need to pay for an Internship Opportunity?",
    answer:
      "A fee of USD 100 per month is applicable for enrollment in the internship program, along with a refundable security deposit of USD 500. However, this fee may be offered as a scholarship to selected talented and expert candidates.",
  },
  {
    id: 24,
    question: "Can I join a Training?",
    answer: "Yes, we offer various IT training courses.",
  },
];


  const faq1 = faqs.slice(0,faqs.length/2);
  const faq2 = faqs.slice(faqs.length/2)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='footer'>
      {/* Ribbon/Header */}
      <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        </div>
      </div>

      <div className="px-5 py-10 max-w-7xl mx-auto">
        {/* FAQ List */}
        <div className="flex items-start justify-center gap-4 ">
          <div className='w-1/2 space-y-3 '>
             {faq1.map((faq) => (
            <div key={faq.id} className="rounded-md overflow-hidden group border-none">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between faqsQuestions  items-center py-5 px-6   transition"
              >
                <h2 className="text-md font-semibold">{faq.question}</h2>
                <span className="text-2xl font-bold">
                  {openIndex === faq.id ? 
                      <div className='w-[15px] h-[2px] rounded-full bg-black'></div>
                      :
                      <img src='/icons/plus.svg' className='w-[19px] h-[19px]' alt=''/>}
                </span>
              </button>

              <div
                className={`  text-gray-600 faqsAnswers transition-all duration-300 ease-in-out ${
                  openIndex === faq.id ? 'max-h-96 opacity-100 translate-y-0 p-6' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
          </div>
          <div className='w-1/2 space-y-3'>
            {faq2.map((faq) => (
            <div key={faq.id} className="rounded-md overflow-hidden group border-none">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between faqsQuestions items-center py-5 px-6   transition"
              >
                <h2 className="text-md font-semibold">{faq.question}</h2>
                <span className="text-2xl font-bold">
                  {openIndex === faq.id ? 
                      <div className='w-[15px] h-[2px] rounded-full bg-black'></div>
                      :
                      <img src='/icons/plus.svg' className='w-[19px] h-[19px]' alt=''/>}
                </span>
              </button>

              <div
                className={`  text-gray-600 faqsAnswers transition-all duration-300 ease-in-out ${
                  openIndex === faq.id ? 'max-h-96 opacity-100 translate-y-0 p-6' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>))}
          </div>
        </div>
      </div>
    </div>
  );
}
