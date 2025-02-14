import React from 'react'
import './Home.css'

function Home({image, images, imagess,imaged}) {
  return (
    <div className='container'>
       <h1 style={{marginLeft:'60px', fontWeight:'700', fontSize:'72px '}} >Design your <br /> interor with high <br /> quality.</h1>
       <img src={image} className='img'/>
      <img src={images} className='surot' />
      <img src={imagess} className='ksurot' />
      <img src={imaged} className='msurot'  />
      <h2 style={{marginTop:'160px'}}>ABOUT</h2>
      <img src={image} style={{marginLeft:'100px'}} />
      <p style={{fontWeight:'600',fontSize:'36px'}}>“We're one of the best furniture agency. Prioritizing customers <br /> and making purchases easy are the hallmarks of our agency.”</p>
    </div>
  )
}

export default Home











