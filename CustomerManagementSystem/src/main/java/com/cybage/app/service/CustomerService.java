package com.cybage.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.app.DAO.CustomerRepository;
import com.cybage.app.model.Customer;
@Service
public class CustomerService {
	 @Autowired
	    private CustomerRepository customerRepository;

	    public Optional<Customer> getCustomer(Long customerId) {
	        Optional<Customer> customer = customerRepository.findById(customerId);
	       /* Customer customer = null;
	        if (optional.isPresent()) {
	        	customer = optional.get();
	        } else {
	            throw new RuntimeException(" Customer not found for id :: " + customerId);
	        }*/
	        return customer;
	    }

	    public Customer addCustomer(Customer customer) {
	        return customerRepository.save(customer);
	    }

	    public Customer updateEmployee(Customer customer) {
	        return addCustomer(customer);
	    }

	    public void deleteCustomer(Long customerId) {
	       this.customerRepository.deleteById(customerId);
	    }

	    public List<Customer> getAllCustomers() {
	        return customerRepository.findAll();
	    }

	    public List<Customer> getCustomerByName(String customerName){
	    	return customerRepository.customerListByName(customerName);
	    }
	    
	    public List<Customer> getCustomerByAddress(String customerAddress){
	    	return customerRepository.customerListByAddress(customerAddress);
	    }
	    
	    public Customer getCustomerByEmail(String customerEmailId) {
	    	return customerRepository.customerByEmail(customerEmailId);
	    }
}
