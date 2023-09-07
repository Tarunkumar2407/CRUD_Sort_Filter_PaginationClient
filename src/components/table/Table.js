import React from 'react'
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table"

const Table = () => {
  return (
    <>
     <div className='container mt-3'>
      <Card className="shadow">
        <Table className="align-align-item-center" responsive="sm">
            <thead className='thead-dark'>
              <tr className='table-dark'>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Email</td>
              </tr>
            </thead>
        </Table>
      </Card>
     </div>
    </>
  )
}

export default Table
