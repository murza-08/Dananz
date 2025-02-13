import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer({ image, images }) {
  const navigate = useNavigate();  
  const ContactClick = () => {
    navigate('/contactPage');  
  };

  return (
    <div className="container">
      <div>
        <div className="block">
          <h1>let's discuss making your interior <br /> like a dream place!</h1>
          <p>Contact us below to work together to build your <br /> amazing interior</p>
          <button onClick={ContactClick}>Contact Us</button>
        </div>

        <div className="block2">
          <img src={image} style={{ marginTop: '100px' }} alt="Furniture" />
          <h1 style={{ fontWeight: '600', fontSize: '38px', fontFamily: 'Poppins' }}>
            One of the best furniture <br /> agencies.
          </h1>
          <h3 style={{ marginLeft: '1000px', marginTop: '-120px' }}>
            <span style={{ fontWeight: '900', fontSize: '58px' }}>.</span> Enter your email to get the latest news
          </h3>
          <input
            type="text"
            placeholder="   Email Address"
            style={{ marginLeft: '1000px', border: 'none', width:'400px', height:'50px' }}
          />
          <h2 style={{ fontWeight: '400', fontSize: '16px', marginLeft: '1100px' }}>Follow us On</h2>
          <img src={images} style={{ marginLeft: '1100px', marginTop: '10px' }} alt="Social Media Icons" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
