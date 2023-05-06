const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Brands {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/brands/${node.frontmatter.slug}/`,
      component: path.resolve("./src/templates/brand-detail.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
