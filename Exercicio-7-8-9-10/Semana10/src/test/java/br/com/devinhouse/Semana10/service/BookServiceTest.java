package br.com.devinhouse.Semana10.service;

import br.com.devinhouse.Semana10.entity.Book;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class BookServiceTest {

    @Test
    void SHOULD_GET_THE_VALUE_OF_ALL_BOOKS(){
        List<Book> books = List.of(new Book(1L, "The Chronicles of Narnia","The Lion, the Witch and the Wardrobe",
                        "C. S. Lewis", 208,
                        "HarperTrophy", 35.85 ),
                new Book(2L, "How to Train Your Dragon", "Special Edition: With Brand New Short Stories!",
                        "Cressida Cowell", 432 ,
                        " Little, Brown Books for Young Readers", 47.85),
                new Book(3L, "Harry Potter", "Harry Potter and the Chamber of Secrets - Gryffindor Edition",
                        "J.K. Rowling", 384,
                        "Bloomsbury Publishing PLC", 59.91));
        assertEquals(143.61, new BookService().getTheValueOfAllBooks(books));
    }

}