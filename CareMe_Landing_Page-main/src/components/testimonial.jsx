import React, { useRef, useState, useEffect } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";
import "../assets/styles/testimonial.css"; // Create a separate CSS file for styling
import video from "../assets/images/intro.mp4"; // Replace with your actual video path
import pictureofprofile from "../assets/images/profile.png"; // Path to your thumbnail image
import stars from "../assets/images/Group 10.png"; // Path to your thumbnail image
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS for styles

// News Section Component
const Testimonials = () => {
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
    <section id="news" className="news-section-t">
      <div className="news-container" data-aos="fade-up">
        <h3 data-aos="fade-up" data-aos-delay="100">Testimonial</h3>
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
        <div className="box">
          <div className="profilewithtopics">
            <img src={pictureofprofile} alt="" className="proflep"/>
          <h5 className="profnme">Ken William</h5>
          </div>
          <p className="newsdescription">"CareMe Health provided exceptional
                nursing care for my father after
                surgery. 
                Their service was outstanding!"</p>
          <img src={stars} alt="" />
        </div>
        <div className="box">
          
          <div className="profilewithtopics">
          <img src={pictureofprofile} alt="" className="proflep"/>
          <h5 className="profnme">Ken William</h5>
          </div>
          <p className="newsdescription">"CareMe Health provided exceptional
                nursing care for my father after
                surgery. 
                Their service was outstanding!"</p>
          <img src={stars} alt="" />
       </div>
        <div className="box">
          <div className="profilewithtopics">
          <img src={pictureofprofile} alt=""  className="proflep"/>
          <h5 className="profnme">Ken William</h5>
          </div>
          <p className="newsdescription">"Experience professional support tailored to patient health and comforttailored to patient health and comfort"</p>
          <img src={stars} alt="" />
       </div>
      </div>

      


      </div>
    </section>
  );
};

export default Testimonials;
