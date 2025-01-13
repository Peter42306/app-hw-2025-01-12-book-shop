import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import BookCard from './components/BookCard/BookCard';
import BooksList from './components/BooksList/BooksList';
import BookOrder from './components/BookOrder/BookOrder';
import books from './data/books';
import { useState } from 'react';
import OrderConfirmationModal from './components/OrderConfirmationModal/OrderConfirmationModal';

function App() {  

  // Состояние для отслеживания выбранной книги
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  // Обработчик выбора книги
  const handleBookSelect = (book) => {
    setSelectedBook(book);    
    console.log('Book selected', book);
  };

  // Обработчик отправки заказа
  const handleOrderSubmit = (order) => {
    setOrderDetails(order);
    setModalShow(true); // Показываем модальное окно
    setSelectedBook(null); // Очищаем выбранную книгу после отправки заказа в форме BookOrder
    
    console.log('Order submitted', order);
    //alert(`Order created, ${order.title}, ${order.quantity}, ${order.name}`);
  };

  const handleCloseModal = () => {
    setModalShow(false); // Закрываем модальное окно
    setOrderDetails(null); // Сбрасываем детали заказа
  };






  return (
    <Container className='mt-3 w-100'>
      <Row>

        <Col lg={9}>
          <BooksList books={books} booksPerPage={3} onBookSelect={handleBookSelect}></BooksList>
        </Col>

        <Col lg={3}>
          <BookOrder book={selectedBook} onOrderSubmit={handleOrderSubmit}></BookOrder>
        </Col>    

      </Row>      

      <OrderConfirmationModal
          show={modalShow}
          onHide={handleCloseModal}
          orderDetails={orderDetails}
        >
        </OrderConfirmationModal>    
    </Container>
  );
}

export default App;
