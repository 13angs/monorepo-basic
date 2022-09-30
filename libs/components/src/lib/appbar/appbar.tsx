import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const component_name = 'basic-appbar';

const Root = styled('div')(({theme}) => ({
  display: 'flex',
  flexGrow: 1,

  [theme.breakpoints.up('xs')]: {
    [`#${component_name}-toolbar`]: {
      padding: `0px 0px 0px 0px`
    },

    [`#${component_name}-menus`]: {
      display: 'none'
    },

    [`#${component_name}-menu-btn`]: {
    },
  },

  [theme.breakpoints.up('lg')]: {
    [`#${component_name}-menus`]: {
      display: 'flex'
    },

    [`#${component_name}-menu-btn`]: {
      display: 'none'
    }
  },
}));


type MenuType = {
  name: string;
  icon: React.ReactNode;
}


export interface BasicAppbarProps {
  onMenuClick: React.MouseEventHandler;
  onCartClick: React.MouseEventHandler;
  appbarTitle: string;
  menus: Array<MenuType>;
}



export function BasicAppbar(props: BasicAppbarProps) {
  const {onMenuClick, onCartClick, appbarTitle, menus} = props;
  return (
    <Root id={`${component_name}-root`}>
      <AppBar position="static" id={`${component_name}-appbar`}>
        <Toolbar id={`${component_name}-toolbar`}>
          <Container sx={{display: 'flex', alignItems: 'center'}} id={`${component_name}-container`}>
            <IconButton
              onClick={onMenuClick}
              id={`${component_name}-menu-btn`}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              // sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography 
              variant={"h6"}
              component="div" 
              sx={{flexGrow: 1, cursor: 'pointer'}}
              id={`${component_name}-title`}
            >
              {appbarTitle}
            </Typography>

            {/* desktop menu */}
            <Stack id={`${component_name}-menus`} direction={"row"} spacing={1}>
              {menus.map((menu, ind) => (
                  <Button 
                    key={ind} 
                    sx={{color: theme => theme.palette.background.paper, 
                        textTransform: 'capitalize'}}
                    startIcon={menu.icon}
                  >
                    {menu.name}
                  </Button>
              ))}
            </Stack>

            <IconButton 
              sx={{color: theme => theme.palette.background.paper}}
              onClick={onCartClick}
            >
              <ShoppingCartIcon/>
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
    </Root>
  );
}

export default BasicAppbar;
