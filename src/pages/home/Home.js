import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import Table from "../../components/table/Table";
import Spinner from "../../components/spinner/Spinner";
import { deleteUserFunction, getUserFunction } from "../../services/APIs";
import { ToastContainer,toast } from "react-toastify";

const Home = () => {
  const [userData, setUserData] = useState([])
  const [showSpin, setShowSpin] = useState(true)
  const [search, setSearch] = useState("")
  const [gender, setGender] = useState("All")
  const [status, setStatus] = useState("All")
  const [sort, setSort] = useState("new")
  
  const navigate = useNavigate();
  const handleNavigatetoRegister = () => {
    navigate("/register");
  };
  
  let data = []
  const getUserData = async () => {
      const response = await getUserFunction(search,gender,status,sort)
      // console.log(response.data)
      if(response.status === 200){
        setUserData(response.data)
        // console.log(userData)
      }else{
        console.log({"status": "failed", "messages": "Error in getting user data"})
      }
  }
  console.log(userData)

  const deleteUser = async(id) => {
     const response = await deleteUserFunction(id)
     if(response.status === 200){
      getUserData()
      toast.success("User Deleted Successfully")
     }else{
      toast.error("Error in deleting user")
     }
  }

  useEffect(() => {
    getUserData();
    setTimeout(()=> {
      setShowSpin(false)
    },500)
  },[search,gender,status,sort])

  return (
    <>
      <div className="container">
        <div className="main-div">
          <div className="search-adduser mt-4 d-flex justify-content-between flex-wrap">
            <div className="search-btn">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e)=> setSearch(e.target.value)}
                />
                <Button variant="success">Search</Button>
              </Form>
            </div>
            <div className="add-btn">
              <Button variant="primary">
                <i className="fa-solid fa-plus"></i>&nbsp;
                <span
                  onClick={handleNavigatetoRegister}
                  style={{ fontSize: "18px" }}
                >
                  Add User
                </span>
              </Button>
            </div>
          </div>
          <div className="csv-gender-value-status mt-4 d-flex justify-content-between flex-wrap">
            <div className="filter-gender">
              <h4>Filter By Gender</h4>
              <div className="checks-gender">
                <Form.Check
                  inline
                  label="All"
                  name="gender"
                  type="radio"
                  id="All"
                  value={"All"}
                  defaultChecked
                  onChange={(e)=> setGender(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  id="Male"
                  value={"Male"}
                  type="radio"
                  onChange={(e)=> setGender(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  id="Female"
                  value={"Female"}
                  type="radio"
                  onChange={(e)=> setGender(e.target.value)}
                />
              </div>
            </div>
            <div className="sort-value">
              <h4>Sort By Value</h4>
              <div className="sort-new-old">
                <Dropdown className="text-center">
                  <Dropdown.Toggle
                    style={{
                      paddingTop: "0px",
                      width: "50px",
                      fontSize: "30px",
                      color: "blue",
                      backgroundColor: "white",
                      border: "none",
                    }}
                    role="button"
                    type="button"
                    className="btn"
                    data-toggle="dropdown"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={()=> setSort("new")}>New</Dropdown.Item>
                    <Dropdown.Item onClick={()=> setSort("old")}>Old</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="filter-gender">
              <h4>Filter By Status</h4>
              <div className="checks-gender" >
                <Form.Check
                  inline
                  label="All"
                  name="status"
                  type="radio"
                  id="All"
                  value={"All"}
                  onChange={(e)=> setStatus(e.target.value)}
                  defaultChecked
                />
                <Form.Check
                  inline
                  label="Active"
                  name="status"
                  id="Active"
                  type="radio"
                  value={"Active"}
                  onChange={(e)=> setStatus(e.target.value)}
                />
                <Form.Check
                  inline
                  label="InActive"
                  name="status"
                  id="InActive" 
                  value={"InActive"}
                  onChange={(e)=> setStatus(e.target.value)}
                  type="radio"
                />
              </div>
            </div>
          </div>
          {
           showSpin ? <Spinner /> : 
           <Table 
           userData={ userData } 
           deleteUser ={ deleteUser }
           getUserData = { getUserData }
           />
          }
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
