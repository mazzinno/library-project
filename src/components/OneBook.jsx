import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BooksData from '../books.json';

const OneBook = () => {
  const { category, bookId } = useParams();
  const [isImageLarge, setIsImageLarge] = useState(false);
  const book = BooksData[category].find(b => b.id === parseInt(bookId));

  if (!book) {
    return <p>Book not found</p>;
  }

  const handleImageClick = () => {
    setIsImageLarge(!isImageLarge);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={4}>
          <Card>
            <div onClick={handleImageClick} style={{ cursor: 'pointer', overflow: 'hidden' }}>
              <Card.Img
                variant="top"
                src={book.cover}
                alt={book.title}
                style={{
                  height: '500px',
                  objectFit: 'contain',
                  width: '100%'
                }}
              />
            </div>
          </Card>
          <Button variant="danger" className="my-3" style={{ width: '100%' }}>Delete Book only admin</Button>
          <Button variant="success" className="my-1" style={{ width: '100%' }}>Add To Favorite</Button>
        </Col>
        <Col md={8}>
          <h1 className="mb-3" style={{ fontWeight: 'bold' }}>{book.title}</h1>
          <h4 className="mb-3">{book.author}</h4>
          <p className="mb-3"><strong>Description:</strong></p>
          <p className="mb-4">{book.description}</p>
        </Col>
      </Row>
      {isImageLarge && (
        <div
          onClick={handleImageClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 1000,
          }}
        >
          <img
            src={book.cover}
            alt={book.title}
            style={{
              maxHeight: '80%',
              maxWidth: '80%',
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>
      )}
    </Container>
  );
};

export default OneBook;
