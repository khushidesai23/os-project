import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SchedulingAlgo from "./Pages/SchedulingAlgo.jsx";
import FCFSNew from "./Pages/FCFSNew.jsx";
import "./Css/Homepage.css";
import Peterson from "./Pages/Peterson";
import Optimal from "./Pages/Optimal";
import FinalHomePage from "./Pages/FinalHomePage";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import AIBot from "./Pages/AIBot";

function App() {
  const commands = [
    {
      command: "reset",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "Open *",
      callback: (pageName) => {
        const destination =
          pageName.toLowerCase() === "home" ||
          pageName.toLowerCase() === "homepage"
            ? "/"
            : `/${pageName}`;
        window.open(destination, "_self");
      },
    },

    {
      command: "go to *",
      callback: (pageName) => {
        const destination =
          pageName.toLowerCase() === "home" ||
          pageName.toLowerCase() === "homepage"
            ? "/"
            : `/${pageName}`;
        window.open(destination, "_self");
      },
    },
    {
      command: "Reset",
      callback: (e) => {
        window.location.reload();
      },
    },
    {
      command: "Simulate",
      callback: (e) => {
        window.scrollTo({
          top: 1150,
          behavior: "smooth",
        });
      },
    },
    {
      command: "Turn on Dark Mode",
      callback: (e) => {
        document.body.style.backgroundColor = " #0A192F ";
      },
    },
    {
      command: "Turn on light mode",
      callback: (e) => {
        document.body.style.backgroundColor = " #F0F4F8 ";
      },
    },
    {
      command: "Turn on bright mode",
      callback: (e) => {
        document.body.style.backgroundColor = " white ";
      },
    },
    {
      command: "Scroll to top",
      callback: (e) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
    {
      command: "Scroll Down",
      callback: (e) => {
        window.scrollTo({
          top: 2500,
          behavior: "smooth",
        });
      },
    },
    {
      command: "Scroll to priority scheduling",
      callback: (e) => {
        window.scrollTo({
          top: 750,
          behavior: "smooth",
        });
      },
    },
    {
      command: "Scroll to peterson",
      callback: (e) => {
        window.scrollTo({
          top: 1000,
          behavior: "smooth",
        });
      },
    },
    {
      command: "Scroll to fcfs",
      callback: (e) => {
        window.scrollTo({
          top: 1000,
          behavior: "1150",
        });
      },
    },
     {
      command: "Scroll to optimal",
      callback: (e) => {
        window.scrollTo({
          top: 1000,
          behavior: "1350",
        });
      },
    },
    {
      command: "About Team",
      callback: (e) => {
        const element = document.querySelector("#team");
        const id = element.getAttribute("id");

        window.scrollTo({
          top: document.querySelector(`#${id}`).offsetTop,
          behavior: "smooth",
        });
      },
    },
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="App">
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      <div className="voice-bot-section">
        <button
          className="start-btn"
          onClick={() => {
            SpeechRecognition.startListening({
              continuous: true,
              language: "en-IN",
            });
          }}
        >
          Start
        </button>

        <button className="stop-btn" onClick={SpeechRecognition.stopListening}>
          Stop
        </button>
        <button className="reset-btn" onClick={resetTranscript}>
          Reset
        </button>
        <p>Transcript : {transcript}</p>
      </div>
      <Routes>
        <Route path="/Scheduling" element={<SchedulingAlgo />} />
        {/* <Route path='/FCFSDisk' element = {<FCFSDisk />}/> */}
        <Route path="/peterson" element={<Peterson />} />
        <Route path="/fcfs" element={<FCFSNew />} />
        <Route path="/Optimal" element={<Optimal />} />
        <Route path="/" element={<FinalHomePage />} />
        <Route path="/chat" element={<AIBot />} />
      </Routes>
    </div>
  );
}

export default App;
