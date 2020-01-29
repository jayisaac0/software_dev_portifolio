import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

class Banner extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="top_margin center_content" >
                <div className="width_padding two_divisions">
                    <div className="half_width_padding">
                        <h1 className="spacing">Joshua here!</h1>
                        <p className="spacing"  style={{lineHeight:"2.0"}}>
                        I am a Software Engineer with a background in Design and Software Development and a tech entusiast. I love building awesome applications and software and have a keen eye for detail in design phase. I've built websites, corporate software and management systems and even games! If you are interested, you can view some of my projects bellow.
                        </p>
                        <div className="width_padding  spacing">
                            <ButtonGroup className="spacing" size="large" aria-label="large outlined button group">
                                <Fab variant="extended"><a  className="centericons"  target="_newTab" href="https://www.linkedin.com/in/joshua-omwoyo-a66a9296/"><LinkedInIcon style={{marginRight:"10px",color:"blue"}} /> <b className="display_smallscreen">linkedin - Joshua Isaac</b></a></Fab>
                                <Fab variant="extended"><a  className="centericons"  target="_newTab" href="https://github.com/jayisaac0"><GitHubIcon style={{marginRight:"10px",color:"red"}} /> <b className="display_smallscreen">github - jayisaac0</b></a></Fab>
                            </ButtonGroup>
                        </div>                 
                   </div>
                    <div className="half_width_padding">
                        <img style={{width:"100%"}} src="one.png" alt="frame"  />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Banner;