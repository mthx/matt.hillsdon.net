import './global.scss';
import React, { ReactNode } from 'react';
import me from './me.jpg';
import styles from './Layout.module.scss';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import separator from './water-strip.png';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.root}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet" />
      </Helmet>
      <header>
        <div className={styles.img}>
          <Link to="/">
            <img src={me} width="180" height="180" />
          </Link>
        </div>
        <nav>
          <Link activeClassName={styles.activeMenu} to="writing/">
            Writing
          </Link>
          <Link activeClassName={styles.activeMenu} to="code/">
            Code
          </Link>
        </nav>
      </header>
      <div className={styles.content}>{children}</div>
      <footer>
        <div className={styles.footerContents}>
          <p>&copy; Matt Hillsdon {new Date().getFullYear()}</p>
          <div className={styles.contact}>
            <a href="mailto:matt@hillsdon.net">matt@hillsdon.net</a>
            <a href="https://twitter.com/matthillsdon">@matthillsdon</a>
            <a href="https://github.com/mthx">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
