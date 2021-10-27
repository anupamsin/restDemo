package com.cybage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.exception.RecordNotFoundException;
import com.cybage.model.Author;
import com.cybage.service.AuthorService;

@RestController
public class AuthorController {
	@Autowired
	AuthorService authorService;

	@GetMapping("/displayAllAuthors")
	public ResponseEntity<String> displayListOfAuthors() {
		List<Author> authors = authorService.getAllAuthors();
		if (authors.size() == 0) {
			throw new RecordNotFoundException("Aauthor database is EMPTY");
		}
		return new ResponseEntity<String>(authors.toString(), HttpStatus.OK);
	}

//	@GetMapping("/addAuthor")
//	public String addAuthor(Model model) {
//		model.addAttribute("author", new Author());
//		return "addAuthor";
//	}
//
//	@PostMapping("/addAuthor")
//	public ModelAndView addAuthorData(@ModelAttribute("author") Author author) {
//		authorService.insertAuthor(author);
//		System.out.println("Author INSErted successfully" + author.toString());
//		return new ModelAndView("homepage", "author", author);
//	}
//
//	@GetMapping("/sortByName")
//	public ModelAndView sortAuthorListByName() {
//		return new ModelAndView("authorsList", "authorList", authorService.sortByName());
//	}
//
//	@GetMapping("/sortByEmail")
//	public ModelAndView sortAuthorListByEmailId() {
//		return new ModelAndView("authorsList", "authorList", authorService.sortByEmailId());
//	}
//
//	@GetMapping("/findByName")
//	public ModelAndView findByAuthorName(@RequestParam("keyword") String authorName) {
//		List<Author> authors = authorService.findByName(authorName);
//		return new ModelAndView("authorsList", "authorList", authors);
//	}
//
//	@GetMapping("/findByEmail")
//	public ModelAndView findByAuthorEmail(@RequestParam("keyword") String authorEmail) {
//		List<Author> authors = authorService.findByEmailID(authorEmail);
//		return new ModelAndView("authorsList", "authorList", authors);
//	}
	@GetMapping("/findByEmail")
	public ResponseEntity<String> searchByEmail(@RequestParam("keyword") String email) {
		List<Author> authors = authorService.findByEmailID(email);
		if (authors.size() == 0) {
			throw new RecordNotFoundException("No Author found with EMAIL: " + email);
		}
		return new ResponseEntity<String>(authors.toString(), HttpStatus.OK);
	}
}
