import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './home';
describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(getByText(/MRB/gi)).toBeTruthy();
  });
});
