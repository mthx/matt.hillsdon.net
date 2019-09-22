import React from 'react';
import styles from './Card.module.scss';

export interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className={styles.root}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
