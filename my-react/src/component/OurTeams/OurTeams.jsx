import React from 'react';
import './OurTeams.css';
import { teamData } from './Data.jsx';

function OurTeams({ su }) {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', fontWeight: '700', fontSize: '56px', marginTop: '110px' }}>Our Teams</h1>
      <p style={{ textAlign: 'center', fontWeight: '400', fontSize: '18px', marginTop: '36px' }}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </p>
      <img src={su} style={{marginTop:'60px', marginLeft:'90px'}} />
      
    <h4 style={{marginTop:'100px', marginLeft:'60px'}}>Designer</h4>
    <h2 style={{marginTop:'20px', fontWeight:'600', fontSize:'36px' , marginLeft:'60px'}}>Creative Person</h2>
    <p style={{marginTop:'25px', color:'#9C9C9C' , marginLeft:'60px'}} >Customize your interior design into a dream place <br /> with the best designers and quality furniture. We try <br /> our best to fulfill your expectations.</p>
      
      
      
      <div className="card">
        {teamData.map((member) => (
          <div key={member.id}>
            <div className="fon">
              <img src={member.image} className="surottor" alt={member.name} />
            </div>
                 <div className='names'>
            <h2 className="name">{member.name}</h2>
            <h4 className="position">{member.position}</h4>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeams;












