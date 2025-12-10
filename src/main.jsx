import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";


import Home from "./pages/Home.jsx";
import Search from "./components/Search.jsx";
import NotFound from "./pages/NotFound.jsx";


const About = React.lazy(() => import("./pages/About.jsx"));
const Certificates = React.lazy(() => import("./pages/Certificates.jsx"));
const Services = React.lazy(() => import("./pages/Services.jsx"));
const Contact = React.lazy(() => import("./pages/Contact.jsx"));
const Feedback = React.lazy(() => import("./pages/Feedback.jsx"));
const Gallery = React.lazy(() => import("./pages/Gallery.jsx"));
const History = React.lazy(() => import("./pages/History.jsx"));
const Message = React.lazy(() => import("./pages/Message.jsx"));
const Notice = React.lazy(() => import("./pages/Notice.jsx"));
const Payment = React.lazy(() => import("./pages/Payment.jsx"));
const Qr = React.lazy(() => import("./pages/Qr.jsx"));
const Team = React.lazy(() => import("./pages/Team.jsx"));
const Timeline = React.lazy(() => import("./pages/Timeline.jsx"));
const Videos = React.lazy(() => import("./pages/Videos.jsx"));
const Vmgo = React.lazy(() => import("./pages/Vmgo.jsx"));
const WhyUs = React.lazy(() => import("./pages/WhyUs.jsx"));
const Sitemap = React.lazy(() => import("./pages/Sitemap.jsx"));
const Downloads = React.lazy(() => import("./pages/Download.jsx"));
const FAQ = React.lazy(() => import("./pages/Faq.jsx"));
const Glossary = React.lazy(() => import("./pages/Glossary.jsx"));
const Location = React.lazy(() => import("./pages/Location.jsx"));
const Refundpolicy = React.lazy(() => import("./pages/RefundPolicy.jsx"));
const Calendar = React.lazy(() => import("./pages/Calendar.jsx"));
const Internship = React.lazy(() => import("./pages/Internship.jsx"));
const CookiePolicy = React.lazy(() => import("./pages/CookiePolicy.jsx"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy.jsx"));
const TermsOfServices = React.lazy(() => import("./pages/Tos.jsx"));
const Disclaimer = React.lazy(() => import("./pages/Disclaimer.jsx"));
const PhotoGallery = React.lazy(() => import("./pages/PhotoGallery.jsx"));
const Career = React.lazy(() => import("./pages/Career.jsx"));
const ServicePage = React.lazy(() => import("./pages/ServicePage.jsx"));

// Suspense helper
const withSuspense = (Component, fallbackText) => (
  <Suspense fallback={<div>{fallbackText}</div>}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: withSuspense(About, "Loading About...") },
      { path: "certificates", element: withSuspense(Certificates, "Loading Certificates...") },
      { path: "downloads", element: withSuspense(Downloads, "Loading Download...") },
      { path: "faq", element: withSuspense(FAQ, "Loading FAQ...") },
      { path: "services", element: withSuspense(Services, "Loading Services...") },
      { path: "contact", element: withSuspense(Contact, "Loading Contact...") },
      { path: "location", element: withSuspense(Location, "Loading Location...") },
      { path: "refund-policy", element: withSuspense(Refundpolicy, "Loading Refundpolicy...") },
      { path: "feedback", element: withSuspense(Feedback, "Loading Feedback...") },
      { path: "gallery", element: withSuspense(Gallery, "Loading Gallery...") },
      { path: "history", element: withSuspense(History, "Loading History...") },
      { path: "message", element: withSuspense(Message, "Loading Message...") },
      { path: "notice", element: withSuspense(Notice, "Loading Notice...") },
      { path: "payment", element: withSuspense(Payment, "Loading Payment...") },
      { path: "qr", element: withSuspense(Qr, "Loading QR...") },
      { path: "glossary", element: withSuspense(Glossary, "Loading Glossary...") },
      { path: "team", element: withSuspense(Team, "Loading Team...") },
      { path: "timeline", element: withSuspense(Timeline, "Loading Timeline...") },
      { path: "videos", element: withSuspense(Videos, "Loading Videos...") },
      { path: "vmgo", element: withSuspense(Vmgo, "Loading Vmgo...") },
      { path: "whyus", element: withSuspense(WhyUs, "Loading Why Us...") },
      { path: "calendar", element: withSuspense(Calendar, "Loading Calendar...") },
      { path: "sitemap", element: withSuspense(Sitemap, "Loading Sitemap...") },
      { path: "internship", element: withSuspense(Internship, "Loading Internship...") },
      { path: "*", element: <NotFound /> },
      { path: "search", element: withSuspense(Search, "Loading Search...") },
      { path: "cookie-policy", element: withSuspense(CookiePolicy, "Loading Cookie Policy...") },
      { path: "privacy-policy", element: withSuspense(PrivacyPolicy, "Loading Privacy Policy...") },
      { path: "tos", element: withSuspense(TermsOfServices, "Loading Terms of Services...") },
      { path: "disclaimer", element: withSuspense(Disclaimer, "Loading Disclaimer...") },
      { path: "gallery/photogallery", element: withSuspense(PhotoGallery, "Loading Album...") },
      { path: "career", element: withSuspense(Career, "Loading Career...") },
      { path: "services/servicepage", element: withSuspense(ServicePage, "Loading Service Page...") },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
