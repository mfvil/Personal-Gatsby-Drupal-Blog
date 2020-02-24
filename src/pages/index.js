import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/layout'
import BlogPost from '../components/BlogPost/BlogPost';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const IndexPage = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <Box mt={3}>
        <Grid container spacing={1}>
        {
          props.data.allNodeBlogPost.edges.map(({ node: blog}) => (
            <Grid item key={blog.title} xs={12} >
              <BlogPost
                title={blog.title}
                date={blog.field_date}
                body={blog.body.value}
                path={blog.path.alias}
              />
            </Grid>
          ))
        }
        </Grid>
      </Box>
    </Layout>
  );
};


export default IndexPage;

// The result of this GraphQL query will be injected as props.data into the
// IndexPage component.
export const query = graphql`
  query {
    allNodeBlogPost(sort: {fields: [changed], order:DESC}) {
      edges {
        node {
          drupal_id,
          title,
          field_date(formatString: "MM.DD.YYYY"),
          path {
            alias,
          }
          body: body {
            value,
          },
          relationships {
            tags: field_tags {
              name,
            }
          }
        }
      }
    }
  }
`;
