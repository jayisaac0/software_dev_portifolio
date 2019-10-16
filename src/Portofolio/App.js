import React, { Fragment } from 'react';
import './App.css';
import TopNavigation from './Components/navigation/TopNavigation';
import MiniNavigation from './Components/navigation/MiniNavigation';

const App = () => {
  return (
    <Fragment>
      <TopNavigation />
      <MiniNavigation />
    </Fragment>    
  );
}

export default App;