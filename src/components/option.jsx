import React from 'react'
import { Link } from 'react-router-dom'
function Option() {
    const handleEnter=(e)=>{
        e.target.style.backgroundColor="black";
        e.target.style.border="2px solid orangered";
    }
    const handleLeave=(e)=>{
        e.target.style.backgroundColor="orangered";
        e.target.style.border="2px solid black";
    }
  return (

    <div className='d-flex justify-content-center'  style={{backgroundColor:"black",padding:"218px 20px"}}>
      <Link to="/bmi" style={{color:"white",textAlign:"center",backgroundColor:"orangered",margin:"200px 30px",padding:"10px 20px",borderRadius:"15px",fontSize:"18px",border:"2px solid black",textDecoration:"none",alignContent:"center"}}onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}>Bmi</Link>
      <Link to="/fitness" style={{color:"white",textAlign:"center",backgroundColor:"orangered",margin:"200px 30px",padding:"10px 20px",borderRadius:"15px",fontSize:"18px",border:"2px solid black",textDecoration:"none",alignContent:"center"}} onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}>Fitness</Link>
       <Link to="/loginform" style={{color:"white",textAlign:"center",backgroundColor:"orangered",margin:"200px 30px",padding:"10px 20px",borderRadius:"15px",fontSize:"18px",border:"2px solid black",textDecoration:"none",alignContent:"center"}} onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}>Sign In</Link>
    </div>
  )
}

export default Option
