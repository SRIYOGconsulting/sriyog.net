const pageName = "This is About Page";

export default function About() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 bg-white text-gray-900">
      
      {/* Hero / Image Placeholder */}
      <div className="max-w-3xl w-full mt-10 mb-16">
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
      </div>

      {/* Main About Content */}
      <div className="max-w-3xl w-full text-left space-y-6">
        <h1 className="text-5xl font-bold leading-tight">About Us</h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our community — a space where creativity, technology, 
          and people come together. Just like Medium, we believe in the power 
          of meaningful content and the impact of shared knowledge.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is simple: to build a place that inspires learning, 
          encourages collaboration, and empowers individuals to grow. Whether 
          you're a developer, designer, writer, or enthusiast, this is where 
          your voice matters.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          We started with a vision to make information accessible, elegant, 
          and enjoyable. Today, we continue that journey by creating tools, 
          content, and experiences that elevate your digital presence.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Thank you for being part of our story. Together, we grow, learn, 
          and build the future — one idea at a time.
        </p>
      </div>
    </div>
  );
}
