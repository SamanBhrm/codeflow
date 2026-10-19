
const codeExample = {
  "App.jsx": `import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";
import CodeEditor from "./CodeEditor";

function App() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor
        value={code}
        onChange={setCode}
        onAi={handleAICompletion}
      />
    </div>
  );
}

export default App;`,

  "Hero.jsx": `function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">
          AI Powered
        </span>

        <h1>
          Build faster with
          <span> CodeFlow AI</span>
        </h1>

        <p>
          Write better code with the power
          of artificial intelligence.
        </p>

        <button className="hero-button">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;`,

  "Navbar.jsx": `import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        CodeFlow AI
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/pricing">Pricing</Link>
      </div>

      <button className="login-button">
        Login
      </button>
    </nav>
  );
}

export default Navbar;`,
};

export default codeExample;

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "bg-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "Smart Completion",
    content: "AI-powered code suggestions in real-time",
  },

  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "bg-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "UI",
    title: "Beautiful UI",
    content: "Build responsive navigation components with ease.",
  },

  "Navbar.jsx": {
    bgColor: "bg-cyan-500/20",
    iconColor: "bg-cyan-400",
    textColor: "text-cyan-200",
    contentColor: "text-cyan-300",
    icon: "⚡",
    title: "Fast Navigation",
    content: " Create modern interfaces faster with AI.",
  },
};