import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const SkillData = [
  {
    skill: "MongoDB",
    emoji: "🛢",
  },
  {
    skill: "Express",
    emoji: "📲",
  },
  {
    skill: "React",
    emoji: "🖼",
  },
  {
    skill: "Node.js",
    emoji: "🛠",
  },
  {
    skill: "Python",
    emoji: "🐍",
  },
  {
    skill: "JavaScript",
    emoji: "📡",
  },
  {
    skill: "Smart Contract",
    emoji: "🎭",
  },
];

function App() {
  return (
    <div className="container">
      <ProfilePicture />
      <div className="info">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function ProfilePicture() {
  return (
    <img
      className="profilePicture"
      src="profile_photo.jpg"
      alt="Bryan Conquer"
    />
  );
}

function Intro() {
  return (
    <div className="intro">
      <h1>Bryan Conquer</h1>
      <p>
        I'm a Software Engineer Opt at mangaing development life cycle from
        scratch to full production.
      </p>
    </div>
  );
}

function SkillList() {
  const skilldata = SkillData;

  return (
    <div className="skillList">
      <h2>Tech Stack</h2>
      <li>
      {skilldata.map((objData) => (
        <Skills skill={objData.skill} emoji={objData.emoji} />
      ))}
      </li>
    </div>
  );
}

function Skills(props) {
  return (
    <div className="skill">
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
