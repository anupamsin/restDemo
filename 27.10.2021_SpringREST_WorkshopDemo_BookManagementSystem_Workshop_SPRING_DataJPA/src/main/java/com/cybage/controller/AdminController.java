package com.cybage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.cybage.model.Admin;
import com.cybage.service.AdminService;

@Controller
public class AdminController {

	@Autowired
	AdminService adminService;

	@GetMapping("/")
	public String showLoginPage(Model model) {
		model.addAttribute("admin", new Admin());
		return "login";
	}

	@PostMapping("/")
	public String validateAdmin(@ModelAttribute("admin") Admin admin,Model model) {
		if (adminService.verifyAdmin(admin) == true) {
			model.addAttribute("admin", admin);
			
			return "/homepage";
		} else {
			System.out.println("Invalid data");
			return "login";
		}
	}
	
	
	
}
