import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <ProfilePicture />
      <div>
        <Intro />
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
    <div>
      <p>
        I'm Software Engineer Opt at mangaing development life cycle from
        scratch to full production.
      </p>
    </div>
  );
}

function Skills() {
  return <div></div>;
}

// function Skills(objData) {}?
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
