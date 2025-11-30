import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import './index.css';

// Pages
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
