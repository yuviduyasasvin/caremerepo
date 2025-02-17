import React, { useRef, useState, useEffect } from "react";
import "../assets/styles/contactus.css"; // Create a separate CSS file for styling
import Rectangle from "../assets/images/Rectangle 10.png"; // Path to your thumbnail image
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS for styles

// News Section Component
const Contactpge = () => {


  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section id="news" className="conatct-section-t">
        <div className="contactmaincont">
            <h4 className="contactustopic">
                Contact Us
            </h4>
            <input type="text" placeholder="location" className="inputcontactus"/>
            <input type="text" placeholder="phone" className="inputcontactus"/>
            <input type="text" placeholder="e-mail" className="inputcontactus"/>

            <button className="contusssendbut">Send Details</button>
        </div>
        <div>
           
        </div>

    </section>
  );
};

export default Contactpge;
