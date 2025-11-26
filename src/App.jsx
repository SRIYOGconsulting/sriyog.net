import { Outlet } from "react-router-dom";
import RoadBlock from "./Components/RoadBlock";
import HelloBar from "./Components/HelloBar";
import './index.css'
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
      <Outlet />
      <RoadBlock onClose={onClose}/>
    </div>
  );
}
