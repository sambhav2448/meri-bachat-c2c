import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 275,
    background: '#515151',
    marginRight: '4px',
    height: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: '#eee',
  },
  white_text: {
    color: '#efefef',
  },
  pos: {
    marginBottom: 12,
  },
  orange_text: {
    color: 'orange',
    marginTop: 32,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Flipkart.com
        </Typography>
        <Typography variant='h5' component='h2' className={classes.white_text}>
          $400{' '}
        </Typography>

        <Typography
          variant='body2'
          component='p'
          className={classes.white_text}
        >
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' className={classes.orange_text}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
