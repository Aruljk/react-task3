import React from 'react'
import { Link } from 'react-router-dom';
import './profile.css'
const Profile = () => {
  return (
    <div className='pro'>
        <p>age:25</p>
        <Link to={"/About"}>Go to About</Link>
    </div>
  )
}

export default Profile