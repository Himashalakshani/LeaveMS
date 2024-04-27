import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import { Home } from './Components/Home'
import Employee from './Components/Employee'
import { Leave } from './Components/Leave'
import AddEmployee from './Components/AddEmployee'
import ApplyLeave from './Components/ApplyLeave'
import { LeaveReport } from './Components/LeaveReport'
import ModifyLeave from './Components/ModifyLeave'




function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path=''element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/leave' element={<Leave />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/apply_leave' element={<ApplyLeave />}></Route>
        <Route path='/dashboard/leave_report' element={<LeaveReport />}></Route>
        <Route path='/dashboard/modify_leave' element={<ModifyLeave />}></Route>
        <Route path="/dashboard/modify_leave/:id" element={<ModifyLeave />} />

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
