import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const URL = 'https://testimonialapi.toolcarton.com/api';
const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const fetchTesti = async () => {
      const { data } = await axios.get(URL);
      setTestimonial(data.slice(0, 4));
    };
    fetchTesti();
  }, []);

  const renderedTestimonial = testimonial.map((user) => {
    return (
      <Col key={user.id}>
        <Card style={{ width: '300px' }}>
          <Card.Body>
            <Card.Img
              variant="top"
              style={{ width: '110px' }}
              src={user.avatar}
            />
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.message}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Rating: {user.rating}</small>
          </Card.Footer>
        </Card>
      </Col>
    );
  });
  return (
    <>
      <Row xs={1} md={2} lg={4} className=" g-4 mb-5">
        {renderedTestimonial}
      </Row>
    </>
  );
};

export default Testimonial;
