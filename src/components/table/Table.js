import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge"
import { BASE_URL } from "../../services/helper.js";
import { NavLink } from "react-router-dom"
import "./table.css";
import { statusUpdateFunction } from "../../services/APIs.js";
import { ToastContainer, toast } from "react-toastify";


const Table1 = ({ userData, deleteUser, getUserData}) => {
const handleStatusUpdate = async (id, status) => {
  const response = await statusUpdateFunction(id, status)
  console.log(response)
  // console.log(id, status)
  if(response.status === 200) {
    getUserData()
    toast.success("Status Updated")
  }else{
    toast.error("Error in updating status")
  }
  
}

  return (
    <>
      <div className="container mt-3">
        <Card className="shadow">
          <Table className="align-align-item-center" responsive="sm">
            <thead className="thead-dark">
              <tr className="table-dark">
                <td>Id</td>
                <td>Full Name</td>
                <td>Email</td>
                <td>Gender</td>
                <td>Mobile</td>
                <td>Status</td>
                <td>Profile</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0 ? (
                userData.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          {item.fname}&nbsp;{item.lname}
                        </td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.mobile}</td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle
                              className="dropdown-btn"
                              id="dropdown-basic"
                            >
                              <Badge style={{fontSize: "16px", margin: "0px"}}>{item.status}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1" 
                              onClick={()=> handleStatusUpdate(item._id, "Active")}>
                                Active
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2"
                              onClick={()=> handleStatusUpdate(item._id, "InActive")}>
                                InActive
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                        <td className="text-center">
                          <img
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                            }}
                            src= {`${BASE_URL}/uploads/${item.profile}`}
                            alt="profile-pic"
                          ></img>
                        </td>
                        <td>
                          <div className="actions">
                            <div className="view" style={{ cursor: "pointer" }}>
                              <i
                                className="fa-solid fa-eye"
                                style={{ color: "green" }}
                              ></i>
                              <NavLink to={`/userprofile/${item._id}`} style={{textDecoration: "none", color: "black"}}>
                              &nbsp;View</NavLink>
                            </div>
                            <div className="edit" style={{ cursor: "pointer" }}>
                              <i
                                className="fa-solid fa-pen-to-square"
                                style={{ color: "blue" }}
                              ></i>
                              <NavLink to={`/edit/${item._id}`} style={{textDecoration: "none", color: "black"}}>
                              &nbsp;Edit</NavLink>
                            </div>
                            <div
                             onClick={()=> deleteUser(item._id)}
                              className="delete"
                              style={{ cursor: "pointer" }}
                            >
                              <i
                                className="fa-solid fa-trash"
                                style={{ color: "red" }}
                              ></i>
                              &nbsp;Delete
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <div className="text-center">No Data Found</div>
              )}
            </tbody>
          </Table>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
};

export default Table1;
