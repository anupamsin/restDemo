package com.cybage.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.app.exception.CustomerNotFoundException;
import com.cybage.app.model.Customer;
import com.cybage.app.service.CustomerService;

@RestController
public class CustomerController {
	@Autowired
	private CustomerService customerService;

	@RequestMapping("/")
	public String welcome() {
		return "Welcome to Customer Management System";
	}

	@GetMapping(value = "/customers")
	public ResponseEntity<List<Customer>> getCustomers() throws CustomerNotFoundException {
		List<Customer> customerList = customerService.getAllCustomers();
		if (customerList.size() == 0) {
			throw new CustomerNotFoundException("No Customers Found in DB");
		} else
//			return ResponseEntity.ok().body(customerList);
		return new ResponseEntity<>(customerList, HttpStatus.FOUND);
	}

	@GetMapping(value = "/customer/{custId}")
	public ResponseEntity<Optional<Customer>> getCustomer(@PathVariable("custId") Long custId) throws CustomerNotFoundException {
		Optional<Customer> customer = customerService.getCustomer(custId);
		if (customer.isPresent()) {
//			return ResponseEntity.ok().body(customer);
			return new ResponseEntity<>(customer,HttpStatus.FOUND);
		} else
			throw new CustomerNotFoundException("Customer with Customer ID " + custId + " not found.");
	}

	@PostMapping(value = "/customer")
	public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer) throws CustomerNotFoundException {

		System.out.println("Creating customer: " + customer.getCustomerId());
		Customer cust = customerService.addCustomer(customer);
		if (cust == null) {
			throw new CustomerNotFoundException("Customer Creation Failed");
		} else
//			return ResponseEntity.ok().body(cust);
			return new ResponseEntity<>(cust,HttpStatus.CREATED);
	}

	@PutMapping(value = "/customer")
	public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) throws CustomerNotFoundException {

		System.out.println("Editing customer: " + customer.getCustomerId());

		Customer customer2 = customerService.updateEmployee(customer);
		if (customer2 == null) {
			throw new CustomerNotFoundException("Customer Edit Failed");
		} else
//			return ResponseEntity.ok().body(customer2);
			return new ResponseEntity<>(customer2,HttpStatus.OK);
	}

	@DeleteMapping(value = "/customer/{custId}")
	public ResponseEntity<String> deleteEmployee(@PathVariable("custId") Long custId) throws CustomerNotFoundException {
		try {
			System.out.println("Deleting customer: " + custId);
			customerService.deleteCustomer(custId);
		} catch (CustomerNotFoundException e) {
			throw new CustomerNotFoundException("Deleteion failed");
		}
		return ResponseEntity.ok().body("Customer deletion success");
	}
	
	@GetMapping(value = "/customers/findByName/{custName}")
	public ResponseEntity<List<Customer>> getEmployeeByName(@PathVariable("custName") String custName){
		List<Customer> customerListByName =customerService.getCustomerByName(custName);
		if (customerListByName.size() == 0) {
			throw new CustomerNotFoundException("No Customers Found in DB with Name : "+custName);
		} else
//			return ResponseEntity.ok().body(customerListByName);
			return new ResponseEntity<>(customerListByName,HttpStatus.FOUND);
	}
	
	@GetMapping(value = "/customers/findByAddress/{custAddress}")
	public ResponseEntity<List<Customer>> getEmployeeByAddress(@PathVariable("custAddress") String custAddress){
		List<Customer> customerListByAddress =customerService.getCustomerByAddress(custAddress);
		if (customerListByAddress.size() == 0) {
			throw new CustomerNotFoundException("No Customers Found in DB with Address : "+custAddress);
		} else
//			return ResponseEntity.ok().body(customerListByAddress);
			return new ResponseEntity<>(customerListByAddress,HttpStatus.FOUND);
	}
	
	@GetMapping(value = "/customers/findByEmail/{custEmail}")
	public ResponseEntity<Customer> getCustomerByEmail(@PathVariable("custEmail") String custEmail) throws CustomerNotFoundException {
		Customer customer = customerService.getCustomerByEmail(custEmail);
		if (customer == null) {
			throw new CustomerNotFoundException("Customer with Email ID " + custEmail + " not found.");
		} else
//			return ResponseEntity.ok().body(customer);
			return new ResponseEntity<>(customer,HttpStatus.FOUND);
	}
}
