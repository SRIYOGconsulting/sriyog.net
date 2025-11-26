
import RoadBlock from './Components/RoadBlock'
import './App.css'

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
