module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Sample`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-manifest',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        // https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layouts/Layout.tsx'),
          posts: require.resolve('./src/layouts/Article.tsx')
        }
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      }
    }
  ]
};
