import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const [activeVideo, setActiveVideo] = useState("");

  //   let videoBtn = document.querySelectorAll(".vid-btn");
  //   useEffect(() => {
  //     videoBtn.forEach((btn) => {
  //       btn.addEventListener("click", () => {
  //         console.log("123");
  //         document.querySelector(".controls .active").classList.remove("active");
  //         btn.classList.add("active");
  //         let src = btn.getAttribute("data-src");
  //         document.querySelector("#video-slider").src = src;
  //       });
  //     });
  //   }, []);

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
        <span
          className="vid-btn active"
          data-src={require("../assets/images/vid-1.mp4")}
        ></span>
        <span
          className="vid-btn"
          data-src={require("../assets/images/vid-2.mp4")}
        ></span>
        <span
          className="vid-btn"
          data-src={require("../assets/images/vid-3.mp4")}
        ></span>
        <span
          className="vid-btn"
          data-src={require("../assets/images/vid-4.mp4")}
        ></span>
        <span
          className="vid-btn"
          data-src={require("../assets/images/vid-5.mp4")}
        ></span>
      </div>

      <div className="video-container">
        <video id="video-slider" loop autoPlay muted>
          <source
            src={require("../assets/images/vid-1.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default Home;
