import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../assets/frontend.json"; // place your lottie file here
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-center items-center bg-base-100"
    >
      <div className="md:w-1/2 p-6 space-y-6">
        <h1 className="text-4xl font-bold">Hi, I'm MD Bulbul Hasan</h1>
        <Typewriter
          options={{
            strings: ["Frontend Based | MERN Stack Developer"],
            autoStart: true,
            loop: true,
          }}
        />
        <p>
          Building performant, scalable, and elegant web applications to turn
          ideas into impactful digital solutions.
        </p>
        <div className="space-x-4">
          <a
            href="https://drive.google.com/file/d/1nlC5IwyiGZqgLNaiKmSvz3WXDelxNu7z/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FaDownload className="mr-2" /> Download CV
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
      <div className="md:w-1/2 w-full p-6">
        <Player
          autoplay
          loop
          src={animationData}
          style={{ height: "800px", width: "500px" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
