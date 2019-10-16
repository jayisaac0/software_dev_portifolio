import React, { Component } from 'react';
import axios from 'axios';
// import http from './httpService';
import './skills.css';
// import { animateScroll as scroll } from "react-scroll";
// import { Link } from 'react-router-dom';

class Skills extends Component {
    state = {
        categories: [],
        subcategories: []
    };

    async componentDidMount() {
        const {data: categories} = await axios.get('/api/categories');
        const {data: subcategories} = await axios.get('/api/subcategories');
        this.setState({categories, subcategories});
    }

    render() { 
        const {categories, subcategories} = this.state;
        // console.log(subcategories);

        return (
            <div className="SkillsBody">
                { categories.map(category => 
                    <div className="SkillsFullWidth animated fadeInUp slower" key={ category.categories_id }>
                        <div id="frontend" className="CenterSkills">
                        <h3 className="CenterContent animated fadeInUp slower">{category.category_title}</h3>
                        <p>{category.category_description}</p>
                        <br />
                            <div className="imageCategory">
                                { subcategories.filter(subcategory => subcategory.category_id === category.categories_id).map(s =>
                                    <div key={s.subcategories_id} className="infoAlign">
                                        <img className="ImageSizing animated zoomIn slower" style={{objectFit: "cover"}} src={s.image_url} alt={s.sub_category_title} />
                                        <p className=" animated fadeInRight slower">{s.sub_category_title}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            <br />

            {/* <div className="FLoatingNavigation">
                <Link className="FloatingNavMargin" to="frontend"><span className="material-icons">public</span></Link>
                <Link className="FloatingNavMargin" to="backend"><span className="material-icons">public</span></Link>
                <Link className="FloatingNavMargin" to="backend"><span className="material-icons">public</span></Link>
                <Link className="FloatingNavMargin" to="backend"><span className="material-icons">public</span></Link>
                <Link className="FloatingNavMargin" to="backend"><span className="material-icons">public</span></Link>
            </div> */}
        </div>                
        );
    }
}
 

export default Skills;