import React, { Component } from 'react';
import BrokenLink from '../../assets/resources/broken.png';

class NotFound extends Component {
    state = {  }
    render() { 
        return (
            <div className="HomeGrid centeredreset CenterContent">
            <img src={BrokenLink} alt="logo" />
            <br />
            <h1>PAGE NOT FOUND</h1>
            </div>
        );
    }
}
 
export default NotFound;