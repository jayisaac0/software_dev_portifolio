import React from "react";
import "./home.css";
import Logo from "../../assets/icon.png";

import github from "../../assets/icons/SVG/github.svg";
import linkedin from "../../assets/icons/SVG/linkedin.svg";
import quora from "../../assets/icons/SVG/quora.svg";
import backgroundone from "../../assets/resources/backgroundone.png";
import backgroundfour from "../../assets/resources/backgroundfour.png";
// import mockup from '../../assets/resources/mockup.png';

const Home = () => {
  return (
    <div>
      <div className="HomeGrids">
        <div className="InnerGrid CenterContent">
          <div className="LogoImageSizing animated fadeInDown slower">
            <img src={Logo} alt="logo" />
          </div>
          <h1 className=" animated fadeInLeft slower">Software engineer</h1>
          <h2 className=" animated fadeInUp slower">Joshua Isaac</h2>
          <br />
          <div className="SpacerSection"></div>
          <img
            src={backgroundone}
            style={{ width: "95%" }}
            alt="landingimage"
            className="Landingimage animated zoomIn slower"
          />
        </div>
        {/* <img src={mockup} alt="landingimage" className="mdl-layout--large-screen-only" /> */}
        <div className="InnerGrid">
          <img
            src={backgroundfour}
            alt="landingimage"
            className="Landingimage animated zoomIn slower mdl-layout--large-screen-only"
          />
          <br />
          <br />
          <div className="SpacerSection"></div>
          <h2 className=" animated fadeInDown slower">About me</h2>
          <br />
          <br />
          <p className=" animated zoomIn slower">
            I am a tech entusiast and like building awesome software. I've built
            websites, corporate software and management systems and even games!
            If you are interested, you can view some of my projects bellow.
          </p>
          <br />
          <br />
          <div className="SpacerSection"></div>
          <div className="socialicons">
            {/* <a className="FloatingNavMargin" target="_newTab" href="https://github.com/jayisaac0"><img className="socialsize" src={github} alt={github} /> </a>
                        <a className="FloatingNavMargin" target="_newTab" href="https://www.linkedin.com/in/joshua-omwoyo-a66a9296/"><img className="socialsize" src={linkedin} alt={linkedin} /> </a>
                        <a className="FloatingNavMargin" target="_newTab" href="https://www.quora.com/profile/Joshua-Omwoyo-1"><img className="socialsize" src={quora} alt={quora} /> </a> */}

            <a
              className="FloatingNavMargin rightmargin"
              target="_newTab"
              href="https://github.com/jayisaac0"
            >
              <span className="mdl-chip mdl-chip--contact">
                <span className="mdl-chip__contact mdl-color-text--white">
                  <img src={github} alt={github} />
                </span>
                <span className="mdl-chip__text"> My Github profile</span>
              </span>
            </a>
            <a
              className="FloatingNavMargin rightmargin"
              target="_newTab"
              href="https://www.linkedin.com/in/joshua-omwoyo-a66a9296/"
            >
              <span className="mdl-chip mdl-chip--contact">
                <span className="mdl-chip__contact mdl-color-text--white">
                  <img src={linkedin} alt={linkedin} />
                </span>
                <span className="mdl-chip__text"> My Linkedin profile</span>
              </span>
            </a>
            <a
              className="FloatingNavMargin rightmargin"
              target="_newTab"
              href="https://www.quora.com/profile/Joshua-Omwoyo-1"
            >
              <span className="mdl-chip mdl-chip--contact">
                <span className="mdl-chip__contact mdl-color-text--white">
                  <img src={quora} alt={quora} />
                </span>
                <span className="mdl-chip__text"> My quora profile</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="HomeGrids">
        <p>Copyright &copy; 2019</p>
      </div>
    </div>
  );
};

export default Home;
