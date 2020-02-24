import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, Link, graphql } from "gatsby"

const BlogListWrapper = () => (
  <StaticQuery
    Query={graphql`
      {
        allNodeBlogPost(limit: 3) {
          edges {
            node {
              drupal_id,
              title,
              path {
                alias,
              }
            }
          }
        }
      }
    `}
    render={data => <BlogList Posts={data.allNodeBlogPost.edges} />}
  />
);

const BlogList = ({Posts}) => (
  <ul>
    {
      Posts.map(({ node: Posts }) => (
        <li key={Posts.drupal_id}>
          <Link to={Posts.path.alias}>
            {Posts.title}
          </Link>
        </li>
      ))
    }
  </ul>
);

BlogList.propTypes = {
  Posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        drupal_id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        path: PropTypes.shape({
          alias: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default BlogListWrapper;