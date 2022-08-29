import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

/* eslint-disable-next-line */
export interface BasicAppbarProps {}

export function BasicAppbar(props: BasicAppbarProps) {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar position="static" sx={{padding: '0 0'}} >
        <Toolbar sx={{padding: 0}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default BasicAppbar;
