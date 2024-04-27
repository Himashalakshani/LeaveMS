import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import EmployeeService from "../services/EmployeeService";


const ApplyLeave = () => {
  const [employeeID, setEmployeeID] = useState("");
  const [name, setName] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [leaveReason, setLeaveReason] = useState("");
  const [leaveStatus, setLeaveStatus] = useState("");


  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { employeeID, name, fromDate, endDate, leaveReason, leaveStatus };

    EmployeeService.createEmployee(employee)
      .then((response) => {
        console.log(response.data);
        alert("Leave request submitted successfully!");
        // Redirect or handle success here
      })
      .catch((error) => {
        console.log(error);
        // Handle error here
      });
  };



  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <div className="d-flex justify-content-center">
        <h3>leave Request Form</h3>
        </div>
        <br></br>
        <form className="row g-1">
          <div className="col-12">
            <label htmlFor="inputEmpId" className="form-label">
              Employee ID
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmpId"
              placeholder="Enter Employee ID"
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
            />
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="fromDate" className="form-label">
              From Date
            </label>
            <div>

            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              className="form-control rounded-0"
              id="fromDate"
              placeholderText="Select start date"
            />
            </div>
            <label htmlFor="endDate" className="form-label">
              To Date
            </label>
            <div>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="form-control rounded-0"
              id="endDate"
              placeholderText="Select end date"
            />
            </div>
            <label htmlFor="leaveReason" className="form-label">
              Leave Reason
            </label>
            <select
              value={leaveReason}
              onChange={(e) => setLeaveReason(e.target.value)}
              className="form-select rounded-0"
              id="leaveReason"
            >
              <option value="">Select Reason</option>
              <option value="Medical Leave">Medical Leave</option>
              <option value="Vacation">Vacation</option>
              <option value="Personal Leave">Personal Leave</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="leaveStatus" className="form-label">
              Status
            </label>
            <select
              value={leaveStatus}
              onChange={(e) => setLeaveStatus(e.target.value)}
              className="form-select rounded-0"
              id="leaveStatus"
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              
            </select>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={(e) => saveEmployee(e)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyLeave;
