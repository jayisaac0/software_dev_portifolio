import React, { Component } from 'react';
class SectionOne extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="center_content content_fix" id="skills" style={{background:"#f6fbfa"}}>
                <div className="width_padding">
                    <h2 className="spacing">Skills and technologies</h2>
                    <h4 className="spacing">Founder and creative director Award winning photographer </h4>
                </div>
                <div className="width_padding three_divisions">
                    <div className="third_width_padding">
                        <h2>Front-end technologies</h2>
                        <ul>
                            <li>React js</li>
                            <li>Angular material</li>
                        </ul>
                    </div>
                    <div className="third_width_padding">
                        <h2>Back-end technologies</h2>
                        <ul>
                            <li>Node js - Express</li>
                            <li>Python flask</li>
                        </ul>
                    </div>
                    <div className="third_width_padding">
                        <h2>General programming</h2>
                        <ul>
                            <li>Javascript</li>
                            <li>C#</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="third_width_padding">
                        <h2>Deployment services</h2>
                        <ul>
                            <li>Google cloud</li>
                            <li>Netlify</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                    <div className="third_width_padding">
                        <h2>Database services</h2>
                        <ul>
                            <li>Postgres</li>
                            <li>Mysql</li>
                            <li>Mongo</li>
                        </ul>
                    </div>
                    <div className="third_width_padding">
                        <h2>Tools services</h2>
                        <ul>
                            <li>Editor: Visual studio code</li>
                            <li>Version control: Git</li>
                        </ul>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default SectionOne;