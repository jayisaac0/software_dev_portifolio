import React, { Component } from 'react';
import Banner from '../info/Banner';
import SectionOne from '../body/SectionOne';
// import SectionTwo from './body/SectionTwo';
// import SectionThree from '../body/SectionThree';
// import SectionFour from '../body/SectionFour';
// import SectionFive from '../body/SectionFive';

class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
        <Banner />
        <SectionOne />
        {/* <SectionTwo /> */}
        {/* <SectionThree />
        <SectionFour />
        <SectionFive />                 */}
            </div>
         );
    }
}
 
export default Landing;