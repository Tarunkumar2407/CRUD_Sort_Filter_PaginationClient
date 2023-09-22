import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge"
import { BASE_URL } from "../../services/helper.js";
import { NavLink } from "react-router-dom"
import "./table.css";

const Table1 = ({ userData, deleteUser}) => {

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
                        <Badge style={{fontSize: "18px"}}>{item.status}</Badge>
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
                            <NavLink to={`/userprofile/${item._id}`} style={{textDecoration: "none", color: "black"}}>
                              <i
                                className="fa-solid fa-eye"
                                style={{ color: "green" }}
                              ></i>
                             
                              &nbsp;View</NavLink>
                            </div>
                            <div className="edit" style={{ cursor: "pointer" }}>
                            <NavLink to={`/edit/${item._id}`} style={{textDecoration: "none", color: "black"}}>
                              <i
                                className="fa-solid fa-pen-to-square"
                                style={{ color: "blue" }}
                              ></i>
                              
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
    </>
  );
};

export default Table1;
