import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function TestimonialDetails({ items }) {
  const renderedItems = items.map((item) => {
    return (
      <React.Fragment key={item.title}>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              style={{ width: '100%', height: '320px' }}
              src={item.picture}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </React.Fragment>
    );
  });
  return (
    <Row xs={1} md={2} className="g-4">
      {renderedItems}
    </Row>
  );
}

export default TestimonialDetails;
