import { ArrowRight, ChevronDown,  Play,  Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import codeExample, { floatingCards } from "../data/CodeExample";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Mouse gradient */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59,130,246,0.15),
            transparent 40%
          )`,
        }}
      />

      {/* Background glow */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />


<div className="max-w-7xl mx-auto text-center relative w-full">
    <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
        <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-300">
<Sparkles className="w-4 h-4 text-blue-400"/>
<span className="text-xs sm:text-sm text-blue-300">Introducing CodeFlow AI</span>
            </div>
<h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
    <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Code Faster</span>
    <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">Build Better</span>
    <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">With CodeFlow AI</span>
</h1>

<p className="text-white text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
Accelerate your development workflow with intelligent code 
completion, automated testing, and smart debugging. Ship 
production-ready code 10x faster
</p>

<div className="flex flex-col sm:flex-row  items-center lg:justify-start gap-3 lg:gap-4 mb-8 sm:mb-12 animate-in slid-in-from-bottom duration-700 delay-300">

  <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 ">
    <span >Start Coding Free</span>
  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
  </button>

  <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2 ">
    <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
  
      <Play  className="w-4 h-4 sm:w-5 sm:h-5 fill-white"/>
  
      </div>
  
  <span>Watch Demo</span>
  
  </button>

</div>

        </div>
      {/* IDE */}
      <div className="relative order-2 w-full max-w-3xl">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">

          {/* IDE Window */}
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5">

            {/* IDE Header */}
          <div className="flex items-center px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">

  {/* Window buttons + title */}
  <div className="flex items-center gap-3">

    <div className="flex items-center space-x-1 sm:space-x-2">
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
    </div>

    <span className="text-xs sm:text-sm text-gray-300">
      CodeFlow AI
    </span>

  </div>

  {/* Right icon */}
  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 ml-auto" />

</div>

            {/* IDE Content */}
            <div className="p-3 sm:p-4 relative h-full">

              {/* File Tabs */}
              <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">

                {/* App.jsx */}
                <button  onClick={() => setActiveTab("App.jsx")}
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border transition-all duration-200 whitespace-nowrap 
                    ${  activeTab === "App.jsx"
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                  }`}>
                  App.jsx
                </button>

                {/* Hero.jsx */}
                <button                     onClick={() => setActiveTab("Hero.jsx")}
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border transition-all duration-200 whitespace-nowrap ${
                    activeTab === "Hero.jsx"
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  Hero.jsx
                </button>

                {/* Navbar.jsx */}
                <button                     onClick={() => setActiveTab("Navbar.jsx")}

                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border transition-all duration-200 whitespace-nowrap ${
                    activeTab === "Navbar.jsx"
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  Navbar.jsx
                </button>

              </div>
              
              <div className="relative overflow-hidden flex-grow">
                <SyntaxHighlighter language="javascript" style={nightOwl} customStyle={{margin:0 , borderRadius:"8px" , fontSize:"11px", lineHeight:"1.4" , height:"%100", border:"1px solid #3c3c3c"}}>
{codeExample[activeTab]}
                </SyntaxHighlighter>
              </div>

            </div>
          </div>
          <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${floatingCards[activeTab].bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}>
<div className="flex items-center space-x-2 mb-2">
<div className={`w-6 h-6 ${floatingCards[activeTab].iconColor} flex items-center justify-center text-sm font-bold`}>{floatingCards[activeTab].icon}</div>
<span className={`text-sm font-medium ${floatingCards[activeTab].textColor}`}>{floatingCards[activeTab].title}</span>
</div>
<div className={`text-sm text-left ${floatingCards[activeTab].contentColor}`}>
    {floatingCards[activeTab].content}
</div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}