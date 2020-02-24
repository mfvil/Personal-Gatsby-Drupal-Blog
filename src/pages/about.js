import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  content:{
    paddingTop: "20px"
  }
}));

const AboutPage = (props) => {
  const classes = useStyles();

  return (
    <Layout>
       
      <Paper className={classes.root}>
      <Typography variant="h2">About Me</Typography>
        <Typography className={classes.content} variant="h5">
        Hello and Welcome!
        </Typography>
        <Typography variant="body1">
        I'm Roman and my goal is to become proficient in technologies powering the web. It will be a long journey (hence the blog title) and I'd like to take you the reader along with me. The purpose of my blog is to showcase and document my progress in learning web technologies. As times passes and I get more proficient, I plan to build and maintain my own projects, which I will showcase here. I will be focusing on HTML, CSS, Javascript, and Drupal CMS. As a matter of fact, I have built this site using the Drupal CMS.
        </Typography>
        <Typography  className={classes.content} variant="h5">
        But why Drupal?
        </Typography>
        <Typography variant="body1" paragraph>
        Drupal is a very robust and customizable CMS with great community support. It has been around for a long time and has evolved quite nicely over the years. I've had nothing but great experiences using Drupal for day to day content management tasks at my current job. So for me to explore it fully was a very logical fit.
          </Typography>
          <Typography  className={classes.content} variant="h5">
          So Join me...
        </Typography>
        <Typography variant="body1" paragraph>
        On my journey through which I will try to make frequent posts. To fulfill a wish in which I hope to help someone or maybe even inspire someone on their career path.
          </Typography>
      </Paper>
    </Layout>
  );
};


export default AboutPage;