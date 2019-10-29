import './global.scss';
import React, { ReactNode } from 'react';
import me from './me.jpg';
import styles from './Layout.module.scss';
import Helmet from 'react-helmet';
import Link from '../components/Link';

interface LayoutProps {
  style?: React.CSSProperties;
  children: ReactNode;
}

const Layout = ({ style, children }: LayoutProps) => {
  return (
    <div className={styles.root}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet" />
      </Helmet>

      <header>
        <div className={styles.img}>
          <Link to="/">
            <img src={me} width="170" height="170" />
          </Link>
        </div>
        <nav>
          <Link activeClassName={styles.activeMenu} partiallyActive={true} to="/writing/">
            Writing
          </Link>
          <Link activeClassName={styles.activeMenu} partiallyActive={true} to="/projects/">
            Projects
          </Link>
        </nav>
      </header>
      <div style={style} className={styles.content}>
        {children}
      </div>
      <footer>
        <div className={styles.footerContents}>
          <p>&copy; Matt Hillsdon {new Date().getFullYear()}</p>
          <div className={styles.contact}>
            <a href="mailto:matt@hillsdon.net">Email</a>
            <a href="https://twitter.com/matthillsdon">Twitter</a>
            <a href="https://github.com/mthx">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
