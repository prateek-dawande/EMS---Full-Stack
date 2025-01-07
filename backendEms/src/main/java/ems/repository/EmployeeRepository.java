package ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ems.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
}
