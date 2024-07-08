import React from 'react';
import { Card } from 'react-bootstrap';

const Category = ({ name, color, icon }) => (
  <Card 
    className="h-100 shadow-sm" 
    style={{ 
      borderRadius: '15px', 
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }}
    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
  >
    <Card.Body className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: color, minHeight: '200px' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{icon}</div>
      <Card.Title className="text-center" style={{ color: 'white', fontSize: '1.5rem' }}>{name}</Card.Title>
    </Card.Body>
  </Card>
);

export default Category;