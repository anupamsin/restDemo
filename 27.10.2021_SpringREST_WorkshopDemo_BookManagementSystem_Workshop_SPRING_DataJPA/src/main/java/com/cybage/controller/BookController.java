package com.cybage.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.cybage.exception.RecordNotFoundException;
import com.cybage.model.Book;
import com.cybage.service.BookService;

@RestController
public class BookController {
	@Autowired
	BookService bookService;

	@PostMapping("/addBook")
	public ResponseEntity<String> addBook(Book book) {
		bookService.insertBook(book);
		return new ResponseEntity<String>("Book Added Successfully", HttpStatus.OK);
	}

	@GetMapping("/displayAllBooks")
	public ResponseEntity<String> displayAllBooks() {
		List<Book> books = bookService.getAllBooks();
		return new ResponseEntity<String>(books.toString(), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteBook(@PathVariable("id") int id) {
		Optional<Book> book = bookService.findBookById(id);
		if (book.isEmpty()) {
			System.out.println("In exception handler");
			throw new RecordNotFoundException("Book Not Found with ID : " + id);
		}
		bookService.deleteBookById(id);
		return new ResponseEntity<String>("Book deleted with ID: " + id, HttpStatus.OK);
	}

	@GetMapping("/sortByTitle")
	public ResponseEntity<String> sortBookListByTitle() {
		List<Book> books = bookService.sortByTitle();
		if (books.size() == 0) {
			throw new RecordNotFoundException("Database is Empty");
		}
		return new ResponseEntity<String>(books.toString(), HttpStatus.OK);
	}

	@GetMapping("/sortByPublisher")
	public ResponseEntity<String> sortBookListByPublisher() {
		List<Book> books = bookService.sortByPublisher();
		if (books.size() == 0) {
			throw new RecordNotFoundException("Database is Empty");
		}
		return new ResponseEntity<String>(books.toString(), HttpStatus.OK);
	}

//	@GetMapping("/edit/{id}")
//	public String editBook(@PathVariable int id, Model model) {
//		Book book = bookService.findBookById(id);
//		model.addAttribute("book", book);
//		return "editBookDetails";
//	}
//
//	@PostMapping("/edit")
//	public String editBook(@ModelAttribute("book") Book book, Model model) {
//		bookService.editBook(book);
//		System.out.println("Edited Book: " + book.toString());
//		model.addAttribute("bookList", bookService.getAllBooks());
//		return "booksList";
//	}

	@PutMapping("/edit/{id}")
	public ResponseEntity<String> editBook(@PathVariable("id") int id, Book book) {
		Optional<Book> book1 = bookService.findBookById(id);
		if (book1.isEmpty()) {
			throw new RecordNotFoundException("No Data found with ID : " + id);
		} else {
			bookService.insertBook(book);
		}
		return new ResponseEntity<String>("Data Updated Successfully",HttpStatus.ACCEPTED);
	}

}
