import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import "./profile.css"
import { useParams } from 'react-router-dom';
import { getSingleUserFunction } from '../../services/APIs';
import { BASE_URL } from "../../services/helper"
import moment from "moment"

const Profile = () => {
  const [userProfile, setUserProfile] = useState({})
  const {id} = useParams()
  console.log(id)

  const userProfileGet = async () => {
      const response = await getSingleUserFunction(id)
      console.log(response)
      if(response.status === 200){
         setUserProfile(response.data)
      }else{
        console.log("Error in getting user by Id")
      }
  }
  console.log(userProfile)
  useEffect(()=> {
    userProfileGet();
  },[id])
  
  return (
    <>
    <div className='container'>
      <Card className='shadow col-lg-6 mx-auto mt-5'>
         <Card.Body>
          <div className='user-profile text-center'>
            <img src={`${BASE_URL}/uploads/${userProfile.profile}`} alt='user-profile-pic'></img>
          </div>
          <div className='text-center'>
            <h3>{userProfile.fname}&nbsp;{userProfile.lname}</h3>
            <h4><i className="fa-solid fa-envelope email"></i>&nbsp;:- <span>{userProfile.email}</span></h4>
            <h4><i className="fa-solid fa-mobile mobile"></i>&nbsp;:- <span>{userProfile.mobile}</span></h4>
            <h4><i className="fa-solid fa-person gender"></i>&nbsp;:- <span>{userProfile.gender}</span></h4>
            <h4><i className="fa-sharp fa-solid fa-location-dot location"></i>&nbsp;:- <span>{userProfile.location}</span></h4>
            <h4>Status &nbsp;:- <span>{userProfile.status}</span></h4>
            <h4><i className="fa-solid fa-calendar-days dates"></i>Date Created &nbsp;:- <span>{moment(userProfile.datecreated).format("DD-MM-YYYY")}</span></h4>
            <h4><i className="fa-solid fa-calendar-days dates"></i>Date Updated &nbsp;:- <span>{moment(userProfile.dateupdated).format("DD-MM-YYYY")}</span></h4>
          </div>
         </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default Profile
