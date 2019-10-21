import React from 'react';
import Layout from '../layouts/Layout';
import { graphql } from 'gatsby';
import CardGrid from '../components/CardGrid';
import Card from '../components/Card';

export const pageQuery = graphql`
  query Writing {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, filter: { fileAbsolutePath: { regex: "/writing/" } }) {
      nodes {
        fileAbsolutePath
        excerpt(pruneLength: 75)
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
        }
      }
    }
  }
`;

const Writing = ({ data }: { data: any }) => {
  const articles = data.allMdx.nodes;
  return (
    <Layout>
      <h1>Writing</h1>
      <CardGrid>
        {articles.map((article: any) => (
          <Card
            date={new Date(article.frontmatter.date)}
            title={article.frontmatter.title}
            to={article.fileAbsolutePath.replace(/.*\/src\/posts/, '').replace(/.mdx$/, '')}
          >
            <p>{article.excerpt}</p>
          </Card>
        ))}
      </CardGrid>
    </Layout>
  );
};

export default Writing;
