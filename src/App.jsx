import { Outlet } from "react-router-dom";
import RoadBlock from "./Components/RoadBlock";
import NavBar from "./Components/NavBar";
import BrowserCompatibilityWarning from "./Components/BrowserCompatibilityWarning";
import './index.css'
import Sidekick from "./Components/Sidekick";
import Footer from "./Components/Footer";
import Newsletter from "./Components/Newsletter";
import Header from "./Components/Header";
import CookieConsent from "./Components/CookieConsent";
import BacktoTop from './Components/BacktoTop'
import ExitPopup from "./Components/ExitPopup";
import LoadfromTop from "./Components/LoadfromTop";
import MobileDrawer from "./Components/MobileDrawer";



export default function App() {

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <BrowserCompatibilityWarning />  {/* Browser warning at the very top */}
      <LoadfromTop/>
      <NavBar />
      <Header />
     
      <MobileDrawer />
   
      <main className="flex-grow">
        
        <Outlet />
      </main>
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