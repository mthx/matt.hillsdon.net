import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Typings for GatsbyLink seem a mess. Revisit.
const Link = ({ children, to, activeClassName, partiallyActive, ...other }: any) => {
  const internal = /^\/(?!\/)/.test(to);
  if (internal) {
    return (
      <GatsbyLink to={to} partiallyActive={partiallyActive} activeClassName={activeClassName} {...other}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};
export default Link;
