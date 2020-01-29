import React from 'react';
import { Route, Switch } from "react-router-dom";
import TopNavigation from './components/navigation/TopNavigation';
import Footer from './components/footer/Footer';
import Landing from './components/pages/Landing';
import Projects from './components/pages/Projects';

function App() {
  return (
    <div className="App">
        <TopNavigation />
            <Switch>
                <Route exact path={'/'} component={Landing} />
                <Route exact path={'/projects'} component={Projects} />
            </Switch>            
        <Footer />
    </div>
  );
}

export default App;
