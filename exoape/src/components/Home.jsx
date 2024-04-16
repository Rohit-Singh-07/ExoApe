import React from "react";
import NavBar from "./NavBar";
import { FaArrowDownLong } from "react-icons/fa6";
import { GiStarShuriken } from "react-icons/gi";

const Home = () => {
  const scrollStyle = {
    msOverflowStyle: "none", // IE and Edge
    scrollbarWidth: "none", // Firefox
    WebkitScrollbar: { display: "none" }, // Hide scrollbar for Chrome, Safari, and Opera
  };

  return (
    <div className="overflow-hidden " style={scrollStyle}>
      <NavBar />
      <img
        className=" w-[100vw] object-cover relative z-0 sm:h-full h-screen"
        src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
        alt=""
      />

      <div
        className="absolute top-0 sm:h-[255vh] h-full w-full px-[7vw] overflow-auto sm:overflow-hidden"
        style={scrollStyle}
      >
        <div className="mt-72 text-[4.8vw] sm:text-[2vw] sm:py-[5vw]">
          <p> Global digital design studio partnering </p>
          <p>with brands and businesses that create </p>
          <p>exceptional experiences where people </p>
          <p>live, work, and unwind. </p>
        </div>

        <div className="text-[15vw] font-semibold flex flex-col gap-0 sm:gap-[10vw]">
          <h1 className="h-16">Digital</h1>
          <h1 className="h-16">Design</h1>
          <h1 className="h-16">Experience</h1>
        </div>

        <div className="py-[10vw] sm:hidden">
          <FaArrowDownLong />
        </div>

        <div>
          <p className="sm:mt-[28vw] sm:w-[35vw] sm:text-[1.6vw] sm:mb-[5vw]">
            <span>
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </span>
          </p>
          <br />

          <a
            className="underline sm:text-[1.4vw]"
            href="https://www.exoape.com/studio"
          >
            The Studio
          </a>
        </div>
      </div>

      <div className="text-black px-[7vw] py-[18vw]">
        <div className="flex gap-2 items-center ">
          <GiStarShuriken />
          <h2>Featured Projects</h2>
        </div>
        <div>
          <div>
          <h1 className="text-[18vw]">Work</h1>
          <p>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;