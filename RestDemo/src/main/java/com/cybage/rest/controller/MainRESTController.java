package com.cybage.rest.controller;

import java.util.List;

import com.cybage.rest.model.Employee;
import com.cybage.rest.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

public class MainRESTController {

    @Autowired
    private EmployeeService employeeService;

    @RequestMapping("/")
    public String welcome() {
        return "Welcome to RestTemplate Example.";
    }


    @GetMapping(value = "/employees")
    //@ResponseBody
    public ResponseEntity<List<Employee>> getEmployees() {
        List<Employee> list = employeeService.getAllEmployees();
        return ResponseEntity.ok().body(list);
    }

     @GetMapping(value = "/employee/{empNo}")
    public ResponseEntity<Employee> getEmployee(@PathVariable("empNo") Long empNo) {
        return ResponseEntity.ok().body(employeeService.getEmployee(empNo));
    }

    @PostMapping(value = "/employee")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee emp) {

        System.out.println("(Service Side) Creating employee: " + emp.getEmpNo());

        return ResponseEntity.ok().body(employeeService.addEmployee(emp));
    }


    @PutMapping(value = "/employee")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee emp) {

        System.out.println("(Service Side) Editing employee: " + emp.getEmpNo());

        return ResponseEntity.ok().body(employeeService.updateEmployee(emp));
    }

   @DeleteMapping(value = "/employee/{empNo}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("empNo") Long empNo) {

        System.out.println("(Service Side) Deleting employee: " + empNo);
       employeeService.deleteEmployee(empNo);
       return ResponseEntity.ok().body("Emp deletion success");
    }

    @GetMapping(value = "/findByName/{empName}")
    public ResponseEntity<List<Employee>> getEmployeeByName(@PathVariable("empName") String empName) {
        return ResponseEntity.ok().body(employeeService.getEmployeeByName(empName));
    }

    @GetMapping(value = "/findBySal/{salary}")
    public ResponseEntity<List<Employee>> getEmployeeBySalGtThan2K(@PathVariable("salary") double salary) {
        return ResponseEntity.ok().body(employeeService.empSalGreaterThan2K(salary));
    }
}