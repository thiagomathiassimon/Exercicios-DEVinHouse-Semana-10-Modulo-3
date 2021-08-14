package br.com.devinhouse.Semana10.repository;

import br.com.devinhouse.Semana10.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{


}
