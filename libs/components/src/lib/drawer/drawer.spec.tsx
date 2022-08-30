import { render } from '@testing-library/react';
import Drawer from './drawer';

describe('Drawer', () => {
  const show = () => {
    console.log('show');
  }
  it('should render successfully', () => {
    const { baseElement } = render(<Drawer open={true} onClose={show} anchor='left'/>);
    expect(baseElement).toBeTruthy();
  });
});
