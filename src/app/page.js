// import { Metadata } from "next";
// import Image from "next/image";
// import Navbar from "../components/Navbar";
// import Hero from "../components/Home/Hero";
// import AboutUs from "../components/Home/AboutUs";
// import Services from "../components/Home/Services";
// import CaseStudies from "../components/Home/CaseStudies";
// import CallToAction from "../components/Home/CallToAction";
// import Stats from "../components/Home/Stats";
// import Footer from "../components/Footer";

// export default function Page() {
//   return (
//     <div>
//       <main>
//         <Navbar />
//         <Hero />
//         <AboutUs />
//         <Services />
//         <Stats />
//         <CaseStudies />
//         <CallToAction />
//         <Footer />
//       </main>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { Mail, Twitter, Linkedin, ArrowRight } from "lucide-react";

const MESSAGES = [
  "Thinking beyond boundaries.",
  "Learning from every interaction.",
  "Adapting to your needs.",
  "Evolving continuously.",
];

const AGENTS = [
  {
    id: 1,
    name: "Alpha",
    x: -150,
    y: -100,
    z: 40,
    color: "#7C3AED",
    secondary: "#C4B5FD",
    accent: "#4C1D95",
    role: "Guardian",
    frequency: 0.02,
  },
  {
    id: 2,
    name: "Beta",
    x: 0,
    y: -50,
    z: 60,
    color: "#6D28D9",
    secondary: "#DDD6FE",
    accent: "#5B21B6",
    role: "Commander",
    frequency: 0.025,
  },
  {
    id: 3,
    name: "Gamma",
    x: 150,
    y: -100,
    z: 40,
    color: "#5B21B6",
    secondary: "#EDE9FE",
    accent: "#4C1D95",
    role: "Scout",
    frequency: 0.03,
  },
  {
    id: 4,
    name: "Delta",
    x: -100,
    y: 100,
    z: 30,
    color: "#4C1D95",
    secondary: "#F5F3FF",
    accent: "#6D28D9",
    role: "Tactician",
    frequency: 0.022,
  },
  {
    id: 5,
    name: "Epsilon",
    x: 100,
    y: 100,
    z: 30,
    color: "#6D28D9",
    secondary: "#DDD6FE",
    accent: "#7C3AED",
    role: "Strategist",
    frequency: 0.028,
  },
];

const AdvancedRoboticNetwork = () => {
  const [time, setTime] = useState(0);
  const [activeAgent, setActiveAgent] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => t + 1);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const isoProject = (x, y, z) => {
    const isoX = (x - y) * Math.cos(0.523599);
    const isoY = (x + y) * Math.sin(0.523599) - z;
    return [isoX, isoY];
  };

  const generateEnhancedDNAPath = (startX, startY, endX, endY, phase = 0) => {
    const dx = endX - startX;
    const dy = endY - startY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const steps = Math.floor(distance / 15);
    let path = "";

    for (let strand = 0; strand < 2; strand++) {
      const points = [];
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const x = startX + dx * t;
        const y = startY + dy * t;

        const wave1 =
          Math.sin(t * Math.PI * 6 + time / 10 + phase + strand * Math.PI) * 15;
        const wave2 =
          Math.cos(t * Math.PI * 6 + time / 10 + phase + strand * Math.PI) * 15;

        points.push(`${x + wave1},${y + wave2}`);
      }
      path += `M ${points.join(" L ")} `;
    }

    return path;
  };

  return (
    <svg viewBox="-400 -300 800 600" className="w-full h-full">
      <defs>
        <filter id="enhancedGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 18 -7"
          />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {AGENTS.map((agent) => (
          <React.Fragment key={`defs-${agent.id}`}>
            <radialGradient id={`robotGradient-${agent.id}`}>
              <stop offset="0%" stopColor={agent.secondary} stopOpacity="0.9" />
              <stop offset="60%" stopColor={agent.color} stopOpacity="0.7" />
              <stop offset="100%" stopColor={agent.accent} stopOpacity="0.1" />
            </radialGradient>

            <radialGradient id={`platformGradient-${agent.id}`}>
              <stop offset="0%" stopColor={agent.secondary} stopOpacity="0.4" />
              <stop offset="70%" stopColor={agent.color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={agent.accent} stopOpacity="0" />
            </radialGradient>
          </React.Fragment>
        ))}

        <g id="advancedRobot">
          <path
            d="M -25 0
               C -23 -35, 23 -35, 25 0
               C 23 35, -23 35, -25 0 Z"
            className="robot-core"
          />

          <path
            d="M -20 -25
               L -15 -30
               L 15 -30
               L 20 -25
               L 15 10
               L -15 10 Z"
            className="robot-chest"
          />

          <path
            d="M -15 -35
               C -13 -45, 13 -45, 15 -35
               L 12 -25
               L -12 -25 Z"
            className="robot-head"
          />

          <path
            d="M -10 -38
               C -8 -42, 8 -42, 10 -38
               L 8 -35
               L -8 -35 Z"
            className="robot-visor"
          />

          <circle cx="0" cy="0" r="8" className="robot-core" />

          <path
            d="M -18 -15 L 18 -15
               M -15 0 L 15 0
               M -18 15 L 18 15"
            className="robot-details"
            strokeWidth="0.5"
          />
        </g>

        <g id="advancedLimb">
          <path
            d="M -4 0
               C -6 10, -6 20, -3 30
               L 3 30
               C 6 20, 6 10, 4 0 Z"
            className="robot-limb"
          />
          <circle cx="0" cy="10" r="2" className="joint" />
          <circle cx="0" cy="20" r="2" className="joint" />
        </g>
      </defs>

      {activeAgent !== null &&
        AGENTS.map((fromAgent, i) => {
          if (i === activeAgent) {
            return AGENTS.map((toAgent, j) => {
              if (j === i) return null;
              const [startX, startY] = isoProject(
                fromAgent.x,
                fromAgent.y,
                fromAgent.z
              );
              const [endX, endY] = isoProject(toAgent.x, toAgent.y, toAgent.z);

              return (
                <g key={`connection-${i}-${j}`}>
                  {[0, Math.PI / 6, Math.PI / 3].map((phase, k) => (
                    <path
                      key={`strand-${k}`}
                      d={generateEnhancedDNAPath(
                        startX,
                        startY,
                        endX,
                        endY,
                        phase
                      )}
                      fill="none"
                      stroke={`url(#robotGradient-${fromAgent.id})`}
                      strokeWidth={2 - k * 0.5}
                      opacity={0.6 - k * 0.15}
                      filter="url(#enhancedGlow)"
                    />
                  ))}

                  {[0, 0.5, 1].map((delay, k) => (
                    <circle
                      key={`pulse-${k}`}
                      r={4 - k}
                      fill={fromAgent.color}
                      filter="url(#enhancedGlow)"
                      opacity={0.8 - k * 0.2}
                    >
                      <animateMotion
                        dur={`${2 + k * 0.5}s`}
                        repeatCount="indefinite"
                        path={`M ${startX},${startY} L ${endX},${endY}`}
                        begin={`${delay}s`}
                      />
                    </circle>
                  ))}
                </g>
              );
            });
          }
          return null;
        })}

      {AGENTS.map((agent, i) => {
        const [x, y] = isoProject(agent.x, agent.y, agent.z);
        const isActive = activeAgent === i;

        return (
          <g
            key={`agent-${i}`}
            transform={`translate(${x}, ${y})`}
            onMouseEnter={() => {
              setActiveAgent(i);
            }}
            onMouseLeave={() => {
              setActiveAgent(null);
            }}
            style={{ cursor: "pointer" }}
          >
            <g>
              {[40, 35, 30].map((radius, j) => (
                <circle
                  key={`platform-${j}`}
                  r={isActive ? radius + 5 : radius}
                  fill={`url(#platformGradient-${agent.id})`}
                  opacity={0.3 - j * 0.1}
                  filter="url(#enhancedGlow)"
                >
                  <animate
                    attributeName="r"
                    values={`${radius};${radius + 5};${radius}`}
                    dur={`${2 + j * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </g>

            <g transform={`scale(${isActive ? 1.1 : 1})`}>
              <use
                href="#advancedRobot"
                fill={`url(#robotGradient-${agent.id})`}
                stroke={agent.secondary}
                strokeWidth="0.5"
                filter="url(#enhancedGlow)"
              >
                <animate
                  attributeName="transform"
                  values={`translate(0,0);translate(0,${
                    isActive ? -8 : -5
                  });translate(0,0)`}
                  dur="2s"
                  repeatCount="indefinite"
                />
              </use>

              {[-1, 1].map((side) => (
                <React.Fragment key={`limbs-${side}`}>
                  <use
                    href="#advancedLimb"
                    transform={`translate(${20 * side}, -15) rotate(${
                      20 * side * Math.sin(time * agent.frequency)
                    })`}
                    fill={agent.color}
                    stroke={agent.secondary}
                  />
                  <use
                    href="#advancedLimb"
                    transform={`translate(${10 * side}, 25) rotate(${
                      10 * side * Math.sin(time * agent.frequency + Math.PI)
                    })`}
                    fill={agent.color}
                    stroke={agent.secondary}
                  />
                </React.Fragment>
              ))}
            </g>

            {[8, 6, 4].map((radius, j) => (
              <circle
                key={`core-${j}`}
                r={isActive ? radius + 2 : radius}
                fill={agent.secondary}
                filter="url(#enhancedGlow)"
                opacity={0.8 - j * 0.2}
              >
                <animate
                  attributeName="r"
                  values={`${radius};${radius + 2};${radius}`}
                  dur={`${1 + j * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>
        );
      })}
    </svg>
  );
};

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMessage, setActiveMessage] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const messageInterval = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % MESSAGES.length);
    }, 3000);

    return () => {
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute blur-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0) 70%)",
              transform: "translate(-50%, -50%)",
              animation: `float ${8 + i * 2}s infinite alternate ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />

      {/* Main Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Advanced Robotic Network */}
          <div className="relative h-[400px] w-full mx-auto">
            <AdvancedRoboticNetwork />
          </div>

          {/* Main Text */}
          <div className="space-y-4">
            <h1 className="text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient-x">
              Holic AI
            </h1>
            <p className="text-4xl font-light text-gray-600 max-w-2xl mx-auto">
              Your thoughts, amplified.
            </p>
            <div className="h-8 relative overflow-hidden">
              {MESSAGES.map((message, index) => (
                <p
                  key={index}
                  className={`absolute w-full text-lg text-gray-500 transition-all duration-500 transform ${
                    index === activeMessage
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {message}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-8">
            <a
              href="mailto:aaryan7@stanford.edu"
              className="group relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-md transition-all duration-500 ${
                  isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
                }`}
              />
              <div className="relative flex items-center space-x-4 px-8 py-4 bg-white rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all duration-300 glow-border-container">
                <Mail
                  className={`w-6 h-6 ${
                    isHovered ? "text-blue-400" : "text-gray-400"
                  } transition-colors duration-300`}
                />
                <span className="text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  aaryan7@stanford.edu
                </span>
                <ArrowRight
                  className={`w-5 h-5 transform transition-all duration-300 ${
                    isHovered ? "translate-x-1 text-blue-400" : "text-gray-400"
                  }`}
                />
              </div>
            </a>

            {/* <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/company/holicai"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 rounded-full bg-white border border-blue-500/20 text-gray-400 hover:text-blue-400 hover:border-blue-400/40 hover:scale-110 transition-all duration-300 glow-border-container"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/holicai"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 rounded-full bg-white border border-blue-500/20 text-gray-400 hover:text-blue-400 hover:border-blue-400/40 hover:scale-110 transition-all duration-300 glow-border-container"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) translate(20px, 20px) rotate(5deg);
          }
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .glow-border-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            #3b82f6,
            #8b5cf6,
            #3b82f6,
            transparent
          );
          background-size: 200% 100%;
          animation: glow-line 4s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        @keyframes glow-line {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
