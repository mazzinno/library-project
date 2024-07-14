import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Category from './Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Fakelist = [
  { id: 1, name: "Adventure", color: "#2B3A42", icon: "🚀" },
  { id: 2, name: "Romance", color: "#2B3A42", icon: "💖" },
  { id: 3, name: "Thriller", color: "#2B3A42", icon: "🔪" },
  { id: 4, name: "Memoir", color: "#2B3A42", icon: "📖" },
  { id: 5, name: "Travel", color: "#2B3A42", icon: "🌍" },
  { id: 6, name: "Health", color: "#2B3A42", icon: "🍏" },
  { id: 7, name: "Poetry", color: "#2B3A42", icon: "📝" },
  { id: 8, name: "Cooking", color: "#2B3A42", icon: "🍴" }
];

const Allcategories = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <h1 className="text-center mb-5" style={{ color: '#333', fontWeight: 'bold' }}>
        Explore Our Book Categories
      </h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 mx-5">
        {Fakelist.map((category) => (
          <Col key={category.id}>
            <Link to={`/allbooks/${category.name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
              <Category {...category} />
            </Link>
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <Link to="/allbooks">
            <Button style={{ backgroundColor: "#E74C3C", border: "none" }} variant="primary" size="lg">
              Explore All Books
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
export default Allcategories;