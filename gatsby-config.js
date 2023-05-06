/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Learning Gatsby",
    description: "",
    copyright: `${new Date().getFullYear()} Learning Gatsby`,
    contact: "hello-gatsby@foo.com",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`, // Needed for dynamic images
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `brands`,
        path: `${__dirname}/src/brands/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
  ],
};
