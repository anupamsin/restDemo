package com.cybage.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "customers")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Customer {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long customerId;
		
		private String customerName;
		
		private String customerAddress;
		
		private String customerEmailId;
}
