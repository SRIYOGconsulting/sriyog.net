import React from "react";

export default function Download() {
  // Table data
  const files = [
    { title: "Meeting Minutes", size: "44.42 KB", type: "PDF Document", date: "12/2/2025", link: "#" },
    { title: "Work Order", size: "9.07 KB", type: "Word Document", date: "12/2/2025", link: "#" },
    { title: "Guestbook Feedback Form", size: "124.43 KB", type: "PDF Document", date: "12/2/2025", link: "#" },
    { title: "Customer Feedback Form", size: "98.85 KB", type: "PDF Document", date: "12/2/2025", link: "#" },
    { title: "Internship Recommendation Letter Sample", size: "462.82 KB", type: "PDF Document", date: "12/2/2025", link: "#" },
    { title: "Internship Recommendation Letter Draft", size: "8.37 KB", type: "Word Document", date: "12/2/2025", link: "#" },
    { title: "Internship Request Letter Personal", size: "8.15 KB", type: "Word Document", date: "12/2/2025", link: "#" },
    { title: "SRIYOG Consulting Logos", size: "268.07 KB", type: "ZIP Archive", date: "12/2/2025", link: "#" },
  ];

  return (
    <div>
         {/* Ribbon / Header */}
      <div className="bg-teal-800 text-white py-12 px-4 md:px-8 mb-8 w-full">
        <h1 className="text-4xl font-bold max-w-7xl mx-auto">Downloads</h1>
      </div>
    
    <div className="px-5 py-10 max-w-7xl mx-auto">
     

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Title</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Size</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Type</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Last Updated</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Download</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 text-gray-800">{file.title}</td>
                <td className="px-6 py-4 text-gray-800">{file.size}</td>
                <td className="px-6 py-4 text-gray-800">{file.type}</td>
                <td className="px-6 py-4 text-gray-800">{file.date}</td>
                <td className="px-6 py-4">
                  <a
                    href={file.link}
                    className="text-teal-700 font-semibold hover:underline"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
