import React, { ReactNode } from 'react';
import styles from './Card.module.scss';
import Link from './Link';
import GitHubIcon from './GitHubIcon';

export interface CardProps {
  title: string;
  children: ReactNode;
  to: string;
  github?: string;
  date?: Date;
}

const monthYearFormat = (date: Date): string =>
  // Evil but the toDateString is defined.
  date
    .toDateString()
    .replace(/^.+? /g, '')
    .replace(/\d\d/, '');

const Card = ({ date, title, children, to, github }: CardProps) => {
  return (
    <div className={styles.root}>
      {date && <small className={styles.date}>{monthYearFormat(date)}</small>}
      <div className={styles.heading}>
        <Link to={to}>
          <h3>{title}</h3>
        </Link>
        {github && (
          <Link to={github}>
            <GitHubIcon />
          </Link>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;
