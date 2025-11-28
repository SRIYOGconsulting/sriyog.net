import { Outlet } from "react-router-dom";
import RoadBlock from "./Components/RoadBlock";
import NavBar from "./Components/NavBar";
import './index.css'
import Sidekick from "./Components/Sidekick";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Header from "./components/Header";
import CookieConsent from "./Components/CookieConsent";
import BacktoTop from './Components/BacktoTop'
import ExitPopup from "./Components/ExitPopup";
export default function App() {

  return (
    <div>
      <NavBar />
      <Header />
      <Outlet />
      <Sidekick/>
      <ExitPopup/>
      <Newsletter/>
      <Footer/>
      <CookieConsent/>
      <BacktoTop/>
      <RoadBlock />
    </div>
  );
}
