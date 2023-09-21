import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./edit.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";
import { editUserFunction, getSingleUserFunction } from "../../services/APIs";
import { BASE_URL } from "../../services/helper"

const Edit = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: ""
  })
  const [status, setStatus] = useState("Active")
  const [imgData, setImgData] = useState("")
  const [image, setImage] = useState("")
  const [preview, setPreview] = useState("")

  //to hansle the status
  const handleInputVal = (e) => {
     e.preventDefault()
     let {name, value} = e.target
     setInputValue({
      ...inputValue,
      [name]: value
     })
  }
  // console.log(inputValue)


//to handle the status
const handleStatus = (e) => {
  setStatus(e.value)
}
// console.log(status)

//to set the image 
const handleImage = (e) => {
  setImage(e.target.files[0])
}
console.log(image)


const [userProfile, setUserProfile] = useState({})
const {id} = useParams()
console.log(id)

const userProfileGet = async () => {
    const response = await getSingleUserFunction(id)
    console.log(response)
    if(response.status === 200){
       setUserProfile(response.data)
       setInputValue(response.data)
       setStatus(response.data.status)
       setImgData(response.data.profile)
    }else{
      console.log("Error in getting user by Id")
    }
}
console.log(inputValue.gender)
console.log(status)
//to show the image on profile-Image 
useEffect(()=> {
  setImgData("")
  if(image){
    setPreview(URL.createObjectURL(image))
  }
},[image])

const handleSubmit = async (e) => {
  e.preventDefault()
  const {fname, lname, email, mobile, status, gender, location} = inputValue
  if(fname === ""){
    toast.error("First Name is required")
  }else if(lname === ""){
    toast.error("Last Name is required")
  }else if(email === ""){
    toast.error("Email is required")
  }else if(!email.includes("@")){
    toast.error("Enter valid email")
  }else if(mobile === ""){
    toast.error("Mobile no. is required")
  }else if(mobile.length < 10){
    toast.error("Enter valid mobile no.")
  }else if(status === ""){
    toast.error("Status is required")
  }else if(gender === ""){
    toast.error("Gender is required")
  }else if(imgData === ""){
    toast.error("Profile pic is required")
  }else if(location === ""){
    toast.error("Location is requied")
  }else{
    console.log("status1 is",status)
      const data = new FormData();
      data.append("fname", fname);
      data.append("lname", lname);
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("gender", gender);
      data.append("status", status);
      data.append("user_profile", image || imgData);
      data.append("location", location);

      const config = {
        "Content-Type": "multipart/form-data",
      };
      
      const response = await editUserFunction(id, data, config)
      console.log(response)
      if(response.status === 200) {
        toast.success("Updated Successfully",{
          autoClose: 3000
        });
        setTimeout(() => {
          navigate('/')
        },4000)
      }
  }
}

useEffect(() => {
  userProfileGet()
},[id])
  //select your status options
  const options = [
    { value: "Active", label: "Active" },
    { value: "In-Active", label: "In-Active" },
  ];
  return (
    <>
      <div className="text-center mt-3">
        <h2>Update Your Details</h2>
      </div>
      <div className="container mt-3">
        <Card className="shadow">
          <Card.Body>
            <div className="text-center profile-img">
              <img src={image ? preview : `${BASE_URL}/uploads/${imgData}`} alt="profile-img"></img>
            </div>

            <Form className="mt-3">
              <Row>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="fname"
                    value={inputValue.fname}
                    onChange={handleInputVal}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="lname"
                    value={inputValue.lname}
                    onChange={handleInputVal}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={inputValue.email}
                    onChange={handleInputVal}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter mobile no."
                    name="mobile"
                    value={inputValue.mobile}
                    onChange={handleInputVal}
                  />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicCheckbox">
                  <Form.Label>Select Your Gender</Form.Label>
                  <Form.Check 
                  type="radio" 
                  label="Male" 
                  name="gender"
                  value={"Male"}
                  checked={inputValue.gender === "Male" ? true : false}
                  onChange={handleInputVal}
                  />
                  <Form.Check 
                  type="radio" 
                  label="Female" 
                  name="gender" 
                  value={"Female"}
                  checked={inputValue.gender === "Female" ? true : false}
                  onChange={handleInputVal}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicCheckbox">
                  <Form.Label>Select Your Status</Form.Label>
                  <Select options={options} onChange={handleStatus}/>
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Enter Your Profile</Form.Label>
                  <Form.Control 
                  type="file" 
                  name="profile" 
                  onChange={handleImage}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Location"
                    name="location"
                    value={inputValue.location}
                    onChange={handleInputVal}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100" onClick={handleSubmit}>
                  Submit
                </Button>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <ToastContainer />
    </>
  )
}

export default Edit
