import * as React from 'react';
import Box from '@mui/material/Box';
import {BasicAppbar, BasicDrawer} from '@mrb/components';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';

const menus = [
  {name: 'Product', icon: <InventoryIcon/>},
  {name: 'Article', icon: <AssignmentIcon/>},
  {name: 'Cart', icon: <ShoppingCartIcon/>},
  {name: 'About', icon: <InfoIcon/>},
];

const listItems = [
  {name: 'Home', icon: <HomeIcon/>},
  {name: 'Product', icon: <InventoryIcon/>},
  {name: 'Article', icon: <AssignmentIcon/>},
  {name: 'Cart', icon: <ShoppingCartIcon/>},
  {name: 'About', icon: <InfoIcon/>},
];

const tabLabel1 = 'Menu';
const tabLabel2 = 'Demo';


export function HomePage() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
      setOpen(open);
    };
  const handleClose = () => {
    setOpen(false);
  }

  const hash = location.hash;
  React.useEffect(( ) => {

    if(hash.length > 1 && hash.includes('#'))
    {
      const section = document.querySelector(hash);  
      // console.dir(section);
  
      section.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    }
  }, [hash]);


  return (
    <>
      <BasicAppbar 
        appbarTitle='MRB' 
        onMenuClick={toggleDrawer(true)}
        menus={menus}
      />
      <Box sx={{display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <Link to={'#hello-world'}>
              Click
          </Link>
          <Box sx={{height: '1000px', width: '100%'}}>

          </Box>
          <h3 id="hello-world">Hello world</h3>

          <Box sx={{height: '1000px', width: '100%'}}>

          </Box>
          <h3 id="hello-there">Hello there</h3>
      </Box>
      <BasicDrawer 
        anchor='left'
        drawerWitdh={250}
        open={open} 
        onClose={handleClose}
        listItems={listItems}
        tabLabel1={tabLabel1}
        tabLabel2={tabLabel2}
      />
    </>
  );
}

export default HomePage;