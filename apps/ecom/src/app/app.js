import * as React from 'react';
import HomePage from '../pages/home/home';
import {Routes, Route} from 'react-router-dom';
import('./app.module.css');

export function App() {
  
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
  );
}
export default App;
