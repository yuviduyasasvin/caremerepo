import React, { useRef, useState, useEffect } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";
import "../assets/styles/news.css"; // Create a separate CSS file for styling
import video from "../assets/images/intro.mp4"; // Replace with your actual video path
import thumbnail from "../assets/images/employee.png"; // Path to your thumbnail image
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS for styles

// News Section Component
const NewsSection = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State for managing play/pause
  const videoRef = useRef(null);

  // Function to toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section id="news" className="news-section">
      <div className="news-container" data-aos="fade-up">
        <h3 data-aos="fade-up" data-aos-delay="100">How It Works</h3>
        <div className="news-media" data-aos="fade-up" data-aos-delay="400">
          {/* Video with a ref to control play/pause */}
          {/*<video
            ref={videoRef}
            className="news-video"
            src={video}
            type="video/mp4"
            preload="auto"
            poster={thumbnail} // Adding the thumbnail image here
            muted={false}
          />
          <div className="play-button" onClick={togglePlayPause}>
            {isPlaying ? (
              <FaRegCirclePause size={50} color="#5E1F87" />
            ) : (
              <FaRegPlayCircle size={50} color="#5E1F87" />
            )}
          </div> */}
        </div>


              {/* Three Equal Boxes in a Row */}
      <div className="box-container">
        <div className="boxxs">
          <p className="circle-number">1</p>
          <h5>Request a Service</h5>
          <p className="newsdescriptionnssss">Fill out a simple form or call us to book a nurse or caregiver</p>
        </div>
        <div className="boxxs">
          <p className="circle-number">2</p>
          <h5>Get Matched</h5>
          <p className="newsdescriptionnssss">We assign a qualified nurse/caregiver based on your needs</p>
       </div>
        <div className="boxxs">
          <p className="circle-number">3</p>
          <h5>Receive Care</h5>
          <p className="newsdescriptionnssss">Experience professional support tailored to patient health and comfort</p>
       </div>
      </div>

      <button className="callbuttonss">Call Now</button>


      </div>
    </section>
  );
};

export default NewsSection;
