import React, { useEffect, useState, useRef } from "react";
import Vid1 from "../assets/images/vid-1.mp4";
import Vid2 from "../assets/images/vid-2.mp4";
import Vid3 from "../assets/images/vid-3.mp4";
import Vid4 from "../assets/images/vid-4.mp4";
import Vid5 from "../assets/images/vid-5.mp4";

const Homex = () => {
  //   let videoBtn = document.querySelectorAll(".vid-btn");

  //   videoBtn.forEach((btn) => {
  //     btn.addEventListener("click", () => {
  //       console.log("123");
  //       document.querySelector(".controls .active").classList.remove("active");
  //       btn.classList.add("active");
  //       let src = btn.getAttribute("data-src");
  //       document.querySelector("#video-slider").src = src;
  //     });
  //   });

  const [activeVideo, setActiveVideo] = useState(Vid1);
  const videos = [
    { id: 0, src: Vid1 },
    { id: 1, src: Vid2 },
    { id: 2, src: Vid3 },
    { id: 3, src: Vid4 },
    { id: 4, src: Vid5 },
  ];

  const playVideo = (x) => {
    setActiveVideo(x.src);
  };

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>adventure is worthwhile</h3>
        <p>dicover new places with us, adventure awaits</p>
        <a href="#" className="btn">
          discover more
        </a>
      </div>

      <div className="controls">
        {videos.map((x, index) => (
          <span
            key={x.id}
            // className="vid-btn"
            className={x.src === activeVideo ? "vid-btn active" : "vid-btn"}
            data-src={x.src}
            // onClick={() => setActiveVideo(x.src)}
            onClick={() => playVideo(x)}
          ></span>
        ))}
        {/* 
        <span
          className="vid-btn"
          data-src={require("../assets/images/vid-2.mp4")}
          //   onClick={() => setActiveVideo(Vid2)}
        ></span>
        <span
          className="vid-btn"
          src={require("../assets/images/vid-3.mp4")}
        ></span>
        <span
          className="vid-btn"
          data-src={require("../assets/images/vid-4.mp4")}
          //   onClick={() => handleVideo(4)}
        ></span>
        <span
          className="vid-btn"
          data-src={require("../assets/images/vid-5.mp4")}
          //   onClick={() => handleVideo(5)}
        ></span>*/}
      </div>

      <div className="video-container">
        <video id="video-slider" loop autoPlay muted src={activeVideo}>
          {/* <source
            // src={require("../assets/images/vid-1.mp4")}
            src={activeVideo}
            type="video/mp4"
          /> */}
        </video>
      </div>
    </section>
  );
};

export default Homex;
