import { useState } from "react";
import "./App.css";

function App() {
  const [noButtonStyle, setNoButtonStyle] = useState({
    position: "absolute",
    top: "60%",
    left: "55%",
    transition: "top 0.2s, left 0.2s",
  });

  const moveButton = () => {
    // Keep button away from center by choosing edges
    let newTop, newLeft;
    const rand = Math.random();
    
    if (rand < 0.25) {
      // Top edge
      newTop = Math.random() * 15;
      newLeft = Math.random() * 90 + 5;
    } else if (rand < 0.5) {
      // Bottom edge
      newTop = Math.random() * 15 + 80;
      newLeft = Math.random() * 90 + 5;
    } else if (rand < 0.75) {
      // Left edge
      newTop = Math.random() * 90 + 5;
      newLeft = Math.random() * 15;
    } else {
      // Right edge
      newTop = Math.random() * 90 + 5;
      newLeft = Math.random() * 15 + 85;
    }
    
    setNoButtonStyle({
      ...noButtonStyle,
      top: `${newTop}%`,
      left: `${newLeft}%`,
    });
  };

  const handleYesClick = () => {
    alert("Yay! ❤️ Can't wait for Valentine's Day with you pookie!");
  };

  return (
    <div className="App">
      <div className="floating-hearts">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="heart">💕</span>
        ))}
      </div>
      <div className="content">
        <h1>Will you be my Valentine? 💕</h1>
        <p className="subtitle">I'd love to spend this special day with you</p>
        <div className="button-container">
          <button className="yes" onClick={handleYesClick}>
            Yes 💖
          </button>
        </div>
      </div>
      <button
        className="no"
        onMouseEnter={moveButton}
        style={noButtonStyle}
      >
        No 💔
      </button>
    </div>
  );
}

export default App;
