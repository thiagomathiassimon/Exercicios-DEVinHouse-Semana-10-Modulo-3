package br.com.devinhouse.Semana10.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity(name = "book")
@Table(name = "BOOK")
public class Book implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column
    @Id
    private Long id;
    @Column
    private String title;
    @Column
    private String subtitle;
    @Column
    private String authorName;
    @Column
    private Integer pageNumber;
    @Column
    private String publishingCompany;
    @Column
    private Double price;

    public Book(){

    }

    public Book(Long id, String title, String subtitle, String authorName, Integer pageNumber, String publishingCompany, Double price) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.authorName = authorName;
        this.pageNumber = pageNumber;
        this.publishingCompany = publishingCompany;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public String getAuthorName() {
        return authorName;
    }

    public Integer getPageNumber() {
        return pageNumber;
    }

    public String getPublishingCompany() {
        return publishingCompany;
    }

    public Double getPrice() {
        return price;
    }
}
