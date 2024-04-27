import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

export const Leave = () => {
  const [employees, setEmployees] = useState([]);
  const [searchEmployeeID, setSearchEmployeeID] = useState("");
  const [searchLeaveStatus, setSearchLeaveStatus] = useState("");

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    const confirmDelete = window.confirm("Do you want to delete this record?");
    if (confirmDelete) {
      EmployeeService.deleteEmployee(employeeId)
        .then(() => {
          setEmployees(employees.filter((employee) => employee.id !== employeeId));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.employeeID.toLowerCase().includes(searchEmployeeID.toLowerCase()) &&
      (searchLeaveStatus === "" || employee.leaveStatus === searchLeaveStatus)
    );
  });

  return (
    <div className="px-5 mt-3">
      <br />
      <div className="d-flex justify-content-center">
        <h3>Employee Pending Leave Records</h3>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <Link
          to="/dashboard/apply_leave"
          className="btn btn-success btn-lg"
          style={{ marginLeft: "20px", padding: "5px 27px" }}
        >
          Add Leave
        </Link>
      </div>

      <div className="mt-3">
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Employee ID"
              value={searchEmployeeID}
              onChange={(e) => setSearchEmployeeID(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={searchLeaveStatus}
              onChange={(e) => setSearchLeaveStatus(e.target.value)}
            >
              <option value="">Search by Leave Status</option>
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        <table className="table mt-3">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.employeeID}</td>
                <td>{employee.name}</td>
                <td>{employee.fromDate}</td>
                <td>{employee.endDate}</td>
                <td>{employee.leaveReason}</td>
                <td>{employee.leaveStatus}</td>
                <td>
                  <Link to={`/dashboard/modify_leave/${employee.id}`} className="btn btn-info">Modify</Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(employee.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

