import React from 'react';
import PropTypes from 'prop-types';
import './BookCard.css';
import { Button, Card } from 'react-bootstrap';
import defaultImage from './logo512.png';


const BookCard = ({ book, onSelect }) =>{
  const { image, title, description, author, price } = book;

  return(    
    <Card className='book-card'>
      <Card.Img variant='top' src={image} alt='image'></Card.Img>
      
      <Card.Body>
        <Card.Title className='book-card-title'>{title}</Card.Title>
        <Card.Text className='book-card-description'>{description}</Card.Text>
        <Card.Text className='book-card-author'>{author}</Card.Text>
      </Card.Body>
      
      <Card.Text className='book-card-price'>{price} $</Card.Text>
      
      <Card.Footer>
        <Button variant='primary' className='w-100 book-card-button' onClick={onSelect}>Select</Button>
      </Card.Footer>

    </Card>
  );
}

BookCard.propTypes = {

  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  
  onSelect: PropTypes.func.isRequired, // Функция для обработки выбора
};

BookCard.defaultProps = {
  book: {
    
    title: 'Untitled book',
    description: 'No description available',
    author: 'Unknown author',
    price: 0,
  },

  onSelect: () => {}, // Пустая функция по умолчанию
};

export default BookCard;
