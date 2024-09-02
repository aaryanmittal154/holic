// pages/work-experience.js
"use client";
import React from "react";

export default function WorkExperience() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-8 lg:px-20 py-16 relative">
      {/* Rotated 'WORK' text on the left */}
      <div className="absolute text-white text-8xl font-extrabold transform -rotate-90 top-1/2 left-2 lg:left-8 origin-center z-0 opacity-10">
        WORK
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl w-full">
        {/* Greeting for Greylock with a waving hand */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-white font-bold flex items-center justify-center">
            Hi Greylock Edge Team! <span className="animate-wave ml-2">👋</span>
          </h1>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            I created this page to give you a clearer picture of my journey.
          </p>
        </div>

        {/* Timeline of Work Experiences */}
        <div className="pl-8 space-y-12">
          {workExperiences.map((experience, index) => (
            <TimelineItem key={index} {...experience} />
          ))}
        </div>
      </div>

      {/* Inline CSS for hover effects and animations */}
      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-scale:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
        }

        /* Waving hand animation */
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .animate-wave {
          display: inline-block;
          animation: wave 2s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </div>
  );
}

// Data for work experiences
const workExperiences = [
  {
    company: "LET'S MOD",
    role: "Engineering Intern",
    duration: "Jun 2024 – Aug 2024",
    link: "https://letsmod.com/",
    description:
      "I got this internship through networking with a highly established Silicon Valley entrepreneur, Mr. Kamran Elahian. At LetsMOD, my primary focus was on automating the workflow for creating 3D character heads using AI, which streamlined the process and reduced manual effort. Additionally, I played a crucial role in managing the Discord server, which was integrated with the company’s systems to build AI-generated 3D memes, similar to Midjourney. During my time at LetsMOD, the company filed its third patent, related to Company AI, an area I was actively involved in exploring.",
  },
  {
    company: "FFKART",
    role: "Chief Operating Officer",
    duration: "Oct 2023 - Mar 2024",
    link: "https://ffkart.com/",
    description:
      "Built a B2B e-commerce platform from ground up with three other cofounders. FFKart simplified the supply chain for B2B agricultural products delivery within four hours with making a marketplace for all the Suppliers. I worked on the website frontend, personally interviewed over 100 employees and hired over 10 employees. I immersed myself in every aspect of the operations, including the labor-intensive tasks of procuring products directly from wholesale markets. I studied various supply-chain courses and made the operations efficient. Additionally, I also managed the finance for the startup. We would do delivery worth 3000 USD by the end of the second month of operations. The startup got closed as my other two co-founders turned out to have lied their backgrounds and experience. They used these fabrications to manipulate business decisions and gain majority control.",
  },
  {
    company: "PROJECT NEUTRALIZE",
    role: "Co-Founder",
    duration: "Jun 2023 – Oct 2023",
    link: "https://projectneutralize.com/",
    description:
      "We initially came up with a complex idea to track carbon emissions in real-time by gaining full access to mobile data. However, after pitching to 10 VCs, one challenged us to simplify our approach and focus on providing a meaningful user experience by removing carbon guilt through tree planting. This feedback prompted us to pivot and develop a basic digital carbon calculator, which we launched within a week on a $10 budget. We cold emailed professors at Stanford and Berkeley, who generously provided us with essential resources to build the calculator for free. We then actively promoted Project Neutralize at environmental events across the Bay Area, directly engaging with users. The website is still active but I do not work actively on it.",
  },
  {
    company: "HOLIC AI",
    role: "Founder",
    duration: "Dec 2022 - Oct 2023",
    link: "https://holic.ai/",
    description:
      "I started as a freelancer building websites for people, which later turned into HolicAI. With ChatGPT freshly released, my productivity boosted 10x while building these websites. This realization led me to create a course aimed at helping beginners build websites quickly(in one week) using ChatGPT. Although I initially struggled with sales, I quickly learned the importance of understanding customer needs and refined my pitch.",
  },
  {
    company: "DirectRep",
    role: "Software Project",
    duration: "Nov 2022 - Dec 2022",
    link: "https://gitlab.com/aaryanmittal154/direct-rep",
    description:
      "As a Full Stack Software Engineer at DirectRep with three other teammates, I developed an application that helps citizens voice their concerns through AI-generated letters to their elected representatives. I led the team in designing the application’s architecture and workflow using Justinmind Application, and I implemented FastAPI microservices for model development. I also managed the PostgreSQL database for users and letters, and created a seamless user interface using React. Additionally, I developed APIs for generating location-based data and AI-generated letters, and configured user authentication to enhance privacy and provide a personalized user experience.",
  },
  {
    company: "GLOVES TRADING",
    role: "Co-Founder",
    duration: "Jun 2019 - Aug 2019",
    description:
      "I was in 9th grade and my cousin and I came up with the idea of glove trading business. We noticed that local retailers were charging high markups on gloves, so we decided to cut out the middleman. By buying directly from a small manufacturer, we offered a better price to the manufacturing industry with zero need for inventory space. Running the business over the summer, we managed to turn a profit of 20,000 INR with no initial investment. It also made me realise, the importance of negotiation and hustle required to keep a business running.",
  },
];

function TimelineItem({ company, role, duration, link, description }) {
  return (
    <div className="relative">
      {/* Content Box */}
      <div className="bg-black border border-gray-700 p-6 rounded-lg shadow-lg hover-scale">
        <h2 className="text-2xl text-white font-bold">{company}</h2>
        <h3 className="text-lg text-gray-400 mb-2">
          {role} ({duration})
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 text-sm underline mb-4 inline-block"
          >
            {link}
          </a>
        )}
        <p className="text-gray-300 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
