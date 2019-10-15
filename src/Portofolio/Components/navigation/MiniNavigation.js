import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Email from '@material-ui/icons/Email';
import Build from '@material-ui/icons/Build';
import LaptopMac from '@material-ui/icons/LaptopMac';
import Portrait from '@material-ui/icons/Portrait';
import { Link } from 'react-router-dom'
import './navigation.css';

// import skillsicon from '../../../assets/icons/SVG/skills.svg';
// import projectsicon from '../../../assets/icons/SVG/projects.svg';
// import contacticon from '../../../assets/icons/SVG/contact.svg';
// import cvicon from '../../../assets/icons/SVG/cv.svg';

export default function MiniNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="BottomNavigation"
    >
      <BottomNavigationAction className="animated fadeInUp slower" label="Skills" icon={<Build />} component={Link} to={"/skills"}/>
      <BottomNavigationAction className="animated fadeInUp slower" label="Projects" icon={<LaptopMac />} component={Link} to={"/projects"}/>
      <BottomNavigationAction className="animated fadeInUp slower" label="Contact" icon={<Email />} component={Link} to={"/contact"}/>
      <BottomNavigationAction className="animated fadeInUp slower" label="Cv" icon={<Portrait />} component={Link} to={"/cv"}/>
    </BottomNavigation>
  );
}
