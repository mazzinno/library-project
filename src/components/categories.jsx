import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Category from './category';
import 'bootstrap/dist/css/bootstrap.min.css';

const Fakelist = [
    { id: 1, name: "Fiction", color: "#FF6B6B", icon: "📚" },
    { id: 2, name: "Non-Fiction", color: "#4ECDC4", icon: "🧠" },
    { id: 3, name: "Science", color: "#45B7D1", icon: "🔬" },
    { id: 4, name: "History", color: "#F7B267", icon: "🏛️" },
    { id: 5, name: "Biography", color: "#A06CD5", icon: "👤" },
    { id: 6, name: "Children's", color: "#FF8CC8", icon: "🧸" },
    { id: 7, name: "Fantasy", color: "#6BCB77", icon: "🐉" },
    { id: 8, name: "Mystery", color: "#7D5BA6", icon: "🕵️" },
  ];

const Allcategories = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <h1 className="text-center mb-5" style={{ color: '#333', fontWeight: 'bold' }}>Explore Our Book Categories</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {Fakelist.map((category) => (
          <Col key={category.id}>
            <Category {...category} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Allcategories;