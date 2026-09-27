import { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JavaScript");

const handleRoast = async () => {
  if (!code.trim()) {
    alert("Paste some code first 😭");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/roast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        language: language,
      }),
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">🔥 RoastMyCode</div>

        <div className="nav-links">
          <span>Home</span>
          <span>About</span>
        </div>
      </nav>

      <main className="container">
        <section className="hero">
          <p className="badge">🤖 AI CODE REVIEWER</p>

          <h1>
            Your code is bad.
            <br />
            <span>Let me explain why. 🔥</span>
          </h1>

          <p className="subtitle">
            Paste your code and let AI roast your mistakes,
            explain the problems, and show you a better solution.
          </p>
        </section>

        <section className="code-section">
          <div className="editor-header">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>JavaScript</option>
              <option>Python</option>
              <option>Java</option>
              <option>C++</option>
              <option>TypeScript</option>
            </select>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="// Paste your terrible code here..."
          />

          <button onClick={handleRoast}>
            🔥 Roast My Code
          </button>
        </section>

        <section className="result-section">
          <div className="result-card">
            <h2>🔥 The Roast</h2>
            <p>
              Your roast will appear here...
            </p>
          </div>

          <div className="result-card">
            <h2>💡 What's Wrong?</h2>
            <p>
              AI will explain your code problems here.
            </p>
          </div>

          <div className="result-card">
            <h2>✨ Better Version</h2>
            <pre>
              <code>
                // Your improved code will appear here
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;