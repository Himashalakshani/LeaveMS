package leaveManagement.springboot;

import leaveManagement.springboot.model.*;
import leaveManagement.springboot.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LeavemanagementApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(LeavemanagementApplication.class, args);
	}

	/**
	 * @param args
	 * @throws Exception
	 */

	@Autowired
	private EmployeeRepository employeeRepository;
	@Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee();
//		employee.setEmployeeID("EMP001");
//		employee.setName("Fadatare");
//		employee.setFromDate("2024.05.01");
//		employee.setEndDate("2024.05.04");
//		employee.setLeaveReason("Medical");
//		employeeRepository.save(employee);

	}
}
