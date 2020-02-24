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
    paddingTop:'20px',
  }

}));

const AboutPage = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography variant="h2" >
          Projects
        </Typography>
        <ul className={classes.content}>
            <li><a href="https://mfvil.github.io/bootstrap-gallery/">Bootstrap Photo Gallery</a></li>
            <li><a href="https://github.com/mfvil/durpal-blog-theme">Drupal Bootstrap Sub-Theme</a></li>
            <li><a href="https://mfvil.github.io/gallery/">Photo Gallery</a></li>
            <li><a href="https://mfvil.github.io/Color-Game/">RGB Color Game</a></li>
            <li><a href="https://github.com/mfvil">My Github</a></li>
        </ul>
    </Paper>
    </Layout>
  );
};


export default AboutPage;