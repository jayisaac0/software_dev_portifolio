import React, { Component } from 'react';

import './cv.css';
import curriculumvitae from '../../assets/cv/curriculumvitae.pdf';

class Cv extends Component {
    state = {  }
    render() { 
        return (
            <div className="cvalign">
                <p className="animated fadeInUp slower">I am in my final semester pursuing a B. Sc. in Mathematics and Computer Science in Kenyatta university, and currently working as a software engineer at gander technologies company in Nairobi. I have worked here since 2018, and truly enjoy working with a number of technologies and had the opportunity to develop my skills in the software development field. I have not only become more proficient in the languages I knew already, but have been able to add several more technologies to my tool belt as well.</p>
                <h3 className="animated fadeInUp slower">Career objective</h3>
                <p className="animated fadeInUp slower">To gain confidence and skill using my potential in the field of “Web and software Development”, and express my innovative creative skills for self and company growth.</p>
                <h3 className="animated fadeInUp slower">Technical proficiency</h3>
                <p className="animated fadeInUp slower">HTML5, CSS, MySQL, Python flask, Angular material, React, REST, QT QML, Cloud computing ( google cloud ), Flutter for app development, Microsoft WPF ( Windows platform ). My preferred technology is usually using react alongside flask or php PDO</p>
                <h3 className="animated fadeInUp slower">Work experience</h3>
                <p className="animated fadeInUp slower">
                Work as a web and software developer for Explore Education Africa company. Start date: May 2017 to August 2017<br />
                Software engineer at gander technologies. Engineered the back-end business logic and gander-pay payments API as per the company demands. What I considered in the course of development was:
                </p>
                    <div className="animated fadeInUp slower"><br />
                    <ul className="ListTypeDefination">
                        <li>Easy back-end code scale-ability with minimal package updates and upgrades to cub depreciation of code and libraries.</li>
                        <li>Smooth and instant payments gateway improving customer experience when dealing with transactions</li>
                        <li>Creation of custom payment gateway and merchant services for gander technulogy geared for use within the company and its products</li>
                    </ul>
                    </div>
                {/* <h3>Project experiences</h3>
                <p>
                    <h4>Projects worked on</h4>
                    <div className="centercvtext">
                        <a target="_newTab" href="https://writemywork.com/">https://writemywork.com/</a><br />
                        <a target="_newTab" href="https://gander.000webhostapp.com/">https://gander.000webhostapp.com/</a><br />
                        <a target="_newTab" href="https://k-schoolsystem.herokuapp.com/">https://k-schoolsystem.herokuapp.com/</a><br />
                        <a target="_newTab" href="https://github.com/jayisaac0/nsmsoftware-school-management-system">https://github.com/jayisaac0/nsmsoftware-school-management-system</a><br />                   
                    </div>
                </p> */}
                <hr />
                <h3 className="animated fadeInUp slower">Core skills</h3>
                <p className="animated fadeInUp slower">Web application programming and enterprise desktop software development.</p>
                <div className="animated fadeInUp slower"><br />
                    <ul className="ListTypeDefination">
                        <li>Node js</li>
                        <li>React js for front-end development and know how of cross-platform development with react, material components. </li>
                        <li>Python flask micro framework and web-sockets integration for back end and business logic.</li>
                        <li>C# for windows desktop development with windows platform foundation (WPF)</li>
                    </ul>
                </div>
                <h3 className="animated fadeInUp slower">Other skills</h3>
                <p className="animated fadeInUp slower">Unity game development programming with detailed 3D world models environment assets and physics.</p>
                <hr className="animated fadeInUp slower" />
                <h3 className="animated fadeInUp slower">Professional Areas of Interest</h3>
                <p className="animated fadeInUp slower">There are many things in the field of Computer Science that interest me. I feel as though there are far too many things to learn, and I am not ready to limit myself as to what specifically I would like to work on. I do have some specific interests however. Desktop development, web-app development, mobile development, and video game software are all very appealing to me. These areas often draw upon the latest technologies in Computer Science to remain competitive, and I feel like these areas would not only be enjoyable to work in, but they would allow me to grow as a software engineer</p>
                <h3 className="animated fadeInUp slower">Education</h3>
                <p className="animated fadeInUp slower">Bachelor of science Mathematics and computer science Kenyatta university Start date: 2015 to present: currently Final year.</p>





                <div className="FLoatingNavigationMenu">
                    <a target="_newTab" className="FloatingNavMarginMenu animated zoomIn slower" readOnly href={curriculumvitae}>
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                            <i className="material-icons">chrome_reader_mode</i>
                        </button>
                    </a>
                    <a className="FloatingNavMarginMenu animated zoomIn slower" download href={curriculumvitae}>
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                            <i className="material-icons">get_app</i>
                        </button>
                    </a>
                </div>
            </div>
        );
    }
}
 
export default Cv;