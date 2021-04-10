import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@material-ui/core';
import Card from './card';
import Grid from '@material-ui/core/Grid';
import './compare.css';

const Compare = () => {
  return (
    <div>
      <h1>Your pricing view is below</h1>
      <p>
        Get your cheapest price on meri bachat and fet notified when you get the
        desired prices
      </p>
      <Grid container justify='center'>
        <Grid item m={3} className='spacing_card middle_card'>
          <Card />
        </Grid>
        <Grid item m={3} className='spacing_card '>
          <Card />
        </Grid>
        <Grid item m={3} className='spacing_card middle_card'>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
};
export default Compare;
