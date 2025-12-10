import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      performSearch(query);
    } else {
      setLoading(false);
    }
  }, [query]);

  const performSearch = (searchTerm) => {
    setLoading(true);

    //  searchable content from your website
    const allContent = [
      // Home Page
      {
        id: 1,
        title: "Home - Welcome to Our Website",
        content:
          "Welcome to our website. Discover our services, meet our team, explore career opportunities, read latest notices and announcements. Find all the information you need about our company.",
        category: "Page",
        url: "/",
      },

      // About Page
      {
        id: 2,
        title: "About Us - Our Story",
        content:
          "Learn about our company history, mission, vision, and values. We are committed to excellence and innovation. Our journey started with a passion to deliver the best services to our clients.",
        category: "Page",
        url: "/about",
      },

      // Services
      {
        id: 3,
        title: "Our Services",
        content:
          "Professional services including web development, mobile app development, consulting, digital solutions, SEO optimization, UI/UX design, cloud services, and IT consulting.",
        category: "Services",
        url: "/services",
      },
      {
        id: 4,
        title: "Web Development Services",
        content:
          "Custom web development using React, JavaScript, Node.js, and modern technologies. Responsive design, fast performance, and user-friendly interfaces.",
        category: "Services",
        url: "/services",
      },
      {
        id: 5,
        title: "Mobile App Development",
        content:
          "iOS and Android mobile application development. Native and cross-platform solutions using React Native and Flutter.",
        category: "Services",
        url: "/services",
      },

      // Contact
      {
        id: 6,
        title: "Contact Us",
        content:
          "Get in touch with us. Email, phone, address, contact form. We are here to help and answer any questions you may have. Customer support available.",
        category: "Page",
        url: "/contact",
      },

      // Team
      {
        id: 7,
        title: "Our Team - Meet the Experts",
        content:
          "Meet our amazing team of professionals, developers, designers, managers, and consultants dedicated to delivering the best results. Experienced professionals passionate about technology.",
        category: "Page",
        url: "/team",
      },

      // Career
      {
        id: 8,
        title: "Careers - Join Our Team",
        content:
          "Join our team and grow your career. Job openings, internship opportunities, employee benefits, work culture, career growth, training programs. We offer exciting opportunities and great benefits.",
        category: "Page",
        url: "/career",
      },
      {
        id: 9,
        title: "Job Openings - Full Stack Developer",
        content:
          "Looking for experienced Full Stack Developer. Required skills: React, Node.js, MongoDB, JavaScript, TypeScript. Competitive salary and benefits.",
        category: "Job",
        url: "/career",
      },
      {
        id: 10,
        title: "Job Openings - UI/UX Designer",
        content:
          "Seeking creative UI/UX Designer. Skills needed: Figma, Adobe XD, user research, wireframing, prototyping. Portfolio required.",
        category: "Job",
        url: "/career",
      },

      // Notice
      {
        id: 11,
        title: "Latest Notices and Announcements",
        content:
          "Important announcements, company updates, news, events, holiday schedule. Stay informed with latest news and updates from our company.",
        category: "Page",
        url: "/notice",
      },
      {
        id: 12,
        title: "Office Holiday Notice",
        content:
          "Office will be closed on upcoming holidays. Holiday schedule, working hours, emergency contact information.",
        category: "Notice",
        url: "/notice",
      },
      {
        id: 13,
        title: "New Product Launch Announcement",
        content:
          "Exciting new product launch. Features, benefits, pricing, availability. Register for early access and special discounts.",
        category: "Notice",
        url: "/notice",
      },

      // Feedback
      {
        id: 14,
        title: "Customer Feedback",
        content:
          "We value your feedback and reviews. Share your thoughts, suggestions, complaints, testimonials. Help us improve our services and products.",
        category: "Page",
        url: "/feedback",
      },

      // Additional searchable content
      {
        id: 15,
        title: "Technologies We Use",
        content:
          "React, JavaScript, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, Bootstrap, Git, AWS, Docker, Python, Java.",
        category: "Technology",
        url: "/services",
      },
      {
        id: 16,
        title: "Client Testimonials",
        content:
          "Read what our clients say about us. Five star reviews, success stories, client satisfaction, quality service, professional team.",
        category: "Testimonial",
        url: "/feedback",
      },
      {
        id: 17,
        title: "Company Values and Culture",
        content:
          "Innovation, integrity, teamwork, customer focus, continuous learning, work-life balance, diversity and inclusion, sustainability.",
        category: "About",
        url: "/about",
      },
      {
        id: 18,
        title: "Support and Help Center",
        content:
          "FAQ, documentation, tutorials, guides, troubleshooting, technical support, customer service, help desk.",
        category: "Support",
        url: "/contact",
      },
    ];

    // Advanced search - searches in title, content, and category
    const searchLower = searchTerm.toLowerCase();
    const filtered = allContent.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(searchLower);
      const contentMatch = item.content.toLowerCase().includes(searchLower);
      const categoryMatch = item.category.toLowerCase().includes(searchLower);

      return titleMatch || contentMatch || categoryMatch;
    });

    // Sort results by relevance (title matches first)
    const sorted = filtered.sort((a, b) => {
      const aTitleMatch = a.title.toLowerCase().includes(searchLower);
      const bTitleMatch = b.title.toLowerCase().includes(searchLower);

      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      return 0;
    });

    // Simulate loading delay
    setTimeout(() => {
      setResults(sorted);
      setLoading(false);
    }, 500);
  };

  // Highlight search term in text
  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;

    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-600 px-1">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="min-h-screen  dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold  dark:text-white mb-3">
            Search Results
          </h1>
          {query && (
            <p className="text-lg card2 dark:text-gray-400">
              Showing results for:
              <span className="font-semibold text-teal-600 dark:text-teal-400 ml-2">
                "{query}"
              </span>
            </p>
          )}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-teal-600"></div>
            <p className="mt-6 text-xl card2 dark:text-gray-400">
              Searching...
            </p>
          </div>
        ) : (
          <>
            {/* Results Count */}
            {results.length > 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Found {results.length} result{results.length !== 1 ? "s" : ""}
              </p>
            )}

            {/* Search Results */}
            {results.length > 0 ? (
              <div className="space-y-6">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    to={result.url}
                    className="block footer dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500"
                  >
                    {/* Category Badge */}
                    <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {result.category}
                    </span>

                    <h2 className="text-2xl font-semibold card2 dark:text-teal-400 mb-3 hover:text-teal-700 dark:hover:text-teal-300">
                      {highlightText(result.title, query)}
                    </h2>

                    <p className="card2 dark:text-gray-300 leading-relaxed">
                      {highlightText(result.content, query)}
                    </p>

                    <div className="mt-4 text-sm text-teal-600 dark:text-teal-400 font-medium">
                      Read more 
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              // No Results Found
              <div className="text-center py-20 footer dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-semibold card2 dark:text-gray-200 mb-3">
                  No Results Found
                </h2>
                <p className="card2 dark:text-gray-400 mb-6">
                  We couldn't find any results for "{query}"
                </p>
                <p className="card2 dark:text-gray-500 mb-8">
                  Try searching with different keywords like: team, services,
                  career, contact, or notice
                </p>
                <Link
                  to="/"
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
                >
                  Go Back Home
                </Link>
              </div>
            )}
          </>
        )}

        {/* Back to Home Link */}
        {!loading && results.length > 0 && (
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-block text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-lg"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
