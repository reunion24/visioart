"use client";
// import React from 'react';
// import '../style.css'

// const AboutUs = () => {
//     return (
//         <div className="about-us-section">
//             <h2 className="about-us-title">About Us</h2>
//             <p className="about-us-description">
//             Visioart is a production  company 
//             and creative collective,
            
//            developing 
//            a contemporary approach 
//           to production.
//             <br />
//             By enabling direct collaboration between 
//            brands,
//             agencies, 
//             and creators, 
//             we produce diverse outputs across various media formats.
//             </p>
//         </div>
//     );
// }

// export default AboutUs;


import React from 'react';
import './about.css'; // make sure to create this CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-title">ABOUT US</div>
        <div className="about-description">
          <p>VISIOART is a production company and creative collective,</p>
          <p>developing a contemporary approach to production.</p>
          <p>By enabling direct collaboration between</p>
          <p>brands, agencies, and creators,</p>
          <p>we produce diverse outputs across various media formats.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
