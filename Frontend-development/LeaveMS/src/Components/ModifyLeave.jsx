import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ModifyLeave = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [leaveStatus, setLeaveStatus] = useState('');
  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = { leaveStatus };

    EmployeeService.updateEmployee(id, employee)
      .then((response) => {
        alert('Leave request updated successfully!');
        navigate('/dashboard/leave');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <div className="d-flex justify-content-center">
          <h3>Modify Leave StatusForm</h3>
        </div>
        <br></br>
        <form className="row g-1">
          <div className="col-12">
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
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
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

export default ModifyLeave;
