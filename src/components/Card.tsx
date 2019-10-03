import React from 'react';
import styles from './Card.module.scss';
import Link from './Link';

export interface CardProps {
  title: string;
  description: string;
  to: string;
}

const Card = ({ title, description, to }: CardProps) => {
  return (
    <div className={styles.root}>
      <Link to={to}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default Card;
