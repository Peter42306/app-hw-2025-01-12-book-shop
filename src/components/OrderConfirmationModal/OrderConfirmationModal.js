import React from 'react';
import PropTypes from 'prop-types';
import './OrderConfirmationModal.css';
import { Button, Modal } from 'react-bootstrap';

const OrderConfirmationModal = ({ show, orderDetails, onHide }) => {
  return(
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Order confirmation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {orderDetails ? (
          <>
            <p>Dear {orderDetails.name}, thanks for the order!</p>
            <p>Book <strong>{orderDetails.title}</strong> ({orderDetails.quantity > 1 ? `${orderDetails.quantity} books` : `${orderDetails.quantity} book`}) will be delivered on {orderDetails.deliveryDate} to address {orderDetails.address}.</p>
            <p>{orderDetails.comments.trim() ? <p>Your comments: <em>{orderDetails.comments}</em></p> : ``}</p>
          </>          
        ):(
          <p>No order details available</p>
        )}
      </Modal.Body>
      
      <Modal.Footer>
      <Button variant='secondary' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};


OrderConfirmationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  
  orderDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    deliveryDate: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    comments: PropTypes.string,    
  }),
  
  onHide: PropTypes.func.isRequired,
};

OrderConfirmationModal.defaultProps = {
  orderDetails: null,
};

export default OrderConfirmationModal;
