import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Drawer from '@material-ui/core/Drawer';
import Media from './Media';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },  
});

function Footer() {
      const classes = useStyles();
        const [value, setValue] = React.useState(0);
        const [state, setState] = React.useState({
          top: false,
          left: false,
          bottom: false,
          right: false,
        });
      
        const toggleDrawer = (side, open) => event => {
          if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
      
          setState({ ...state, [side]: open });
        };

        const handleClickOpen = async (event) => {
           setState({ show: true});
          };
        
           const handleClose = () => {
            // setOpen(false);
            setState({ show: false});
          };
    
    return (
        <div>

            <div  className="bottom_margin" style={{padding: "0px !important",margin:"0px",alignItems: "center",justifyContent: "center",textAlign: "center",flexDirection: "column"}}>
                <div className="width_padding">
                    <h2>Contacts</h2>
                    <h4>Software engineer</h4>
                    <p>jayisaac0@gmail.com</p>

                    <div className="width_padding  spacing">
                            <ButtonGroup className="spacing" size="large" aria-label="large outlined button group">
                                <Fab variant="extended"><a  className="centericons"  target="_newTab" href="https://www.linkedin.com/in/joshua-omwoyo-a66a9296/"><LinkedInIcon style={{marginRight:"10px",color:"blue"}} /> <b className="display_smallscreen">linkedin - Joshua Isaac</b></a></Fab>
                                <Fab variant="extended"><a  className="centericons"  target="_newTab" href="https://github.com/jayisaac0"><GitHubIcon style={{marginRight:"10px",color:"red"}} /> <b className="display_smallscreen">github - jayisaac0</b></a></Fab>
                            </ButtonGroup>
                        </div>    

                </div>
            </div>

            <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
            <BottomNavigationAction label="Projects" icon={<RestoreIcon />}  component={Link} to={"/projects"} />
            <BottomNavigationAction onClick={handleClickOpen} label="My CV" icon={<FavoriteIcon />} />
            <BottomNavigationAction onClick={toggleDrawer('right', true)} label="Contact" icon={<LocationOnIcon />} />
            </BottomNavigation>

            <Dialog fullScreen open={state.show} onClose={handleClose} >
            <IconButton style={{position:"fixed",width:"auto",background:"red"}} color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
            </IconButton>
                <div>
                    <iframe style={{width:"100%",height:"100vh"}} src="./software-engineer.pdf" title="cv" frameborder="0"></iframe>
                </div>
            </Dialog>  
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                <Media />
            </Drawer>
        </div>
    )
}

export default Footer
