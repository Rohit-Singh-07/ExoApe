import React from "react";

const PlayReel = () => {
  return (
    <div className="bg-black h-[100vh] w-full flex flex-col items-center justify-between py-[20vw] sm:py-[5vw]">
      <h1>Work in motion</h1>
      <div className="relative w-full flex justify-center items-center">
        <video
          autoPlay
          muted
          loop
          className="w-[40vw]"
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
        <h1 className="flex justify-between items-center absolute w-[87vw] text-[18vw]">
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
