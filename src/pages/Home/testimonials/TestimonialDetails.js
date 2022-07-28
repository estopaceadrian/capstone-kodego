import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const URL = 'https://testimonialapi.toolcarton.com/api';
const TestimonialDetails = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const fetchTesti = async () => {
      const { data } = await axios.get(URL);
      setTestimonial(data);
    };
    fetchTesti();
  }, []);

  const renderedTestimonial = testimonial.map((user) => {
    return (
      <Card>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.message}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Rating: {user.rating}</small>
        </Card.Footer>
      </Card>
    );
  });
  return (
    <CardGroup xs={1} md={2} className="g-4">
      {renderedTestimonial}
    </CardGroup>
  );
};

export default TestimonialDetails;
