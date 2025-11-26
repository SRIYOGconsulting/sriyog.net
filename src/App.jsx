
import RoadBlock from './Components/RoadBlock'
import './App.css'

import Footer from "./components/Footer.jsx";
function App() {
  const onClose = () => {
    const closeDiv = document.querySelector(".close");
    if (closeDiv) {
      closeDiv.style.display = "none";
    }
  }
  return (
    <>
        <RoadBlock onClose={onClose}/>
        <Footer/>
    </>
  
    
  )
}

export default App



