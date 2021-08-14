package br.com.devinhouse.Semana10.service;

import br.com.devinhouse.Semana10.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.devinhouse.Semana10.repository.BookRepository;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository repository;

    public List<Book> getAllBooks(){
        return repository.findAll();
    }

    public double getTheValueOfAllBooks(List<Book> books){
        return books.stream().mapToDouble(Book::getPrice).sum();
    }

}
