import {BasicAppbar} from '@mrb/components';
import HomePage from '../pages/home/home';

import('./app.module.css');
export function App() {
  return (
    <>
      <BasicAppbar/>
      <HomePage/>
    </>
  );
}
export default App;
