package leaveManagement.springboot.repository;

import leaveManagement.springboot.model.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    //all crud database methods
}

