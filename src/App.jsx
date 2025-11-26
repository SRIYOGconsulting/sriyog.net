import { Outlet } from "react-router-dom";
import RoadBlock from "./Components/RoadBlock";
import HelloBar from "./Components/HelloBar";
import './index.css'
import Sidekick from "./Components/Sidekick";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Header from "./components/Header";
import CookieConsent from "./Components/CookieConsent";
export default function App() {
  const onClose = () =>{
      const hide = document.querySelector(".close");
      if(hide){
        hide.style.display = "none";
      }
  }
  return (
    <div>
      <HelloBar/>
      <Header/>
      <Outlet />
      <Sidekick/>
       
      <Newsletter/>
         <Footer/>
<CookieConsent/>
      <RoadBlock onClose={onClose}/>
    </div>
  );
}
