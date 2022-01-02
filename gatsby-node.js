const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query DetailsPage {
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
      path: "/work/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
