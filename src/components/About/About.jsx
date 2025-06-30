import React from "react";
import { Link } from "react-scroll";
import aboutImg from "../../assets/DP.jpg"

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row justify-center items-center bg-base-200 px-4 py-16 shadow-2xl"
    >
      <div className="md:w-1/2 p-6 flex justify-center">
        <img
          src={aboutImg} // replace with your actual profile photo url or import locally
          alt="Md Bulbul Hasan"
          className="rounded-full w-72 h-72 object-cover shadow-2xl"
        />
      </div>
      <div className="md:w-1/2 p-6 space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg">
          Hello, I’m{" "}
          <span className="text-primary font-semibold">MD Bulbul Hasan</span>, a
          passionate MERN Stack Developer focused on crafting responsive,
          scalable, and user-centric web applications.
        </p>
        <p className="text-lg">
          My mission is to turn complex problems into simple, beautiful, and
          intuitive designs and code that drive results. I continuously enhance
          my skills to deliver high-quality solutions that create real impact
          for businesses and users.
        </p>
        <p className="text-lg">
          Currently, I am learning advanced React and Next.js to build robust
          applications, aiming to contribute effectively in a professional team
          as a Frontend or MERN Stack Developer.
        </p>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="btn btn-primary mt-4 w-fit"
        >
          View My Projects
        </Link>
      </div>
    </section>
  );
};

export default About;
