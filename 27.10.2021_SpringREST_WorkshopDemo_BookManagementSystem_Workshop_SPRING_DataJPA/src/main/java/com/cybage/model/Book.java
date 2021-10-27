package com.cybage.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int bookId;
	@Column(name = "title")
	private String bookTitle;
	@Column(name = "cost")
	private int bookCost;
	@Column(name = "publisher")
	private String bookPublisher;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "book")
	private List<Author> authors = new ArrayList<>();

	public List<Author> getAuthors() {
		return authors;
	}

	public void setAuthors(List<Author> authors) {
		this.authors = authors;
	}

	@Override
	public String toString() {
		return "Book [bookId=" + bookId + ", bookTitle=" + bookTitle + ", bookCost=" + bookCost + ", bookPublisher="
				+ bookPublisher + "]";
	}

	public int getBookId() {
		return bookId;
	}

	public void setBookId(int bookId) {
		this.bookId = bookId;
	}

	public String getBookTitle() {
		return bookTitle;
	}

	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}

	public int getBookCost() {
		return bookCost;
	}

	public void setBookCost(int bookCost) {
		this.bookCost = bookCost;
	}

	public String getBookPublisher() {
		return bookPublisher;
	}

	public void setBookPublisher(String bookPublisher) {
		this.bookPublisher = bookPublisher;
	}

	public Book(int bookId, String bookTitle, int bookCost, String bookPublisher) {
		super();
		this.bookId = bookId;
		this.bookTitle = bookTitle;
		this.bookCost = bookCost;
		this.bookPublisher = bookPublisher;
	}

	public Book() {
		// TODO Auto-generated constructor stub
	}

}
