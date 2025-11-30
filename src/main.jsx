import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import './index.css';

// Pages
<<<<<<< Updated upstream
import Home from "./pages/home";
import About from "./pages/about";
import Certificates from "./pages/certificates";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Feedback from "./pages/feedback";
import Gallery from "./pages/gallery";
import History from "./pages/history";
import Message from "./pages/message";
import Notice from "./pages/notice";
import Payment from "./pages/payment";
import Qr from "./pages/qr";
import Team from "./pages/team";
import Timeline from "./pages/timeline";
import Videos from "./pages/videos";
import Vmgo from "./pages/vmgo";
import WhyUs from "./pages/whyus";
import Sitemap from "./pages/sitemap";
import NotFound from "./pages/notfound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
=======
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Certificates from "./pages/certificates.jsx";
import Services from "./pages/services.jsx";
import Contact from "./pages/contact.jsx";
import Feedback from "./pages/feedback.jsx";
import Gallery from "./pages/gallery.jsx";
import History from "./pages/history.jsx";
import Message from "./pages/message.jsx";
import Notice from "./pages/notice.jsx";
import Payment from "./pages/payment.jsx";
import Qr from "./pages/qr.jsx";
import Team from "./pages/team.jsx";
import Timeline from "./pages/timeline.jsx";
import Videos from "./pages/videos.jsx";
import Vmgo from "./pages/vmgo.jsx";
import WhyUs from "./pages/whyus.jsx";
import NotFound from "./pages/notfound.jsx"; //  Add this


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },        // homepage → /
      { path: "about", element: <About /> },
      { path: "certificates", element: <Certificates /> },
      {path: "services", element: <Services/>},
      { path: "contact", element: <Contact /> },
      { path: "feedback", element: <Feedback /> },
      { path: "gallery", element: <Gallery /> },
      { path: "history", element: <History /> },
      { path: "message", element: <Message /> },
      { path: "notice", element: <Notice /> },
      { path: "payment", element: <Payment /> },
      { path: "qr", element: <Qr /> },
      { path: "team", element: <Team /> },
      { path: "timeline", element: <Timeline /> },
      { path: "videos", element: <Videos /> },
      { path: "vmgo", element: <Vmgo /> },
      { path: "whyus", element: <WhyUs /> },
   

      //  404 Page (must be last)
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
>>>>>>> Stashed changes
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
