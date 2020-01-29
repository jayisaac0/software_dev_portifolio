import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

class Media extends Component {
    state = { 
        open: false,
        setOpen: false
     }

    handleClickOpen = () => {
        this.setState({setOpen:true, open: true});
    };
  
    handleClose = () => {
      this.setState({setOpen:false, open: false});
    };

    render() { 
        return ( 
            <div style={{flexDirection: "row",textAlign:"center"}}>
                <List style={{display: "contents"}}>
                    <a href="tel:+254770396785">
                        <ListItem button key={'0'}>
                            <ListItemIcon><PhoneInTalkIcon style={{fontSize: "100px",color:"green"}}/></ListItemIcon>
                        </ListItem>
                        <ListItemText primary={"PHONE CALL"} />
                    </a>
                </List>
                <List style={{display: "contents"}}>
                    <a href="whatsapp://send?text=Hello%20World!">
                        <ListItem button key={'3'}>
                            <ListItemIcon><WhatsAppIcon style={{fontSize: "100px",color:"green"}}/></ListItemIcon>
                        </ListItem>
                        <ListItemText primary={"WHATSAPP"} />
                    </a>
                </List>
                <List style={{display: "contents"}}>
                    <a href="mailto:jayisaac0@gmail.com?">
                        <ListItem button key={'5'}>
                            <ListItemIcon><AlternateEmailIcon style={{fontSize: "100px",color:"blue"}}/></ListItemIcon>
                        </ListItem>
                        <ListItemText primary={"MAIL"} />
                    </a>
                </List>
            </div>
         );
    }
}
 
export default Media;