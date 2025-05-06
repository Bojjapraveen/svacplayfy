import { useState } from "react";
import Navbar from './components/navbar/Navbar';
import Mainsection from './components/mainsection/Mainsection';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [audio] = useState(new Audio("song.mp3")); // Replace with actual file path

  // Function to open popup and play song
  const handleTrendingClick = () => {
    setShowPopup(true);
    audio.play();
  };

  // Function to close popup and stop song when clicking Home
  const handleHomeClick = () => {
    console.log("Home button clicked!");
    setShowPopup(false);
    audio.pause();
    audio.currentTime = 0;
    window.location.href = "/";
  };

  return (
    <>
      <div className="mainContainer">
        <Navbar onHomeClick={() => handleHomeClick ()} />
        <div className="mainsectionContainer">
          <Mainsection showPopup={showPopup} onTrendingClick={handleTrendingClick} />
        </div>
      </div>
    </>
  );
}

export default App;