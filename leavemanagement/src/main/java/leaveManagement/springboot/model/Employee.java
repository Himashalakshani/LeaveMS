package leaveManagement.springboot.model;

import jakarta.persistence.*;
import java.time.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="employees")

public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="employee_id")
    private String employeeID;

    @Column(name="name")
    private String name;

    @Column(name="from_date")
    private LocalDate fromDate;

    @Column(name="end_date")
    private LocalDate endDate;

    @Column(name="leave_reason")
    private String leaveReason;

    @Column(name = "leave_status")  // New field for leave status
    private String leaveStatus;

    public long getId() {
        return id;
    }

    public String getEmployeeID() {
        return employeeID;
    }

    public String getName() {
        return name;
    }

    public LocalDate getFromDate() {
        return fromDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public String getLeaveReason() {
        return leaveReason;
    }

    public String getLeaveStatus() {
        return leaveStatus;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setEmployeeID(String employeeID) {
        this.employeeID = employeeID;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setFromDate(LocalDate fromDate) {
        this.fromDate = fromDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public void setLeaveReason(String leaveReason) {
        this.leaveReason = leaveReason;
    }

    public void setLeaveStatus(String leaveStatus) {
        this.leaveStatus = leaveStatus;
    }
}

