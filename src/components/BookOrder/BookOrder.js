import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './BookOrder.css';
import { Button, Card, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap';

const BookOrder = ({ book, onOrderSubmit }) => {
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [comments, setComments] = useState('');
  

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();    

    // Проверка, что все обязательные поля заполнены
    if (!book) {
      alert("Please select a book.");
      return;
    }  
    
    const order = {
      title: book.title,
      quantity,
      name,
      address,
      deliveryDate,
      comments,      
    }

    onOrderSubmit(order);

    console.log(`handleBuyButton from BookOrder clicked`);
    //alert(`handleBuyButton from BookOrder alert`);

    // Сбрасываем состояние формы
  setName('');
  setQuantity('');
  setAddress('')  
  setDeliveryDate('');
  setComments('');
  }

  const handleQuantityInputChange =(event) => {
    setQuantity(event.target.value)
  }
  const handleNameInputChange =(event) => {
    setName(event.target.value)
  }  
  const handleAddressInputChange =(event) => {
    setAddress(event.target.value)
  }
  const handleDeliveryDateInputChange =(event) => {
    const currentDate = new Date();
    const selectedDate = new Date(event.target.value);

    if(selectedDate <= currentDate){
      alert('Please choose a delivery date starting from tomorrow');
      return;
    }

    setDeliveryDate(event.target.value)
  }
  const handleCommentsInputChange =(event) => {
    setComments(event.target.value)
  }
  
  return(
    <Card className='book-card-request-form'>
      <Form onSubmit={handleSubmit}>
        <Card.Body>

        <Row>
            <Form.Group className='mb-3'>
              <Form.Label>Selected book</Form.Label>
              <Form.Control 
                as='textarea'
                rows={2}
                value={book ? book.title : 'No book selected'}
                readOnly
              ></Form.Control>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3'>
              <Form.Label>Quantity</Form.Label>
              <Form.Control 
                type='number'
                min={1}
                value={quantity}
                placeholder='Enter quantity of books to order'
                onChange={handleQuantityInputChange}
                required
              ></Form.Control>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type='text'
                value={name}
                placeholder='Enter your name'
                onChange={handleNameInputChange}
                required
              ></Form.Control>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3'>
              <Form.Label>Delivery address</Form.Label>
              <Form.Control 
                as='textarea'
                rows={2}
                value={address}
                placeholder='Enter your address'
                onChange={handleAddressInputChange}
                required
              ></Form.Control>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3'>
              <Form.Label>Delivery date</Form.Label>
              <Form.Control 
                type='date'                
                value={deliveryDate}                
                onChange={handleDeliveryDateInputChange}
                required
              ></Form.Control>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3'>
              <Form.Label>Comments</Form.Label>
              <Form.Control 
                as='textarea'
                rows={3}
                value={comments}
                placeholder='Enter your comments'
                onChange={handleCommentsInputChange}                
              ></Form.Control>
            </Form.Group>
          </Row>
          
        </Card.Body>

        <Card.Footer>
          <Button variant='primary' type='submit' className='w-100'>Submit order</Button>
        </Card.Footer>
      </Form>
    </Card>
  );
}

BookOrder.propTypes = {

  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,

  onOrderSubmit: PropTypes.func.isRequired, // Функция для обработки отправки заказа
};

BookOrder.defaultProps = {};

export default BookOrder;
