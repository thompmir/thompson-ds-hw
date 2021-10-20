CREATE DATABASE IF NOT EXISTS thompsondshw5;
USE thompsondshw5;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
    id INT Not NULL AUTO_INCREMENT,
    title varchar(48),
    author varchar(48),
    year_published int,
    publisher varchar(48),
    page_count int,
    MSRP float(10),
    PRIMARY KEY(id)
);

INSERT INTO books (title, author, year_published, publisher, page_count, MSRP) VALUES 
('The Great Gatsby','F. Scott Fitzgerald',1925,'Charles Scribners Sons',240,5.97),
('A Farewell to Arms', 'Ernest Hemmingway',1929,'Simon & Schuster',355,14.99),
('Anna Karenina','Leo Tolstoy',1878,'The Russian Messenger',864,16.38),
('To Kill a Mockingbird','Harper Lee',1960,'J.B. Lippincott & Co.',281,7.19);

 SELECT * FROM books;