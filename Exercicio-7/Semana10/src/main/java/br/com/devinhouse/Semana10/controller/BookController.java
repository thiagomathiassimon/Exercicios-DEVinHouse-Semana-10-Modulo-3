package br.com.devinhouse.Semana10.controller;

import br.com.devinhouse.Semana10.entity.Book;
import br.com.devinhouse.Semana10.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@CrossOrigin
@RestController
@RequestMapping(value = "/v1" + "/book")
public class BookController {

    @Autowired
    private BookService service;

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    @ResponseStatus(code = OK)
    public List<Book> getAllBooks(){
        return service.getAllBooks();
    }

    @GetMapping(value = "/value", produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    @ResponseStatus(code = OK)
    public double getTheValueOfAllBooks(){
        return service.getTheValueOfAllBooks(service.getAllBooks());
    }

}
