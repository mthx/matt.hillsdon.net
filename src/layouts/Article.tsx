import React, { ReactNode } from 'react';
import Layout from './Layout';
import styles from './Article.module.scss';

const Article = ({ children, pageContext }: { pageContext: any; children: ReactNode }) => (
  <Layout style={{ display: 'flex', flexDirection: 'column' }}>
    <h1>{pageContext.frontmatter.title}</h1>
    <div className={styles.root}>{children}</div>
  </Layout>
);

export default Article;
