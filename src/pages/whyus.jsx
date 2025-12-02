import BasicBreadcrumbs from '../Components/BasicBreadcrumb';
import React from 'react';

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Why Us', path: '/whyus' },
];

export default function WhyUs() {
  return (
    <div>
      {/* <BasicBreadcrumbs items={breadcrumbItems} /> */}

      {/* Ribbon/Header */}
      <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8 w-full">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Why Us</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-16 items-center justify-center px-4 pb-10">

        {/* SECTION 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              We Make Finding Skilled Professionals Simple
            </h2>
            <p className="text-gray-600">
              At SRIYOG, we’ve built a platform that connects clients with real, trusted professionals — from plumbers, electricians, and carpenters to tutors, beauticians, and more. No more calling around or searching through unreliable ads — everything you need is in one place.
            </p>
          </div>
          <img
            src="/images/home/1.jpg"
            alt="Section 1"
            className="w-full max-w-md md:max-w-[450px] rounded-md object-cover mx-auto"
          />
        </div>

        {/* SECTION 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Verified Experts, Diverse Services
            </h2>
            <p className="text-gray-600">
              We vet and verify service providers so you get dependable, high-quality help. With dozens of service categories and thousands of skilled professionals, you have flexibility and choice — for quick repairs, tutoring, beauty services, and more.
            </p>
          </div>
          <img
            src="/images/home/1.jpg"
            alt="Section 2"
            className="w-full max-w-md md:max-w-[450px] rounded-md object-cover mx-auto"
          />
        </div>

        {/* SECTION 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Easy to Use — Anytime, Anywhere
            </h2>
            <p className="text-gray-600">
              SRIYOG is built to be user-friendly and accessible. With our web platform and mobile app, you can find, contact, and hire professionals from the comfort of your home — saving time and effort.
            </p>
          </div>
          <img
            src="/images/home/1.jpg"
            alt="Section 3"
            className="w-full max-w-md md:max-w-[450px] rounded-md object-cover mx-auto"
          />
        </div>

        {/* SECTION 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Growing, Reliable, Evolving Platform
            </h2>
            <p className="text-gray-600">
              Since 2016, SRIYOG has steadily grown and improved based on user needs. We continuously refine our platform to offer secure, reliable service — giving you peace of mind with every booking.
            </p>
          </div>
          <img
            src="/images/home/1.jpg"
            alt="Section 4"
            className="w-full max-w-md md:max-w-[450px] rounded-md object-cover mx-auto"
          />
        </div>

      </div>
    </div>
  );
}
