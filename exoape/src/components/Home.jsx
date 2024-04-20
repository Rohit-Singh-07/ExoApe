import React, { useEffect, useState, useRef, } from "react";
import NavBar from "./NavBar";
import { FaArrowDownLong } from "react-icons/fa6";
import { GiStarShuriken } from "react-icons/gi";
import { motion } from "framer-motion";
import { gsap, Power4, ScrollTrigger } from "gsap/all";

const Home = () => {
  const scrollStyle = {
    msOverflowStyle: "none", // IE and Edge
    scrollbarWidth: "none", // Firefox
    WebkitScrollbar: { display: "none" }, // Hide scrollbar for Chrome, Safari, and Opera
  };

  const parent = useRef(null)
  const imagediv = useRef(null)

  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    !isLargeScreen && gsap.to(imagediv.current, {
      scrollTrigger: {
        trigger: parent.current,
        end: "50% top",
        scrub: 1,
        pin: true,
      },
      scale:1.3,
      ease: Power4,
    })

    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 600); 
    };

    checkScreenSize();
    // console.log(isLargeScreen)

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isLargeScreen]);

  return (
    <div  style={scrollStyle}>
      <NavBar />
     <div ref={parent} className="overflow-hidden">
        {isLargeScreen? (
          <img
            data-scroll
            data-scroll-speed="-1.5"
            className="w-[100vw] object-cover relative z-0 sm:h-full h-screen"
            src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
            alt=""
          />
        ): <div ref={imagediv} className="w-[100vw] flex justify-center"><img
        className="w-full object-cover relative z-0 sm:h-full h-screen"
        src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
        alt=""
      /></div>}
       
      </div>

      <div
        className="absolute top-0 sm:h-[255vh] h-full w-full px-[7vw] sm:overflow-hidden"
        style={scrollStyle}
      >
        <motion.div className="mt-72 text-[4.8vw] sm:text-[2vw] sm:py-[5vw]">
          {[
            "Global digital design studio partnering",
            "with brands and businesses that create",
            "exceptional experiences where people",
            "live, work, and unwind.",
          ].map((elem, idx) => (
            <motion.div
            key={idx}
             className=" overflow-hidden">
              <motion.p
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.3 * idx, duration: 1 }}
              >
                {elem}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-4 sm:mt-0">
        {["Digital", "Design", "Experience"].map((elem, idx) => (
          <div key={idx} className="overflow-hidden sm:overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 45 }}
              animate={{ opacity: 1, y: 0, rotate: 0, transformOrigin: "left" }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-[15vw] font-semibold flex flex-col gap-0 sm:gap-[10vw]"
            >
              <h1 className="sm:h-52 h-16 flex items-end sm:inline-block">{elem}</h1>
            </motion.div>
          </div>
        ))}
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
        <div className=" sm:flex justify-between">
          <div>
            <div className="overflow-hidden h-fit"><motion.h1 
            initial={{ opacity: 0, y: 200, rotate: 45 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, transformOrigin: "left" }}
            viewport={{once: true}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-[18vw]">Work</motion.h1></div>
            <p>
              Highlights of cases that we passionately built with
              forward-thinking clients and friends over the years.
            </p>
          </div>
          <div
          data-scroll
          data-scroll-speed="0.2"
           className="relative w-full sm:w-[30vw] h-[100vw] sm:h-[50vw] py-10">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"
            ></video>
            <a href="https://www.exoape.com/work/rino-pelle">
              <img
                className="w-full h-full absolute top-0 hover:opacity-0 object-cover hidden sm:inline-block"
                src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/2400x2990/filters:quality(80)"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
