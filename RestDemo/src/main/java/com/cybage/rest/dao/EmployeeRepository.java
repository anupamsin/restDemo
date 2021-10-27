package com.cybage.rest.dao;

import com.cybage.rest.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query("select e from Employee e where e.empName=?1")
    public List<Employee> empListByName(String empName);

    @Query("select e from Employee e where e.salary >?1")
    public List<Employee> empSalGreaterThan2K(double salary);

}
