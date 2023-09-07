import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./register.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const [inputValue, setInputValue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: ""
  })
  const [status, setStatus] = useState("Active")
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

//to show the image on profile-Image 
useEffect(()=> {
  if(image){
    setPreview(URL.createObjectURL(image))
  }
},[image])

const handleSubmit = (e) => {
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
  }else if(image === ""){
    toast.error("Profile pic is required")
  }else if(location === ""){
    toast.error("Location is requied")
  }else{
    toast.success("Successfully registered")
  }
}

  //select your status options
  const options = [
    { value: "Active", label: "Active" },
    { value: "In-Active", label: "In-Active" },
  ];
  return (
    <>
      <div className="text-center mt-3">
        <h2>Register Your Details</h2>
      </div>
      <div className="container mt-3">
        <Card className="shadow">
          <Card.Body>
            <div className="text-center profile-img">
              <img src={preview ? preview : "man.png"} alt="profile-img"></img>
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
                  className="mb-3 col-md-6"
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
                  onChange={handleInputVal}
                  />
                  <Form.Check 
                  type="radio" 
                  label="Female" 
                  name="gender" 
                  value={"Female"}
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
  );
};

export default Register;
