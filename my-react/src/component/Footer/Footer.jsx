import React from 'react'
import './Footer.css'
function Footer({image ,images}) {
  return (
    <div className='container'>
      <div>  
        <img src={image} style={{marginTop:'100px'}} />

        <h1 style={{   fontWeight: '600', fontSize:'38px', fontFamily: 'Poppins'}}>One of the best furniture <br /> agency.</h1>
        <h3 style={{ marginLeft:'1000px', marginTop:'-120px' }}> <span style={{fontWeight:'900', fontSize:'58px'}}>.</span> Enter  your email to get the laterst news</h3>
        <input type="text" placeholder='Email Address' style={{ marginLeft:'1000px', border:'none'}} />
        <h2 style={{fontWeight:'400', fontSize:'16px', marginLeft:'1100px'}}>Follow us On</h2>
        <img src={images} style={{ marginLeft:'1100px', marginTop:'10px' }} />
        
      </div>
    </div>
  )   
}

export default Footer
