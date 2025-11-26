import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

// Pages
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Certificates from "./pages/certificates.jsx";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },        // homepage → /
      { path: "about", element: <About /> },  // /about
      { path: "certificates", element: <Certificates /> },
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
