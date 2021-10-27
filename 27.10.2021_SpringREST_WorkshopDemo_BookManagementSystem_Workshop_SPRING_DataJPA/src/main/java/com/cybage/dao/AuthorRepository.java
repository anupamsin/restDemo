package com.cybage.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cybage.model.Author;

public interface AuthorRepository extends JpaRepository<Author, String> {
	List<Author> findByAuthorEmailId(String authorEmailId);

	@Query(value = "select * from author ORDER BY name", nativeQuery = true)
	List<Author> sortByName();

	@Query("select a from Author a ORDER BY a.authorEmailId")
	List<Author> sortByEmailId();

	List<Author> findByAuthorName(String authorName);
}
