import React from 'react'
import { Route, Link } from 'react-router-dom';
import Home from '../../Pages/Home';
import Skills from '../../Pages/Skills';
import Contact from '../../Pages/Contact';
import Projects from '../../Pages/Projects';
// import NotFound from '../../Pages/NotFound';
import Cv from '../../Pages/Cv';
import gmail from '../../../assets/icons/SVG/gmail.svg';
import mobilecall from '../../../assets/icons/SVG/mobile.svg';

export default function TopNavigation() {
    return (
<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header ">
  <header className="mdl-layout__header TopNavigationReset">
    <div className="mdl-layout__header-row NavResetPadding">
      <span className="mdl-layout-title spanBrand animated fadeInLeft slower"><Link to={'/'}>Dev-J</Link></span>
      <div className="mdl-layout-spacer"></div>
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        <Link to={'/skills'} className="TopNavigationPadding animated fadeInLeft slower">Skills</Link>
        <Link to={'/projects'} className="TopNavigationPadding animated fadeInDown slower">Projects</Link>
        <Link to={'/contact'} className="TopNavigationPadding animated fadeInUp slower">Contact</Link>
        <Link to={'/cv'} className="TopNavigationPadding animated fadeInRight slower">Cv</Link>
      </nav>
      <nav className="mdl-navigation mdl-layout--small-screen-only">
        <a className="FloatingNavMargin" target="_newTab" href="mailto:jayisaac0@gmail.com"><img className="socialsize" src={gmail} alt={gmail} /> </a>
        <a className="FloatingNavMargin mobilecall" target="_newTab" href="tell:0770396785"><img className="socialsize" src={mobilecall} alt={mobilecall} /> </a>
      </nav>
    </div>
  </header>
  <main className="mdl-layout__content">
    <div className="page-content page-content-resets">
      <Route exact path={'/'} component={Home} /> 
      <Route exact path={'/skills'} component={Skills} /> 
      <Route exact path={'/contact'} component={Contact} /> 
      <Route exact path={'/projects'} component={Projects} /> 
      <Route exact path={'/cv'} component={Cv} /> 
      {/* <Route exact path={'/not-found'} component={NotFound} /> 
      <Redirect to="not-found" /> */}
    </div>
  </main>
</div>        
    )
}
