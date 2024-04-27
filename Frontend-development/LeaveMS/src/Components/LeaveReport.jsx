import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

export const LeaveReport = () => {
  const [employees, setEmployees] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");

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

  const handleSearch = (status) => {
    setSearchStatus(status);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.leaveStatus.toLowerCase().includes(searchStatus.toLowerCase())
  );

  return (
    <div className="px-5 mt-3">
      <br />
      <div className="d-flex justify-content-center">
        <h3>Employee Leave Records</h3>
      </div>
      <div className="mt-3">
        <div className="btn-group" role="group" aria-label="Search by leave status">
          <button
            type="button"
            className="btn btn-info" 
            onClick={() => handleSearch("Pending")}
          >
            Pending
          </button>
          <button
            type="button"
            className="btn btn-success" 
            onClick={() => handleSearch("Accepted")}
          >
            Accepted
          </button>
          <button
            type="button"
            className="btn btn-danger" 
            onClick={() => handleSearch("Rejected")}
          >
            Rejected
          </button>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
