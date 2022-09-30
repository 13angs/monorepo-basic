import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {styled} from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import OutlinedInput from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';

import SearchIcon from '@mui/icons-material/Search';

const component_name = 'Cart-drawer';

const Root = styled('div')(({theme}) => ({
  [theme.breakpoints.up('xs')]: {

  }
}));

type Anchor = 'top' | 'left' | 'bottom' | 'right';
type Open = boolean;

export interface CartDrawerProps extends CartTabsProps {
  // setOpen: React.Dispatch<React.SetStateAction<Open>>;
  anchor: Anchor;
  open: Open;
  drawerWitdh: number;
  onClose: () => void;
}

export function CartDrawer(props: CartDrawerProps) {
  const {open, anchor, onClose, 
      drawerWitdh, listItems, 
      tabLabel1, 
      tabLabel2} = props;

  const list = () => (
    <Box
      sx={{ width: {xs: drawerWitdh, sm: 275, md: 300} }}
      role="presentation"
    >
      <CartTabs 
        listItems={listItems}
        tabLabel1={tabLabel1}
        tabLabel2={tabLabel2}
      />
      <Divider />
    </Box>
  );


  const handleClose = (open: Open) => {
    // setOpen(open);
    onClose();
  }

  return (
    <Root id={`${component_name}-root`}>
        <Drawer
          id={`${component_name}-drawer`}
          anchor={anchor}
          open={open}
          onClose={(e) => handleClose(false)}
        >
          {list()}
        </Drawer>
    </Root>
  );
}


const CartTabsRoot = styled('div')(({theme}) => ({
  // width: '100%',

  [theme.breakpoints.up('xs')]: {
    [`#${component_name}-search-container`]: {
      position: 'relative',
      padding: theme.spacing(1, 2),
      margin: theme.spacing(1, 1, 0, 1),
      backgroundColor: theme.palette.grey[200],
      borderRadius: theme.shape.borderRadius
      // maxWidth: '100%',
    },

    [`#${component_name}-search-icon`]: {
      // position: 'absolute',
      alignSelf: 'center',
      marginRight: theme.spacing(.5)
      // left: `calc(${theme.spacing(2)})`,
      // bottom: 
      // right: 0,
      // top: 0,
      // bottom: 0,
      // width: '100%',
      // height: '100%'
    },
    [`#${component_name}-search-field`]: {
      maxWidth: '100%',

      [`& .MuiOutlinedInput-root .focused`]: {
        borderColor: theme.palette.background.paper
      }
      // height: '100%'
    },
  }
}))

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      id={`${component_name}-tabpanel-${index}`}
      className={`${component_name}-tabpanel`}
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
          children
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type ListItemType = {
  name: string,
  icon: React.ReactNode
};

export interface CartTabsProps {
  listItems: Array<ListItemType>;
  tabLabel1: string;
  tabLabel2: string;
}
export function CartTabs(props: CartTabsProps) {
  const {listItems, tabLabel1, tabLabel2} = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CartTabsRoot>
      <Stack direction={"row"} id={`${component_name}-search-container`}>
        <SearchIcon id={`${component_name}-search-icon`}/>
        <OutlinedInput 
          sx={{
            padding: 0,
            paddingBottom: 0,
            paddingTop: 0
          }}
          size="small" 
          fullWidth 
          // sx={{paddingLeft: theme => theme.spacing(2)}}
          id={`${component_name}-search-field`} />
      </Stack>
      <Box sx={{ borderBottom: 1, mt: 1, borderColor: 'divider' }} id={`${component_name}-tabs-menu`}>
        <Tabs variant='fullWidth' centered value={value} onChange={handleChange} aria-label="Cart tabs example">
          <Tab label={tabLabel1} {...a11yProps(0)} />
          <Tab label={tabLabel2} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <List id={`${component_name}-list`}>
          {listItems.map((item, index) => (
            <ListItem key={item.name} disablePadding id={`${component_name}-list-item-${index}`}>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {tabLabel2}
      </TabPanel>
    </CartTabsRoot>
  );
}

export default CartDrawer;
