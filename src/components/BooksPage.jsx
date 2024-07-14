import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookCard from './BookCard';
import BooksData from '../books.json';

const BooksPage = () => {
  return (
    <Container fluid className="py-5">
      <h1 className="text-center mb-5" style={{ color: '#333', fontWeight: 'bold' }}>
        Our Book Collection
      </h1>
      <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4 mx-5">
        {Object.keys(BooksData).map((category) => (
          BooksData[category].map((book) => (
            <Col key={book.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <BookCard category={category} book={book} />
            </Col>
          ))
        ))}
      </Row>
    </Container>
  );
};

export default BooksPage;
