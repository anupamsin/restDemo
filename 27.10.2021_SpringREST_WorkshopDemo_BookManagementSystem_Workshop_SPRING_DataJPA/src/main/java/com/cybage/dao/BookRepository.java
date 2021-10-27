package com.cybage.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cybage.model.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {
	@Query(value = "select * from book ORDER BY title", nativeQuery = true)
	List<Book> sortByTitle();

	@Query("select b from Book b ORDER BY b.bookPublisher")
	List<Book> sortByPublisher();

	@Query(value = "select b.book_id,b.cost,b.publisher,b.title,a.author_email_id,a.contact_no,a.name from book b INNER JOIN author a ON b.book_id=a.book_id", nativeQuery = true)
	List<Object> getAllBooksQuery();

}
