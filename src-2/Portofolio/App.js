import React, { Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import TopNavigation from './Components/navigation/TopNavigation';
import MiniNavigation from './Components/navigation/MiniNavigation';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Fragment>
      <ToastContainer enableMultiContainer position={toast.POSITION.BOTTOM_RIGHT} />
      <TopNavigation />
      <MiniNavigation />
    </Fragment>    
  );
}

export default App;