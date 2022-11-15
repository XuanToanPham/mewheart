import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heart from "./components/Heart/Heart";
import { useEffect, useState } from "react";
function App() {
  const [clickBtn, setClickBtn] = useState();
  const getClickedBtn = (data) => {
    setClickBtn(data)
  }
  if(clickBtn){
    const audio = document.getElementById("playAudio");
    console.log(audio.play());
  }
  return (
    <BrowserRouter>
      <div className="App">
        <audio autoPlay={true} id="playAudio">
          <source
            src="./assets/music/y2mate.com - WAY BACK HOME  SHAUN featCONOR MAYNARD  SAM FELDT REMIX  NHẠC NỀN GÂY NGHIỆN HOT TREND 2022.mp3"
            type="audio/mp3"
          />
        </audio>
        <Routes>
          <Route path="/" element={<Modal getClickedBtn = {getClickedBtn} />} />
          <Route path="/heart" element={<Heart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
