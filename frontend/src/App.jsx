// src/App.jsx

import { useState } from "react";
import "./App.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function App() {

  const [address, setAddress] = useState("");
  const [result, setResult] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const [priority, setPriority] = useState("Normal Delivery");

  // Handle AI Request
  const handleSubmit = async () => {

    if (!address.trim()) {
      alert("Please enter address");
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(`${API_URL}/simplify`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          address: address,
          language: language,
          priority: priority,
        }),
      });

      const data = await response.json();

      setResult(data.result);

      // Typing Animation
      const fullText = data.result;

      setDisplayedText("");

      let i = 0;

      const interval = setInterval(() => {

        setDisplayedText((prev) => prev + fullText.charAt(i));

        i++;

        if (i >= fullText.length) {
          clearInterval(interval);
        }

      }, 20);

    } catch (error) {

      console.error("Backend Error:", error);

      setDisplayedText(
        "❌ Error connecting to backend server"
      );

    }

    setLoading(false);
  };

  // Voice Navigation
  const speakText = () => {

    if (!result) return;

    const speech = new SpeechSynthesisUtterance(result);

    speech.lang =
      language === "ta"
        ? "ta-IN"
        : "en-US";

    speech.rate = 1;

    window.speechSynthesis.speak(speech);
  };

  // Copy Route
  const copyText = () => {

    if (!result) return;

    navigator.clipboard.writeText(result);

    alert("✅ Route Copied!");
  };

  return (

    <div className="container">

      {/* Title */}
      <h1>🚚 GEMMAROUTE AI</h1>

      <p className="subtitle">
        AI Powered Last-Meter Delivery Navigation
      </p>

      {/* Language Selection */}
      <div className="lang-buttons">

        <button
          onClick={() => setLanguage("en")}
        >
          🇬🇧 English
        </button>

        <button
          onClick={() => setLanguage("ta")}
        >
          🇮🇳 Tamil
        </button>

      </div>

      {/* Address Input */}
      <textarea
        placeholder="Enter delivery address..."
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
      />

      {/* Priority Dropdown */}
      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >

        <option>
          Normal Delivery
        </option>

        <option>
          Express Delivery
        </option>

        <option>
          Emergency Delivery
        </option>

      </select>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
      >

        {
          loading
            ? "Generating AI Route..."
            : "Simplify Address"
        }

      </button>

      {/* Result Section */}
      {displayedText && (

        <div className="result-box">

          <h2>
            🧠 AI Navigation Output
          </h2>

          <pre>
            {displayedText}
          </pre>

          {/* Buttons */}
          <div className="button-group">

            <button onClick={speakText}>
              🔊 Speak
            </button>

            <button onClick={copyText}>
              📋 Copy Route
            </button>

          </div>

          {/* GPS Simulation */}
          <div className="gps-box">

            <h3>
              📍 Live Delivery Status
            </h3>

            <p>
              🛵 Driver Distance: 300m away
            </p>

            <p>
              ⏱ Estimated Arrival: 2 mins
            </p>

            <p>
              🧭 Next Turn: Left near temple
            </p>

            <p>
              🚚 Delivery Type: {priority}
            </p>

            <p>
              ✅ Navigation Confidence: 98%
            </p>

            <p>
              🛰 AI Landmark Detection Active
            </p>

          </div>

        </div>

      )}

      {/* Footer */}
      <footer>

        Powered by Gemma 4 + FastAPI + React + AI Navigation Engine

      </footer>

    </div>
  );
}

export default App;