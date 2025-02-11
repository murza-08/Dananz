import React from 'react'
import './Minimalist.css'
import art1 from '../../assets/Minimalist/Maskgroup5(2).svg'
import art2 from '../../assets/Minimalist/Maskgroup6.svg'
import art3 from '../../assets/Minimalist/Maskgroup(1).svg'
import art4 from '../../assets/Minimalist/Maskgroup(2).svg'
import art5 from '../../assets/Minimalist/Maskgroup(3).svg'
import art6 from '../../assets/Minimalist/Maskgroup(4).svg'

function Minimalist() {
  return (
    <div className='container'>
      <h1 style={{fontFamily:'700', fontSize:'56px', textAlign:'center', marginTop:'100px'}}>Minimalist Room</h1>
      <p style={{fontFamily:'400', fontSize:'18px', textAlign:'center', marginTop:'40px'}} >It is a long established fact that a reader will be <br /> distracted by the readable content of a page when <br />  looking at its layout.</p>
      <div>
         <img src={art1} style={{marginTop:'53px', marginLeft:'90px'}}  />
         <h3 style={{marginTop:'100px', marginLeft:'85px'}} >Project Overview</h3>
         <p style={{marginTop:'30px' , color:'#9C9C9C' , marginLeft:'85px'}}>Online learning with us does not interfere with your daily life. <br /> because learning can be done anytime and anywhere. Online <br /> learning with us does not interfere with your daily life.  because <br /> learning can be done anytime and anywhere. Online  learning <br /> with us does not interfere with your daily life.  because  learning <br /> can be done anytime and anywhere. </p>
         <h4 style={{marginTop:'60px', color:'#9C9C9C' , marginLeft:'85px'}}>July 22 - 2022</h4>
         <h4 style={{marginLeft:'200px', marginTop:'-20px', color:'#9C9C9C' , marginLeft:'265px'}}>Interior Design - Furnitur</h4>

           <div className='text2' >
         <h3 style={{}}>Design Process</h3>
         <p style={{marginTop:'25px', color:'#9C9C9C'}}>Online learning with us does not interfere with your daily life. <br /> because learning can be done anytime and anywhere. Online <br /> learning with us does not interfere with your daily life.  because <br /> learning can be done anytime and anywhere. Online  learning <br /> with us does not interfere with your daily life.  because  learning <br /> can be done anytime and anywhere. </p>
         <p style={{marginTop:'30px', color:'#9C9C9C'}}>Online learning with us does not interfere with your daily life. <br /> because learning can be done anytime and anywhere. Online <br /> learning with us does not interfere with your daily life.  because <br /> learning can be done anytime and anywhere. Online  learning <br /> with us does not interfere with your daily life.  because  learning <br /> can be done anytime and anywhere. </p>
         </div>

         <div>
            <img src={art2} style={{marginLeft:'85px', marginTop:'60px'}} />
            <img src={art3} style={{marginLeft:'50px'}} />
            <img src={art4} style={{marginLeft:'90px', marginTop:'50px'}} />
            <img src={art5} style={{marginLeft:'85px' , marginTop:'50px'}} />
            <img src={art6} style={{marginLeft:'50px'}} />
         </div>
      </div>

    </div>
  )
}

export default Minimalist
