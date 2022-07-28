import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Link = ({ className, children, href, id }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href, id);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  return (
    <Nav.Link onClick={onClick} className={className} href={href} id={id}>
      {children}
    </Nav.Link>
  );
};

export default Link;
