package com.cybage.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.dao.BookRepository;
import com.cybage.model.Book;

@Service
public class BookService {
	@Autowired
	BookRepository bookRepository;

	public BookService() {
	}

	public List<Book> getAllBooks() {
		return bookRepository.findAll();

	}

	public List<Object> getAllBookUsingJoins() {
		return bookRepository.getAllBooksQuery();
	}

	public void insertBook(Book book) {
		bookRepository.save(book);
	}

	public Optional<Book> findBookById(int id) {
		return bookRepository.findById(id);
	}

	public void deleteBookById(int id) {
		bookRepository.deleteById(id);
	}

	public void editBook(Book book) {
		Book book2 = bookRepository.findById(book.getBookId()).get();
		book2 = book;
		bookRepository.save(book2);
		System.out.println("Data updated Successfully");
	}

	public List<Book> sortByTitle() {
		return bookRepository.sortByTitle();
	}

	public List<Book> sortByPublisher() {
		return bookRepository.sortByPublisher();
	}

}
