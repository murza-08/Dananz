import React from 'react'
import './Services.css'
function Services({ image, images,imagess,art }) {
  return (
    <div className='container'>
     <h1 style={{textAlign:'center', marginTop:'110px',fontWeight:'700', fontSize:'56px'}}>Services</h1>
     <p style={{textAlign:'center', marginTop:'36px', fontWeight:'400', fontSize:'18px'}}>It is a long established fact that a reader will be <br /> distracted by the readable content of a page when <br /> looking at its layout.</p>
     <img src={image} style={{marginLeft:'50px', marginTop:'60px'}} />
      <h3 style={{marginTop:'100px', marginLeft:'50px'}}>ACHIEVEMENT</h3>
      <img src={images} style={{marginLeft:'50px', marginTop:'150px'}}/>
      <h3 style={{marginLeft:'930px' ,marginTop:'-220px', fontWeight:'600px', fontSize:'24px'}}>Interior design</h3>
      <p style={{ marginLeft:'930px', marginTop:'20px' , color:'#9C9C9C'}}>Customize your interior design into a <br /> dream place with the best designers <br /> and quality furniture. We try our best <br /> to fulfill your expectations.</p>
      <img src={imagess} style={{marginLeft:'50px', marginTop:'150px'}} />
      <h3  style={{ marginLeft:'930px' ,marginTop:'-220px' , fontWeight:'600px', fontSize:'24px'}}>Consultant</h3>
      <p  style={{ marginLeft:'930px',marginTop:'20px' , color:'#9C9C9C'}}>Customize your interior design into a <br /> dream place with the best designers <br /> and quality furniture. We try our best <br /> to fulfill your expectations.</p>
      <img src={art} style={{marginLeft:'50px', marginTop:'150px'}} />
      <h3  style={{ marginLeft:'930px',marginTop:'-220px' , fontWeight:'600px', fontSize:'24px'}}>construction consultant</h3>
      <p  style={{ marginLeft:'930px', marginTop:'20px' , color:'#9C9C9C'}}>Customize your interior design into a <br /> dream place with the best designers <br /> and quality furniture. We try our best <br /> to fulfill your expectations.</p>
    </div>
  )
}

export default Services
