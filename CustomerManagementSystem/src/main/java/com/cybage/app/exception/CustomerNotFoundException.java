package com.cybage.app.exception;

public class CustomerNotFoundException  extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5859153503470757942L;

	public CustomerNotFoundException(String message) {
		super(message);
	}
	
}
