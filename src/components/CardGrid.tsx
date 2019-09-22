import React, { ReactNode } from 'react';
import styles from './CardGrid.module.scss';

interface CardGridProps {
  children: ReactNode;
}

const CardGrid = ({ children }: CardGridProps) => {
  return <div className={styles.root}>{children}</div>;
};

export default CardGrid;
