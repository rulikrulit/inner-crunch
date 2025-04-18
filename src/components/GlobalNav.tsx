import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const GlobalNav: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Inner Crunch
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/inner-crunch">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/inner-crunch/mission">
            Our Mission
          </Button>
          <Button color="inherit" component={Link} to="/inner-crunch/products">
            Our Products
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default GlobalNav;
