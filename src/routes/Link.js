import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Link = ({ className, children, href }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  return (
    <Nav.Link onClick={onClick} className={className} href={href}>
      {children}
    </Nav.Link>
  );
};

export default Link;
