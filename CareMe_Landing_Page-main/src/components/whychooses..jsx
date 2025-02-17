import React, { useRef, useState, useEffect } from "react";
import "../assets/styles/whychooses.css"; // Create a separate CSS file for styling
import video from "../assets/images/intro.mp4"; // Replace with your actual video path
import pictureofprofile from "../assets/images/profile.png"; // Path to your thumbnail image
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS for styles
import iconnnn1 from "../assets/images/Vector-1.svg"; // Path to your thumbnail image
import iconnnn2 from "../assets/images/Vector-2.svg"; // Path to your thumbnail image
import iconnnn33 from "../assets/images/Vector-3.svg"; // Path to your thumbnail image
import iconnnn4 from "../assets/images/Vector-4.svg"; // Path to your thumbnail image
import iconnnn5 from "../assets/images/Vector.svg"; // Path to your thumbnail image


// News Section Component
const Whychooses = () => {
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
    <section id="news" className="why-section-t">
      <div className="news-container" data-aos="fade-up">
        <h3 data-aos="fade-up" data-aos-delay="100" className="headermainwhyy">Why Choose CareMe Health?</h3>

      {/* Three Equal Boxes in a Row */}
      <div className="box-wh-container">


      <div className="box-wh-container-1stcol">
        <div className="box-why1">
          <div className="whyboxmain">
            <img src={iconnnn2} alt="" className="whybiximagee"/>
          <h5 className="profnmee">Licensed Nurses & Trained Caregivers</h5>
          <p className="newsdescriptionn">Certified professionals delivering top-quality care</p>
          </div>
        </div>
        
        <div className="box-why1">
          
          <div className="whyboxmain">
          <img src={iconnnn33} alt="" className="whybiximagee" />
          <h5 className="profnmee">Customized Care Plans</h5>
          <p className="newsdescriptionn">Certified professionals delivering top-quality care</p>
          </div>
          
       </div>
       
        <div className="box-why1">
          <div className="whyboxmain">
          <img src={iconnnn4} alt="" className="whybiximagee" />
          <h5 className="profnmee">Affordable & Flexible Pricing</h5>
          <p className="newsdescriptionn">Certified professionals delivering top-quality care</p>
          </div>
        
       </div>

      </div>
      <div className="box-wh-container-2stcol" >
        <div className="box-why1">
          <div className="whyboxmain">
          <img src={iconnnn5} alt="" className="whybiximagee"/>
          <h5 className="profnmee">24/7 Availability</h5>
          <p className="newsdescriptionn">Immediate support for hospital
                                          or home care needs</p>
          </div>
          
       </div>
 
       <div className="box-why1">
          <div className="whyboxmain">
          <img src={iconnnn1} alt="" className="whybiximagee"/>
          <h5 className="profnmee">Trusted & Verified Staff</h5>
          <p className="newsdescriptionn">Certified professionals delivering top-quality care</p>
          </div>
          
       </div>
      </div>
        
       
       
       

      </div>
      

      


      </div>
    </section>
  );
};

export default Whychooses;
