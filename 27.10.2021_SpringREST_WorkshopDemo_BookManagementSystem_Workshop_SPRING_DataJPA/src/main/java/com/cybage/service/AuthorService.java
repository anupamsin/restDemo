package com.cybage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.dao.AuthorRepository;
import com.cybage.model.Author;

@Service
public class AuthorService {

	@Autowired
	AuthorRepository authorRepo;

	public List<Author> getAllAuthors() {
		return authorRepo.findAll();
	}

	public List<Author> findByEmailID(String email) {
		return authorRepo.findByAuthorEmailId(email);
	}

	public void insertAuthor(Author author) {
		authorRepo.save(author);
	}

	public List<Author> sortByName() {
		return authorRepo.sortByName();
	}

	public List<Author> sortByEmailId() {
		return authorRepo.sortByEmailId();
	}

	public List<Author> findByName(String authorName) {
		return authorRepo.findByAuthorName(authorName);
	}
}
