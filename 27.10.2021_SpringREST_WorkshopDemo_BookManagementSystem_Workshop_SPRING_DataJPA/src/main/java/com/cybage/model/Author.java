package com.cybage.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Author {
	@Column(name = "name")
	private String authorName;
	@Column(name = "contact_no")
	private long authorContactNo;
	@Id
	private String authorEmailId;

	@ManyToOne
	@JoinColumn(name = "book_id")
	private Book book;

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public long getAuthorContactNo() {
		return authorContactNo;
	}

	public void setAuthorContactNo(long authorContactNo) {
		this.authorContactNo = authorContactNo;
	}

	public String getAuthorEmailId() {
		return authorEmailId;
	}

	public void setAuthorEmailId(String authorEmailId) {
		this.authorEmailId = authorEmailId;
	}

	@Override
	public String toString() {
		return "Author [authorName=" + authorName + ", authorContactNo=" + authorContactNo + ", authorEmailId="
				+ authorEmailId + "]";
	}

	public Author(String authorName, long authorContactNo, String authorEmailId) {
		super();
		this.authorName = authorName;
		this.authorContactNo = authorContactNo;
		this.authorEmailId = authorEmailId;
	}

	public Author() {
		// TODO Auto-generated constructor stub
	}
}
