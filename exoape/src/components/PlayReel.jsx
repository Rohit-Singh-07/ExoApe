import React, { useRef, useEffect } from "react";
import { gsap, Power4, ScrollTrigger } from "gsap/all";

const PlayReel = () => {

  const parent = useRef(null);
  const videodiv = useRef(null);
  const playreel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(videodiv.current, {
      scrollTrigger: {
        trigger: parent.current,
        start: "top top",
        end: "bottom bottom",
        // top: "0 0",
        scrub: 1,
        pin: true,
        // pinSpacing: true,
        // pinType: "y",
        // markers: true,
      },
      width: "104%",
      height: "100%",
      ease: Power4,
    })
    
    gsap.to(playreel.current, {
      scrollTrigger: {
        trigger: parent.current,
        start: "top top",
        end: "bottom bottom",
        // top: "0 0",
        scrub: 1,
        // pin: true,
        // pinSpacing: true,
        // pinType: "y",
      },
      width: "160%",
      height: "160%",
      ease: Power4,
    })
  }, [])

  return (
    <div 
    ref={parent}
    className="bg-black h-[105vh] w-full flex flex-col items-center justify-between py-[20vw] sm:py-[5vw] sm:mb-28">
      <h1>Work in motion</h1>
      <div ref={videodiv} className="relative w-[40vw] flex justify-center items-center">
        <video
          autoPlay
          muted
          loop
          className="w-full"
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>

        <h1 ref={playreel} className="flex justify-between items-center absolute w-[87vw] text-[18vw]">
            <div>Play</div>
            <div>Reel</div>
        </h1>
      </div>
      <p className="w-[80vw] text-center">
        Our work is best experienced in motion. Don’t forget to put on your
        headphones.
      </p>
    </div>
  );
};

export default PlayReel;
