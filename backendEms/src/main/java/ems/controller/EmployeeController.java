package ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ems.exception.EmployeeNotFoundException;
import ems.model.Employee;
import ems.repository.EmployeeRepository;

@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/api")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")  // http://localhost:8080/api/employees
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping("/employee")    // localhost:8080/api/employee
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{id}")      // localhost:8080/api/employees/2
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    @PutMapping("/employee/{id}")           // localhost:8080/api/employee/6
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return employeeRepository.findById(id)
                .map(emp -> {
                    emp.setName(employee.getName());
                    emp.setEmail(employee.getEmail());
                    emp.setSalary(employee.getSalary());
                    return employeeRepository.save(emp);
                }).orElseThrow(() -> new EmployeeNotFoundException(id));

    }

    // delete employee by id
    @DeleteMapping("/employee/{id}")        //localhost:8080/api/employee/6
    public String deleteEmployee(@PathVariable Long id) {
        if(! employeeRepository.existsById(id)){
            throw new EmployeeNotFoundException(id);
        }
        employeeRepository.deleteById(id);
        return "Employee deleted successfully";

    }
}
