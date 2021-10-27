package com.cybage.service;

import org.springframework.stereotype.Service;

import com.cybage.model.Admin;

@Service
public class AdminService {
	Admin admin = new Admin("apurvm@cybage.com", "24826");

	public AdminService() {
	}

	public boolean verifyAdmin(Admin retrievedAdmin) {
		String retrievedId = retrievedAdmin.getAdminId();
		String retrievedPassword = retrievedAdmin.getAdminPassword();

		if (retrievedId.equals(admin.getAdminId()) && retrievedPassword.equals(admin.getAdminPassword())) {
			System.out.println("Valid USER: " + retrievedAdmin.toString());
			return true;
		}
		return false;
	}

}
