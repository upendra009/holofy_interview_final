import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0.1,
  },
  navbarTitle :{
    justifyContent: 'center',
    alignItems:"center"
    }
 
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
             <Typography variant="h4"  color="inherit">
             <Box fontWeight="fontWeightBold" m={1}   justifyContent="center">
             Holofy Products
             </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
