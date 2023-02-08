import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const test = "i my me mine";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <p>안녕하세요 ㅎㅎㅎㅎㅎ</p>
          <span>sdfjklsdfjklsdf</span>
          <a href="https://naver.com"></a>
          <p>{test}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
