import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

/* eslint-disable-next-line */
export interface BasicAppbarProps {
  onMenuClick: React.MouseEventHandler;
  appbarTitle: string;
}

export function BasicAppbar(props: BasicAppbarProps) {
  const {onMenuClick, appbarTitle} = props;
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={onMenuClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {appbarTitle}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default BasicAppbar;
