import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import Button from '@material-ui/core/Button';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function TopNavigation() {
    const classes = useStyles();
    const [accountopen, accountsetOpen] = React.useState(false);

    const handleAccountClickOpen = () => {
        accountsetOpen(true);
      };
    
      const handleAccountClose = () => {
        accountsetOpen(false);
      };
    
    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              component={Link} to={"/"}>
              <b>JOSH</b>
            </IconButton>
            <Typography className={classes.title} variant="h6" >
            
            </Typography>
            <div className={classes.search}>
                <div style={{float:"right"}}>
                <IconButton onClick={handleAccountClickOpen}  aria-label="show 4 new mails" color="inherit">
                    <AccountCircleOutlinedIcon />
                </IconButton>
                <a href="/#skills">
                <span className="display_smallscreen" style={{marginLeft:"10px",marginRight:"10px"}}>Skills </span>
                </a>
                <Link to={"/projects"}>
                <span className="display_smallscreen" style={{marginLeft:"10px",marginRight:"10px"}}>Projects </span>
                </Link>
                {/* <IconButton className="nodisplay" component={Link} to={"/projects"} aria-label="show 4 new mails" color="inherit">
                 <PhotoCameraOutlinedIcon />
                </IconButton> */}
                <a href="tel:+254770396785">
                    <IconButton  aria-label="show 4 new mails" color="inherit">
                        <PhoneInTalkIcon />
                    </IconButton>
                </a>
                </div>
              
            </div>
          </Toolbar>
        </AppBar>


      <Dialog open={accountopen} TransitionComponent={Transition} keepMounted onClose={handleAccountClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description" >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">

            <div className="width_padding two_divisions" style={{display:"flex",flexDirection:"column"}}>
                <div className="half_width_padding">
                    <img src="./icon.png" alt="software-engineer" style={{width: "250px",height: "250px",borderRadius: "50%"}} />
                </div>
                <div className="half_width_padding">
                    <h2><b>Joshua isaac </b></h2>
                    Software engineer <br /><br />
                    0770396785<br />
                    jayisaac0@gmail.com<br />
                    Country: Nairobi - Kenya
                    <DialogActions style={{flexDirection: "column"}}>
                    <Button onClick={handleAccountClose} color="primary">
                        Close
                    </Button>
                    </DialogActions>
                </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>      

      </div>
    )
}

export default TopNavigation
