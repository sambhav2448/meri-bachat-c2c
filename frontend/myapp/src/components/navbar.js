// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';

// import {
//   Grid,
//   Button,
//   AppBar,
//   Toolbar,
//   Typography,
//   MenuItem,
//   Menu,
//   Avatar,
// } from '@material-ui/core';

// import './styles.css';

// const styles = (theme) => ({
//   row: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   container: {
//     width: 1170,
//     margin: 'auto',
//   },
//   buttonFontSize: {
//     fontSize: '11px',
//     color: '#a1a1a1',
//   },

//   AppBar: {
//     //height:400,
//     //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
//     backgroundColor: '#fff',
//     backgroundSize: 'cover',
//   },
//   mainLogo: {
//     color: '#a1a1a1',
//     justifyContent: 'left',
//     '&:hover': {
//       background: 'transparent',
//     },
//   },

//   avatar: {
//     height: '100%',
//     borderRadius: 0,
//   },

//   loginButton: {
//     background: '#e91e63',
//     color: '#fff',
//     borderRadius: '25px',
//     padding: '0px 25px',

//     '&:hover': {
//       background: 'blue',
//       boxShadow: '0px 2px 10px #888888',
//     },
//   },
// });

// @withStyles(styles)
// class Navbar extends React.Component {
//   state = {
//     anchorEl: null,
//   };

//   handleMenu = (event) => {
//     this.setState({ anchorEl: event.currentTarget });
//     console.log(event.currentTarget);
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   render() {
//     const { classes } = this.props;
//     const { anchorEl } = this.state;
//     const open = Boolean(anchorEl);

//     return (
//       <div className={classes.root}>
//         <AppBar position='static' color='default' className={classes.AppBar}>
//           <Grid item sm={12} xs={12} className={classes.container}>
//             <Toolbar>
//               <Grid className={classes.grow}>
//                 <Button className={[classes.mainLogo]}>
//                   <Avatar
//                     src='https://uploads.codesandbox.io/uploads/user/3e41a372-fc65-4387-bca0-70a050914db8/VIR9-logo.jpg'
//                     className={classes.avatar}
//                   />
//                 </Button>
//               </Grid>
//               <Button
//                 color='inherit'
//                 onClick={this.handleMenu}
//                 className={classes.buttonFontSize}
//               >
//                 Discover
//               </Button>
//               <Menu
//                 id='menu-appbar'
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={open}
//                 onClose={this.handleClose}
//               >
//                 <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={this.handleClose}>My account</MenuItem>
//               </Menu>
//               <Button color='inherit' className={classes.buttonFontSize}>
//                 Profile
//               </Button>
//               <Button
//                 color='inherit'
//                 className={[classes.buttonFontSize, classes.loginButton]}
//               >
//                 Login
//               </Button>
//             </Toolbar>
//           </Grid>
//         </AppBar>
//       </div>
//     );
//   }
//   export defualt Navbar;
// }
