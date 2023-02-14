import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="photos">
        <div id="image1" className="photo-frame">
          <span id="desc1" className="photo-description">
            첫 번째
          </span>
        </div>
        <div id="image2" className="photo-frame">
          <span id="desc2" className="photo-description">
            두 번째
          </span>
        </div>
        <div id="image3" className="photo-frame">
          <span id="desc3" className="photo-description">
            세 번째
          </span>
        </div>
        <div id="image4" className="photo-frame">
          <span id="desc4" className="photo-description">
            네 번째
          </span>
        </div>
      </div>

      <div className="footer">
        <p className="f-title">Happy</p>
        <p className="f-date">2023.02.12</p>
      </div>
    </div>
  );
}

export default App;
