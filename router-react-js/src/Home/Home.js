import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Home.css'


const Home = () => {
    const navigate=useNavigate();


  const GotoAboutpage=()=>{
navigate("About")
  }
    return (
   
   <div className='rout'>
<h2>Aruljk</h2>
<Link to={"Profile"}>Go to profile</Link>
<button onClick={()=>GotoAboutpage()}>Go to About</button>
    </div>
  )
}

export default Home