import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1200,
    minHeight: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const BlogPost = (props) => {
  const classes = useStyles();
  const BlogLink = props => <Link to={props.path} {...props}>Read more</Link>;

  return (
    <Card className={classes.card}>
     
      <CardContent>
      <Link to={props.path}>
        <Typography className={classes.title}  color="textSecondary" >
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        </Link>
        <Typography variant="subtitle1">{props.date}</Typography>
        <Typography className={classes.pos} color="textSecondary" dangerouslySetInnerHTML={{ __html: props.body }} />
      </CardContent>
      <CardActions>
        <Button size="small" path={props.path} component={BlogLink}>Read more</Button>
      </CardActions>
    </Card>
  );
};

BlogPost.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default BlogPost;