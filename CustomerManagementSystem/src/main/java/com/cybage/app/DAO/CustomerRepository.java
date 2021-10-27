package com.cybage.app.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cybage.app.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
	@Query("select c from Customer c where c.customerName=?1")
    public List<Customer> customerListByName(String customerName);
	
	@Query("select c from Customer c where c.customerAddress=?1")
    public List<Customer> customerListByAddress(String customerAddress);
	
	@Query("select c from Customer c where c.customerEmailId=?1")
    public Customer customerByEmail(String customerEmailId);

}
