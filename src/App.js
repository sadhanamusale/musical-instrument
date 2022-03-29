
import './App.css';
import MgSoundPlayer from './keyboard/MgSoundPlayer';
import React, { useEffect } from "react";



function App() {

  const audioPlayer = MgSoundPlayer();

  const handleClick = () => {
    audioPlayer.playNote("C4");
  };

  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);

  return (
    <div className="App">
      <div className="app-container">
      <button onClick={handleClick}>Play</button>
    </div>
    </div>
  );
}



export default App;
