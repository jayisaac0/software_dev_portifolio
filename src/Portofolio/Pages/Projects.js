import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import axios from 'axios';
import gitsource from '../../assets/icons/SVG/gitsource.svg';
import livesite from '../../assets/icons/SVG/livesite.svg';
// import liveoff from '../../assets/icons/SVG/liveoff.svg';
import './projects.css';

class Projects extends Component {
  state = {
    projectcategories: [],
    projectsubcategories: []
  };

  async componentDidMount() {
    const { data: projectcategories } = await axios.get('/api/projectcategories');
    const { data: projectsubcategories } = await axios.get('/api/projectsubcategories');
    this.setState({projectcategories, projectsubcategories});
  }
  
  render() { 
    const { projectcategories, projectsubcategories } = this.state;
    // console.log(projectcategories);
    return (
      <div className="ProjectsContainer">
        { projectcategories.map(projectcategory =>
          <div key={ projectcategory.project_categories_id }>
          <div className="titleMargin">
            <h2 className=" animated fadeInUp slower">{projectcategory.project_category_title}</h2>
            <p className=" animated fadeInUp slower">{projectcategory.project_category_description}</p>
          </div>
          <br />
          { projectsubcategories.filter(projectsubcategories => projectsubcategories.project_categories_id === projectcategory.project_categories_id).map(p =>
            <Card className="CardWidth CardWidthbottommargin animated fadeInUp slower" key={ p.project_subcategories_id }>
              <div className="CardActionArea">
                <div className="ImageCard">
                  <img className="ProjectImageSizing animated zoomIn slower" src={ p.project_image_url } alt={ p.project_sub_category_title } />
                  </div>
                <div className="Infocard">
                  <h4 className=" animated fadeInDown slower">
                  { p.project_sub_category_title }
                  </h4>
        
                    <p>
                    { p.project_sub_category_description }
                    </p>
        
              <CardActions className="centeraligning">
                <a className="FloatingNavMargin rightmargin animated fadeInLeft slower" target="_newTab" href={ p.project_repository }>
                  <span className="mdl-chip mdl-chip--contact">
                  <span className="mdl-chip__contact mdl-color-text--white"><img  src={gitsource} alt={gitsource} /></span>
                  <span className="mdl-chip__text">View source code</span>
                  </span>
                </a>
                {/* <a className="FloatingNavMargin rightmargin" target="_newTab" href="https://www.linkedin.com/in/joshua-omwoyo-a66a9296/">
                  <span class="mdl-chip mdl-chip--contact">
                    <span class="mdl-chip__contact mdl-color-text--white"><img className="dtwo" src={liveoff} alt={liveoff} /></span>
                    <span class="mdl-chip__text">Contact Chip</span>
                  </span>
                </a> */}
                <a className="FloatingNavMargin rightmargin animated fadeInRight slower" target="_newTab" href={ p.project_live_url }>
                  <span className="mdl-chip mdl-chip--contact">
                      <span className="mdl-chip__contact mdl-color-text--white"><img className="dthree"  src={livesite} alt={livesite} /></span>
                      <span className="mdl-chip__text">View live project</span>
                  </span>
                </a>
              </CardActions>
                </div>
              </div>
            </Card>
          )}
          </div>
        )}
      </div>          
    );
  }
}

export default Projects;