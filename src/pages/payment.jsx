import React from "react";
import BasicBreadcrumbs from "../Components/BasicBreadcrumb";

const Payment = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Payment", path: "/payment" },
  ];

  return (
    <div>
      {/* Breadcrumb at the top */}
      {/*<BasicBreadcrumbs items={breadcrumbItems} />*/}

      {/* Page Header */}
      <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold">Payment</h1>
        </div>
      </div>

      {/* Main Payment Section */}
      <section className="min-h-screen bg-white flex flex-col justify-center items-center px-4 py-8 sm:py-10">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* ===== Left: Bank Details ===== */}
          <div className="text-gray-800 space-y-3 text-center lg:text-left">
            <img
              src="/images/payment/bank-logo.jpg"
              alt="Sriyog Consulting Logo"
              className="w-96 sm:w-[120] mb-5 mx-auto lg:mx-0"
            />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Bank Account Details
            </h2>

            <p>
              <strong>Account Name:</strong> Sriyog Consulting Pvt Ltd.
            </p>
            <p>
              <strong>Account Number:</strong> 00701017502051
            </p>
            <p>
              <strong>Branch:</strong> Kathmandu
            </p>
            <p>
              <strong>SWIFT CODE:</strong> NARBNPKA
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.sriyogconsulting.com"
                target="_blank"
                rel="noreferrer"
                className="text-black underline"
              >
                www.sriyogconsulting.com
              </a>
            </p>
            <p className="pt-8 text-2xl text-gray-900">
              <strong>VAT Number:</strong> 606683203
            </p>
          </div>

          {/* ===== Right: QR Code Section ===== */}
          <div className="flex flex-col justify-center items-center border border-black rounded-3xl p-6 sm:p-8 w-full max-w-sm mx-auto shadow-sm">
            <img
              src="/images/payment/bank-logo.jpg"
              alt="Sriyog Consulting Logo"
              className="w-48 sm:w-[60] mb-4 object-contain"
            />
            <img
              src="/images/payment/1.jpg"
              alt="Payment QR"
              className="w-48 sm:w-60 h-auto object-contain mb-6"
            />

            <div className="text-center text-black font-semibold space-y-2 text-sm sm:text-base">
              <p className="text-lg sm:text-xl">Sriyog Consulting Pvt Ltd.</p>
              <p>Account No: 00701017502051</p>
              <p>Branch: Kathmandu</p>
              <p>Bank: Nabil Bank Ltd.</p>

              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="flex items-center gap-2">
                  <img src="/icons/phone.svg" alt="Phone" className="w-4 h-4" />
                  <a href="tel:9779851160868">+977 9851160868</a>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/icons/email.svg" alt="Mail" className="w-4 h-4" />
                  <a href="mailto:info@sriyog.com.np">info@sriyog.com.np</a>
                </div>
              </div>

              <a
                href="https://www.sriyogconsulting.com"
                target="_blank"
                rel="noreferrer"
                className="text-black underline block pt-2 font-medium"
              >
                www.sriyogconsulting.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
