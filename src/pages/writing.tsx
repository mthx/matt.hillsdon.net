import React from 'react';
import Layout from '../layouts/Layout';
import { graphql } from 'gatsby';
import CardGrid from '../components/CardGrid';
import Card from '../components/Card';

export const pageQuery = graphql`
  query Writing {
    allMdx {
      nodes {
        fileAbsolutePath
        excerpt(pruneLength: 75)
        frontmatter {
          date
          title
        }
      }
    }
  }
`;

const Writing = ({ data }) => {
  const articles = data.allMdx.nodes;
  return (
    <Layout>
      <h1>Writing</h1>
      <CardGrid>
        {articles.map(article => (
          <Card title={article.frontmatter.title} to={article.fileAbsolutePath.replace(/.*\/src\/writing/, '').replace(/.mdx$/, '')}>
            <p>{article.excerpt}</p>
          </Card>
        ))}
      </CardGrid>
    </Layout>
  );
};

export default Writing;
