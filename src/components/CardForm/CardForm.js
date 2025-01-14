import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CardForm.css';
import { Button, Card, Form, ListGroup } from 'react-bootstrap';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';

const CardForm = ({ cardData }) => {  
  const {cardHeaderName, paymentPerPeriod, paymentPeriod, checkListItems, lowerButtonInfo} = cardData;

  return(
    <>
    {/* <p>CardForm</p> */}
    <Card className='card-container'>

      <Card.Header className='header-item'>{cardHeaderName}</Card.Header>

      <Card.Body className='mt-3'>
        <Button className='upper-button' disabled>
          <div className='upper-button-payment-per-period'>{`$${paymentPerPeriod}`}</div>
          <div className='upper-button-payment-period'>{paymentPeriod}</div>
        </Button>
      </Card.Body>
      
      
        
        <ListGroup className='list-group-item'>          
          {checkListItems.map((item, index) => (
            <ListGroup.Item key={index} className='info-item'>
              {item.status ? (
                <CheckCircle className='icon-check-circle'></CheckCircle>
              ) : (
                <XCircle className='icon-x-circle'></XCircle>
              )}
              <span>{item.label}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>        
        
        
      

      <Card.Body className='mb-3'>
        <Button className='lower-button'>{lowerButtonInfo}</Button>
      </Card.Body>
      
    </Card>
    </>
  );
};

CardForm.propTypes = {
  cardData: PropTypes.shape({
    cardHeaderName: PropTypes.string.isRequired,
    paymentPerPeriod: PropTypes.string.isRequired,
    paymentPeriod: PropTypes.string.isRequired,
    checkListItems: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
      })
    ).isRequired,
    lowerButtonInfo: PropTypes.string.isRequired,
  })
  
};

CardForm.defaultProps = {
  cardData: {
    cardHeaderName: "",
    paymentPerPeriod: "0",
    paymentPeriod: "",
    checkListItems: [],
    lowerButtonInfo: "",
  },
};

export default CardForm;
