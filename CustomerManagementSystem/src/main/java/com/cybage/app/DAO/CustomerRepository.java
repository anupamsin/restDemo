package com.cybage.app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cybage.app.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
