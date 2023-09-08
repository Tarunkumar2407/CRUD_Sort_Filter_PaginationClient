import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import "./table.css";

const Table1 = () => {
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
              <tr>
                <td>1</td>
                <td>Tarun kumar</td>
                <td>tarunkumar2407@gmail.com</td>
                <td>Male</td>
                <td>8279098093</td>
                <td>
                  <select
                    style={{
                      fontWeight: "500",
                      border: "1px solid black",
                      fontSize: "16px",
                      cursor:"pointer"
                    }}
                    class="form-select form-select-sm"
                    aria-label="Small select example"
                  >
                    <option selected value="Active">
                      Active
                    </option>
                    <option value="InActive">InActive</option>
                  </select>
                </td>
                <td className="text-center">
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src="/man.png"
                    alt="profile-pic"
                  ></img>
                </td>
                <td>
                  <div className="actions">
                    <div className="view" style={{cursor:"pointer"}}><i class="fa-solid fa-eye" style={{color:"green"}}></i>&nbsp;View</div>
                    <div className="edit" style={{cursor:"pointer"}}><i class="fa-solid fa-pen-to-square" style={{color: "blue"}}></i>&nbsp;Edit</div>
                    <div className="delete" style={{cursor:"pointer"}}><i class="fa-solid fa-trash" style={{color: "red"}}></i>&nbsp;Delete</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    </>
  );
};

export default Table1;
