import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';
import TagFacesIcon from '@material-ui/icons/TagFaces';

class Projects extends Component {
    state = { 
        projects: [
            { 
                id: 1,
                image: 'one.png',
                title: 'Traffic Sign Classifier (Convolutional Neural Network)',
                description: 'A challenging project that stretched my understanding of Neural Networks especially CNN’s and their successful use in Computer Vision. I built the network on Keras framework running on top of Tensorflow backend, trained on Google Colab using thousands of images in the training set and attained an accuracy of 97.8% against the test set. I further tested the model on some independent external data and it performed well.',
                source: '',
                live: 'https://github.com/jayisaac0/software_dev_portifolio',
                opensource: false,
                frontend: 'React js',
                backend: 'Node js',
                database: 'Postgres'
            },
            { 
                id: 2,
                image: 'one.png',
                title: 'Traffic Sign Classifier (Convolutional Neural Network)',
                description: 'A challenging project that stretched my understanding of Neural Networks especially CNN’s and their successful use in Computer Vision. I built the network on Keras framework running on top of Tensorflow backend, trained on Google Colab using thousands of images in the training set and attained an accuracy of 97.8% against the test set. I further tested the model on some independent external data and it performed well.',
                source: '',
                live: 'https://github.com/jayisaac0/software_dev_portifolio',
                opensource: false,
                frontend: 'React js',
                backend: 'Node js',
                database: 'Postgres'
            },
            { 
                id: 3,
                image: 'https://i.ytimg.com/vi/IPQoMiu6zTI/maxresdefault.jpg',
                title: 'Node js (open source) - SQL restful api with authentication and authorization',
                description: 'This is a rewrite of the mongo restful service api that makes use of mongo database to make use of the SQL technologies like postgres, sqlite and mysql. The api is a CRUDE system that allows registration of users to the database and has got user login and registrations with two admin authorization channels',
                source: 'https://github.com/jayisaac0/mysql_api',
                live: '',
                opensource: true,
                frontend: 'React js',
                backend: 'Node js',
                database: 'Postgres'
            },
            { 
                id: 4,
                image: 'https://miro.medium.com/max/600/0*11eDqY4zA04y2_n6.jpg',
                title: 'Node js (open source) - Mongo restful api with authentication and authorization',
                description: 'I created a restful service api that makes use of mongo database. The api is a CRUDE system that allows registration of users to the database and has got user login and registrations with two admin authorization channels.',
                source: 'https://github.com/jayisaac0/mongo_api',
                live: '',
                opensource: true,
                frontend: 'React js',
                backend: 'Node js',
                database: 'Postgres'
            }
        ]
     }
    render() { 
        return ( 
            <div className="center_content top_margin" style={{padding: "0px !important"}}>

                <List>
                    {this.state.projects.map(project => (
                        <div key={project.id}>
                            <ListItem alignItems="flex-start" className="smdev">
                                <img src={project.image} alt="frame" style={{width:"350px",padding:"10px"}} />
                                <ListItemText>
                                    <h2>{project.title}</h2>
                                    <p>
                                        {project.description}<br />
                                        <b>
                                            <Chip className="ic_marg" icon={<TagFacesIcon />} label={project.frontend}   />
                                            <Chip className="ic_marg" icon={<TagFacesIcon />} label={project.backend}   />
                                            <Chip className="ic_marg" icon={<TagFacesIcon />} label={project.database}   />
                                        </b>
                                    </p>
                                    {project.opensource === false ? null :
                                        <a href={project.source}>
                                            <Chip label="Open source" clickable color="primary" variant="outlined" />
                                        </a>
                                    }
                                    {project.source === '' ? null :
                                        <a href={project.source}>
                                            <Chip icon={<GitHubIcon />} label="View source" clickable color="primary" variant="outlined" />
                                        </a>
                                    }
                                    {project.live === '' ? null :
                                        <a href={project.live}>
                                            <Chip icon={<PublicIcon />} label="View live" clickable color="primary" variant="outlined" />
                                        </a>
                                    }
                                </ListItemText>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    ))}
                </List>
            </div>            
         );
    }
}
 
export default Projects;