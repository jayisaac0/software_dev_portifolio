import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Email from '@material-ui/icons/Email';
import Build from '@material-ui/icons/Build';
import LaptopMac from '@material-ui/icons/LaptopMac';
import Portrait from '@material-ui/icons/Portrait';
import Menu from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
// import curriculumvitae from '../../assets/cv/curriculumvitae.pdf';
//  download href={curriculumvitae}

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import curriculumvitae from '../../../assets/cv/curriculumvitae.pdf';

import './navigation.css';

// import skillsicon from '../../../assets/icons/SVG/skills.svg';
// import projectsicon from '../../../assets/icons/SVG/projects.svg';
// import contacticon from '../../../assets/icons/SVG/contact.svg';
// import cvicon from '../../../assets/icons/SVG/cv.svg';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export default function MiniNavigation() {

  const [value, setValue] = React.useState(0);




  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };


  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >

      <List>
          <ListItem button key="Contact me" component={Link} to={"/contact"}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Contact me" />
          </ListItem>
          <ListItem button key="View CV" component={Link} to={"/cv"}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="View CV" />
          </ListItem>
          <a download href={curriculumvitae}>
          <ListItem button key="Download CV">
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Download CV" />
          </ListItem>
          </a>
      </List>
    </div>
  );




  return (
    <div>

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
      
        <BottomNavigationAction className="animated fadeInUp slower SmallScreenHideMenuContent" label="Contact" icon={<Email />} component={Link} to={"/contact"}/>
        <BottomNavigationAction className="animated fadeInUp slower SmallScreenHideMenuContent" label="Cv" icon={<Portrait />} component={Link} to={"/cv"}/>

        <BottomNavigationAction className="animated fadeInUp slower FullScreenHideMenuContent" label="More options" icon={<Menu />} onClick={toggleDrawer('bottom', true)} />


      </BottomNavigation>


      
      <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
      >
        {fullList('bottom')}
      </SwipeableDrawer>
      

    </div>
  );
}
