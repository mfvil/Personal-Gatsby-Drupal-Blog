import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/layout';
import Blog from '../components/Blog/Blog';
import BlogList from '../components/BlogList/BlogList';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
}));

const blogTemplate = (props) => {
  const classes = useStyles();
  const { nodeBlogPost: blog } = props.data;

  return (
    <Layout>
      <Helmet
        title={`Join Me on My Journey - ${blog.title}`}
        meta={[
          {name: 'description', content: blog.title},
        ]}
      />
      <Paper className={classes.root}>
        <Blog
          {...blog}
          tags={blog.relationships.field_tags.name}
          date={blog.field_date}
          body={blog.body.value}
        />
        <BlogList />
      </Paper>
    </Layout>
  )
};

export default blogTemplate;

// The $drupal_id variable here is obtained from the "context" object passed into
// the createPage() API in gatsby-node.js.
//
// Also note the use of field name aliasing in the query. This is done to
// help normalize the shape of the recipe data.
export const query = graphql`
  query blogTemplate($drupal_id: String!) {
    nodeBlogPost(drupal_id: {eq: $drupal_id}) {
      drupal_id
      title
      field_date(formatString: "MM.DD.YYYY"),
      relationships {
        field_tags {
          name
        }
      }
      body {
        value
      }
    }
  }
`;