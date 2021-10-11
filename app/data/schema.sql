CREATE DATABASE IF NOT EXISTS thompsondshw5;
USE thompsondshw5;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
    title varchar(48),
    author varchar(48),
    year_published int,
    publisher varchar(48),
    page_count int,
    MSRP dec    
);

INSERT INTO books (title, author, year_published, publisher, page_count, MSRP) VALUES 
('The Great Gatsby','F. Scott Fitzgerald',1925,'Charles Scribners Sons',240,5.97),
('A Farewell to Arms', 'Ernest Hemmingway',1929,'Simon & Schuster',355,14.99),
('Anna Karenina','Leo Tolstoy',1878,'The Russian Messenger',864,16.38),
('To Kill a Mockingbird','Harper Lee',1960,'J.B. Lippincott & Co.',281,7.19),
('The Sound and the Fury','William Faulkner',1929,'Jonathan Cap and Harrison Smith',326,11.790),
('David Copperfield','Charles Dickens',1850,'Bradbury and Evans',624,9.99),
('1984','George Orwell',1949,'Secker & Warburg',328,7.48),
('Green Eggs and Ham','Dr.Seuss',1960,'Random House',62,8.12);

 SELECT * FROM books;