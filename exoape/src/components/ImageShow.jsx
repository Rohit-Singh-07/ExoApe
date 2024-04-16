import React from "react";

export default function ImageShow() {
  return (
    <div className="min-h-[135vh] w-full relative text-black flex flex-col justify-between items-center">
      <div className="w-full h-[65vh] sm:h-[100vh] flex justify-center items-center">
        <div className="absolute w-[33vw] sm:w-[28vw] left-[2%]">
          <video
            autoPlay
            loop
            muted
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div className="absolute w-[15vw] sm:w-[12vw] right-[17%] top-[13%]">
          <img
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div className="absolute  w-[31.5vw] sm:w-[20vw] left-0 top-[32%]">
          <img
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div className="absolute  w-[31.5vw] right-0 top-[32%]">
          <video
            autoPlay
            loop
            muted
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <div className="w-[35vw] sm:w-[28vw]">
          <img
            src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center h-[70vh] pb-[10vw] sm:pb-[2vw]">
        <h3>In the media</h3>
        <div className="w-full flex flex-col justify-between items-center text-[17vw] sm:text-[9vw] font-semibold">
        <h1 className="h-[18vw] sm:h-[10vw]">Spread</h1>
        <h1>the News</h1>
        </div>
        <div className="text-center w-[60vw]">
            <p>Find out more about our work on these leading design and technology platforms.</p>
        </div>
        <a className="underline" href="https://www.exoape.com/news">Browse all news</a>
      </div>
    </div>
  );
}
