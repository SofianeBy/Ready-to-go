import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  console.log(switch1);
  return (
    <>
      <section className="container">
        <div className="left-button">
          <div>
            <div>
              <button
                onClick={() => {
                  setSwitch1(true);
                }}
              >
                On
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setSwitch2(true);
                }}
              >
                On
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setSwitch3(true);
                }}
              >
                On
              </button>
            </div>
          </div>
          <div>
            <div>
              <button
                onClick={() => {
                  setSwitch1(false);
                }}
              >
                Off
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setSwitch2(false);
                }}
              >
                Off
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setSwitch3(false);
                }}
              >
                Off
              </button>
            </div>
          </div>
        </div>
        <div>{switch1 && switch2 && switch3 ? "Goooo" : "No way!"}</div>
      </section>
    </>
  );
}

export default App;
