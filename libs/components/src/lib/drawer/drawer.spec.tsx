import { render } from '@testing-library/react';
import Drawer from './drawer';
import CartDrawer from './cart.drawer';

import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';

const listItems = [
  {name: 'Home', icon: <HomeIcon/>},
  {name: 'Product', icon: <InventoryIcon/>},
  {name: 'Article', icon: <AssignmentIcon/>},
  {name: 'Cart', icon: <ShoppingCartIcon/>},
  {name: 'About', icon: <InfoIcon/>},
];

describe('Drawer', () => {
  const show = () => {
    console.log('show');
  }
  it('should render successfully', () => {
    const { baseElement } = render(<Drawer 
                                    drawerWitdh={250} 
                                    open={true} 
                                    onClose={show} 
                                    anchor='left'
                                    listItems={listItems}
                                    tabLabel1='tabLabel1'
                                    tabLabel2='tabLabel2'
                                  />);
    expect(baseElement).toBeTruthy();
  });
});

describe('Cart Drawer', () => {
  const show = () => {
    console.log('show');
  }

  it('should render the Cart Drawer successfully', () => {
    const {baseElement} = render(
      <CartDrawer 
        drawerWitdh={250} 
        open={true} 
        onClose={show} 
        anchor='right'
        listItems={listItems}
        tabLabel1='tabLabel1'
        tabLabel2='tabLabel2'
      />
    );

    expect(baseElement).toBeTruthy();
  })
});
