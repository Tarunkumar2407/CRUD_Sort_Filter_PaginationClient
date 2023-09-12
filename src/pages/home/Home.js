import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, useSearchParams } from "react-router-dom";
import Table from "../../components/table/Table";
import Spinner from "../../components/spinner/Spinner";

const Home = () => {

  const [showSpin, setShowSpin] = useState(true)
  const navigate = useNavigate();
  const handleNavigatetoRegister = () => {
    navigate("/register");
  };
  useEffect(() => {
    setTimeout(()=> {
      setShowSpin(false)
    },500)
  },[])
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
                />
                <Button variant="success">Search</Button>
              </Form>
            </div>
            <div className="add-btn">
              <Button variant="primary">
                <i class="fa-solid fa-plus"></i>&nbsp;
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
            <div className="csv-btn">
              <Button variant="success">Export To Csv</Button>
            </div>
            <div className="filter-gender">
              <h4>Filter By Gender</h4>
              <div className="checks-gender">
                <Form.Check
                  inline
                  label="All"
                  name="gender"
                  type="radio"
                  id="All"
                  defaultChecked
                />
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  id="Male"
                  type="radio"
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  id="Female"
                  type="radio"
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
                    <Dropdown.Item>New</Dropdown.Item>
                    <Dropdown.Item>Old</Dropdown.Item>
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
                  defaultChecked
                />
                <Form.Check
                  inline
                  label="Active"
                  name="status"
                  id="Active"
                  type="radio"
                />
                <Form.Check
                  inline
                  label="InActive"
                  name="status"
                  id="InActive"
                  type="radio"
                />
              </div>
            </div>
          </div>
          {
           showSpin ? <Spinner /> : <Table />
          }
        </div>
      </div>
    </>
  );
};

export default Home;
