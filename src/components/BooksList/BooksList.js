import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BooksList.css';
import BookCard from '../BookCard/BookCard';
import { Col, Pagination, Row } from 'react-bootstrap';

const BooksList = ({ books, booksPerPage, onBookSelect }) => {

  // Состояние для текущей страницы пагинации
  const [currentPage, setCurrentPage] = useState(1);

  // Вычисление общего количества страниц
  const totalPages = Math.ceil(books.length / booksPerPage);

  // Определение книг для текущей страницы
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Обработчик изменения страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Обработчик выбора книги
  // const handleBookSelect = (book) => {
  //   console.log(`Selected book: ${book.title}`);
  //   alert(`${book.title} was selected!`);
  // };

  return(
    <div>
      {/* Список книг */}
      <Row>
        {currentBooks.map((book, index) => (
          <Col key={index}>
            <BookCard book={book} onSelect={() => onBookSelect(book)}></BookCard>
          </Col>          
        ))}
      </Row>

      {/* Пагинация */}
      <Row>
        <Col>
          <Pagination className="justify-content-center mt-3">
            {[...Array(totalPages)].map((book, index) => (
              <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>              
            ))}            
          </Pagination>        
        </Col>
      </Row>
    </div>
  );
} 
  
  

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  booksPerPage: PropTypes.number, // Количество книг на одной странице
  onBookSelect: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  booksPerPage: 3, // По умолчанию 3 книги на странице
};

export default BooksList;
