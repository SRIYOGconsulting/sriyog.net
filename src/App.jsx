<<<<<<< HEAD
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
=======

import RoadBlock from './Components/RoadBlock'
import './App.css'

import Footer from "./components/Footer.jsx";
function App() {
  const onClose = ()=>{
      const closeDiv = document.querySelector(".close") as HTMLElement | null;

      if (closeDiv) {
        closeDiv.style.display = "none";
      }
  }
  return (
    <>
        <RoadBlock onClose={onClose}/>
    </>
  
    
  )
}

export default App



>>>>>>> 84eced7181fd050282e99901891da9904db296fb
