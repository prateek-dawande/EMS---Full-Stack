package ems.exception;

public class EmployeeNotFoundException extends RuntimeException {
    public EmployeeNotFoundException(Long id) {
        super("Employyee Not Found with id: " + id);
    }
}
