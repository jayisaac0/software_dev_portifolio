import React, { Component } from 'react';

class SectionThree extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="center_content content_fix"  style={{background: "url('assets/cover0.jpg') no-repeat",backgroundSize:"cover"}}>
                <div className="width_padding">
                    <h2 className="spacing">Stephen Maithya</h2>
                    <h4 className="spacing">Founder and creative director Award winning photographer </h4>
                </div>
                <div className="width_padding two_divisions">
                    <div className="half_width_padding">
                        <h1>My pass-time routines</h1>
                        <p className="spacing" style={{lineHeight:"2.0"}}>
                        During his free time, he visits children and the elderly,
    especially at the remote areas and engages them in his creative
    imaging and innovative projects. He also mentors examination
    candidates in schools across the country, both at the primary and
    secondary levels. 
                        </p>
                    </div>
                    <div className="half_width_padding">
                        <img src="assets/cover23.png" alt="leisure" />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SectionThree;