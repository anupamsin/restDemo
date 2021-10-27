package com.cybage.rest.service;

import com.cybage.rest.dao.EmployeeRepository;
import com.cybage.rest.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee getEmployee(Long empNo) {
        Optional<Employee> optional = employeeRepository.findById(empNo);
        Employee employee = null;
        if (optional.isPresent()) {
            employee = optional.get();
        } else {
            throw new RuntimeException(" Employee not found for id :: " + empNo);
        }
        return employee;
    }

    public Employee addEmployee(Employee emp) {
        return employeeRepository.save(emp);
    }

    public Employee updateEmployee(Employee emp) {
        return addEmployee(emp);
    }

    public void deleteEmployee(Long empNo) {
       this.employeeRepository.deleteById(empNo);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public List<Employee> getEmployeeByName(String empName){
        return employeeRepository.empListByName(empName);
    }

    public List<Employee> empSalGreaterThan2K(double salary){
        return  employeeRepository.empSalGreaterThan2K(salary);
    }
}
