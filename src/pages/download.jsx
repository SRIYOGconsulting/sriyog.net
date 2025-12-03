import React from "react";

export default function Download() {
  const files = [
    { title: "Meeting Minutes", size: "44.42 KB", type: "PDF Document", date: "12/2/2025", link: "#" },
    { title: "Work Order", size: "9.07 KB", type: "Word Document", date: "12/2/2025", link: "#" },
    { title: "Guestbook Feedback Form", size: "124.43 KB", type: "PDF Document", date: "12/2/2025", link: "#" },
    { title: "Customer Feedback Form", size: "98.85 KB", type: "PDF Document", date: "12/2/2025", link: "#" },
    { title: "Internship Recommendation Letter Sample", size: "462.82 KB", type: "PDF Document", date: "12/2/2025", link: "#" },
    { title: "Internship Recommendation Letter Draft", size: "8.37 KB", type: "Word Document", date: "12/2/2025", link: "#" },
    { title: "Internship Request Letter Personal", size: "8.15 KB", type: "Word Document", date: "12/2/2025", link: "#" },
    { title: "SRIYOG Consulting Logos", size: "268.07 KB", type: "ZIP Archive", date: "12/2/2025", link: "#" },
    { title: "Android Mobile WireFrame", size: "32.48 KB", type: "PDF Document", date: "12/3/2025", link: "#" },
    { title: "Apple Mobile WireFrame", size: "16.50 KB", type: "PDF Document", date: "12/3/2025", link: "#" },
    { title: "Check List", size: "32.80 KB", type: "PDF Document", date: "12/3/2025", link: "#" },
    { title: "Daily Task", size: "48.68 KB", type: "PDF Document", date: "12/3/2025", link: "#" },
    { title: "Daily Tasks Two in A4", size: "108.80 KB", type: "PDF Document", date: "12/3/2025", link: "#" },
    { title: "Safari Dashboard Wireframe landscape", size: "17.34 KB", type: "PDF Document", date: "12/3/2025", link: "#" },
    { title: "Safari Wireframe landscape", size: "17.22 KB", type: "PDF Document", date: "12/3/2025", link: "#" },
    { title: "Safari Wireframe", size: "17.09 KB", type: "PDF Document", date: "12/3/2025", link: "#" },
    { title: "Download JDR Fonts", size: "29.11 KB", type: "PDF Document", date: "12/3/2025", link: "#" },
    { title: "Google Input Tools Nepali", size: "6101.50 KB", type: "ZIP Archive", date: "12/3/2025", link: "#" },
    { title: "Blumind Mind Mapping", size: "846.59 KB", type: "ZIP Archive", date: "12/3/2025", link: "#" }
  ];

  return (
    <div>
      {/* Header Ribbon */}
      <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold">Download</h1>
        </div>
      </div>

      <div className="px-5 py-10 max-w-7xl mx-auto">

        {/* Desktop Table */}
        <div className="hidden md:flex justify-center overflow-x-auto">
          <table className="w-full max-w-5xl bg-white rounded-xl shadow-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-2 text-left font-semibold text-gray-700">Title</th>
                <th className="px-6 py-2 text-left font-semibold text-gray-700">Size</th>
                <th className="px-6 py-2 text-left font-semibold text-gray-700">Type</th>
                <th className="px-6 py-2 text-left font-semibold text-gray-700">Last Updated</th>
                <th className="px-6 py-2 text-left font-semibold text-gray-700">Download</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}
                >
                  <td className="px-6 py-2 text-gray-800">{file.title}</td>
                  <td className="px-6 py-2 text-gray-800">{file.size}</td>
                  <td className="px-6 py-2 text-gray-800">{file.type}</td>
                  <td className="px-6 py-2 text-gray-800">{file.date}</td>
                  <td className="px-6 py-2">
                    <button
                      onClick={() => window.location.href = file.link}
                      className="border border-teal-700 text-teal-700 bg-white px-4 py-1.5 rounded-md text-sm 
                         hover:bg-teal-700 hover:text-white transition"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile Card Layout */}
        <div className="md:hidden space-y-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{file.title}</h2>

              <div className="text-gray-700 text-sm space-y-1 mb-3">
                <p><span className="font-medium">Size:</span> {file.size}</p>
                <p><span className="font-medium">Type:</span> {file.type}</p>
                <p><span className="font-medium">Last Updated:</span> {file.date}</p>
              </div>

              <button
                onClick={() => window.location.href = file.link}
                className="inline-block border border-teal-700 text-teal-600 bg-white px-4 py-2 rounded-md text-sm  
             hover:bg-teal-700 hover:text-white transition"
              >
                Download
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
