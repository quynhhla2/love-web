import { useState } from "react";
import "./App.css";
import img1 from "./assets/catimg.jpeg";
import img2 from "./assets/image2.jpg";

const phrases = [
  "Không",
  "Chắc chưa",
  "Đánh chết giờ",
  "Đm phải yêu",
  "Không yêu là chó",
  "Damn Tharo ăng cứt",
  "Bé Dung ăng cứt",
  "2meme ăng cứt",
  "Ín ăng cứt",
  "em Lan ăng cứt",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="love-container">
      {yesPressed ? (
        <>
          <img alt="love img 1" src={img2} />
          <div className="text">Co cai l!!!!</div>
        </>
      ) : (
        <>
          <img alt="love img 2" src={img1} />

          <div className="text">Iu Ân hong?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Cóa
            </button>

            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
