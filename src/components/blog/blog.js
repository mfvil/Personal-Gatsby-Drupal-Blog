import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Blog = (props) => (
  <>
    <Typography variant="h2" paragraph>{props.title}</Typography>
    <Typography variant="subtitle1">{props.date}</Typography>
    <Typography variant="body1" paragraph dangerouslySetInnerHTML={{ __html: props.body }} />
  </>
  
);


Blog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  tags: PropTypes.array,
};

export default Blog;