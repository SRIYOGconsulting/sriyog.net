import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App.jsx";

// Pages
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx"; // 404 page

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

// Helper to wrap lazy components in Suspense
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
      { path: "services", element: withSuspense(Services, "Loading Services...") },
      { path: "contact", element: withSuspense(Contact, "Loading Contact...") },
      { path: "feedback", element: withSuspense(Feedback, "Loading Feedback...") },
      { path: "gallery", element: withSuspense(Gallery, "Loading Gallery...") },
      { path: "history", element: withSuspense(History, "Loading History...") },
      { path: "message", element: withSuspense(Message, "Loading Message...") },
      { path: "notice", element: withSuspense(Notice, "Loading Notice...") },
      { path: "payment", element: withSuspense(Payment, "Loading Payment...") },
      { path: "qr", element: withSuspense(Qr, "Loading QR...") },
      { path: "team", element: withSuspense(Team, "Loading Team...") },
      { path: "timeline", element: withSuspense(Timeline, "Loading Timeline...") },
      { path: "videos", element: withSuspense(Videos, "Loading Videos...") },
      { path: "vmgo", element: withSuspense(Vmgo, "Loading Vmgo...") },
      { path: "whyus", element: withSuspense(WhyUs, "Loading Why Us...") },

      // 404 Page
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="history" element={<History />} />
          <Route path="message" element={<Message />} />
          <Route path="notice" element={<Notice />} />
          <Route path="payment" element={<Payment />} />
          <Route path="qr" element={<Qr />} />
          <Route path="team" element={<Team />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="videos" element={<Videos />} />
          <Route path="vmgo" element={<Vmgo />} />
          <Route path="whyus" element={<WhyUs />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
