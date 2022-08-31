import { render } from '@testing-library/react';
import Appbar from './appbar';
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

describe('Appbar', () => {
  const handleMenuClick = () => {
    console.log('Clicked')
  }
  it('should render successfully', () => {
    const { baseElement } = render(<Appbar 
                                    onMenuClick={handleMenuClick}
                                    menus={menus}
                                    appbarTitle={"MRB"}
                                  />);
    expect(baseElement).toBeTruthy();
  });
});
