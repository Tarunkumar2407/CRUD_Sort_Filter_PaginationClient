import React from 'react'
import Card from 'react-bootstrap/Card';
import "./profile.css"

const Profile = () => {
  return (
    <>
    <div className='container'>
      <Card className='shadow col-lg-6 mx-auto mt-5'>
         <Card.Body>
          <div className='user-profile text-center'>
            <img src='/man.png' alt='user-profile-pic'></img>
          </div>
          <div className='text-center'>
            <h3>Tarun kumar</h3>
            <h4><i className="fa-solid fa-envelope email"></i>&nbsp;:- <span>tarunkumar2407@gmail.com</span></h4>
            <h4><i className="fa-solid fa-mobile mobile"></i>&nbsp;:- <span>9058663366</span></h4>
            <h4><i className="fa-solid fa-person gender"></i>&nbsp;:- <span>Male</span></h4>
            <h4><i className="fa-sharp fa-solid fa-location-dot location"></i>&nbsp;:- <span>Noida</span></h4>
            <h4>Status &nbsp;:- <span>Active</span></h4>
            <h4><i className="fa-solid fa-calendar-days dates"></i>Date Created &nbsp;:- <span>Active</span></h4>
            <h4><i className="fa-solid fa-calendar-days dates"></i>Date Updated &nbsp;:- <span>Active</span></h4>
          </div>
         </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default Profile
