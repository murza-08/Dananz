import React from 'react'
import './AboutUs.css'

function AboutUs({image, images, imagess , art,artt }) {
  return (
    <div className='container'>
      <div>
     <h1 style={{textAlign:'center', fontWeight:'700', fontSize:'56px', marginTop:'110px'}}>About</h1>
     <p style={{textAlign:'center ', fontWeight:'600', fontSize:'18px', marginTop:'40px' }} >It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout.</p>

      <img src={image} style={{marginTop:'86px', marginLeft:'70px'}} />
      <h2 style={{marginTop:'100px'}}>ACHIEVEMENT</h2>
      <img src={images}  style={{marginLeft:'190px'}}/>
       <p className='p2'>interior customization with Danaanz, <br /> best quality with professional workers</p>
       <img src={imagess}/>
       <img src={art}  className='surot'/>
       <img src={artt} className='surot2'/>
       <h4 style={{marginTop:'100px'}}>SERVICE</h4>
       <h2 style={{marginTop:'20px', fontWeight:'600', fontSize:'36px'}}>Why Choose Us</h2>
       <p style={{marginTop:'25px', color:'#9C9C9C'}} >Customize your interior design into a dream place <br /> with the best designers and quality furniture. We try <br /> our best to fulfill your expectations.</p>
     
     </div>
    </div>
  )
}

export default AboutUs
