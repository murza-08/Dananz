import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header({image}) {
  return (
    <div className='container' style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: '',
      color: 'white',
      width: '1440px',
      height: '90px'
    }}>
      <img src={image} alt="" style={{marginRight:'1200px'}} />
      <nav className='nav' style={{ display: 'flex', gap: '10px',  }} >
        <Link to="/homePage" style={{ textDecoration: 'none', fontSize: '28px', color: '#333333', marginRight:'10px' }}>Home</Link>
        <Link to="/aboutUsPage" style={{ textDecoration: 'none', fontSize: '28px', color: '#333333' , marginRight:'20px' }}>About Us</Link>
        <Link to="/ServicesPage" style={{ textDecoration: 'none', fontSize: '28px', color: '#333333', marginRight:'30px' }}>Services</Link>
        <Link to="/OurTeamsPage" style={{ textDecoration: 'none', fontSize: '28px', color: '#333333' , marginRight:'40px' }}>Our Teams</Link>
        <Link to="/MinimalistPage" style={{ textDecoration: 'none', fontSize: '28px', color: '#333333' , marginRight:'40px' }}>Minimalist</Link>
        <Link to="/contactPage" style={{ textDecoration: 'none', fontSize: '28px', color: '#FFFFFF', marginLeft:'130px',  paddingTop:'10px', paddingLeft:'10px' , backgroundColor:'#2C3878', width:'142px', height:'49px' }}>Contact Us</Link>
       
       
      </nav>
    </div>
  )
}

export default Header

