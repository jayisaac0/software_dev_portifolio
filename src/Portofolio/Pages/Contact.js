import React from 'react';
import axios from 'axios';
  import { ToastContainer, toast } from 'react-toastify';

import Joi from 'joi-browser';
import Form from '../common/Form';
import Input from "../common/Input";
import './Contact.css';
import 'react-toastify/dist/ReactToastify.css';

class Contact extends Form {

    state = {
        data: {name: "", email: "", subject: "", message: ""}, 
        errors: {}
    };

    schema = {
        name: Joi.string().required().label('Name'),
        email: Joi.string().required().label('Email').email(),
        subject: Joi.string().required().label('Subject').min(10),
        message: Joi.string().required().label('Message').min(50)
    };

    doSubmit = async () => {
        const obj = { name: "JOshua", email: "j@j.w", subject: "sndn", message: "sdhcl" };
        const { data: post } = await axios.post('/api/email', obj);
        console.log(post);
        const posts = [post, ...this.state.posts];
        this.setState({posts});

        // toast("Default Notification !");
        
        console.log("SUBMITTED");
    };

    render() { 
        const { data, errors } = this.state;

        return (
            <div>
                <ToastContainer enableMultiContainer position={toast.POSITION.BOTTOM_RIGHT} />
            <div className="HomeGrids">
                <div className="InnerGrid animated bounceInLeft slower">
                    <div className="CenterContent">
                        <span className="material-icons" style={{ fontSize: '300px' }}>email</span>
                        {/* <h1>Software engineer</h1> */}
                        <h2>CONTACT ME</h2>
                        <br />
                    </div>
                </div>
                <div className="InnerGrid animated bounceInRight slower">
                    {/* <h5>data FORM</h5> */}
                    <form onSubmit={this.handleSubmit} className="datacontainer">



                        <Input
                            id="outlined-with-placeholder"
                            name="name"
                            value={data.name}
                            onChange={this.handleChange}
                            label="Provide full name"
                            placeholder="Enter name"
                            className="datatextField"
                            margin="normal"
                            variant="outlined"
                            error={errors.name}
                        />


                        <Input
                            id="outlined-with-placeholder"
                            htmlFor="email"
                            name="email"
                            value={data.email}
                            onChange={this.handleChange}
                            label="Provide your email"
                            placeholder="Enter email"
                            className="datatextField"
                            margin="normal"
                            variant="outlined"
                            error={errors.email}
                        />


                        <Input
                            id="outlined-with-placeholder"
                            htmlFor="subject"
                            name="subject"
                            value={data.suject}
                            onChange={this.handleChange}
                            label="Provide subject"
                            placeholder="Enter subject"
                            className="datatextField"
                            margin="normal"
                            variant="outlined"
                            error={errors.subject}
                        />


                        <Input
                            id="outlined-multiline-static"
                            htmlFor="message"
                            name="message"
                            value={data.message}
                            onChange={this.handleChange}
                            label="Enter message to send"
                            multiline
                            rows="4"
                            className="datatextField"
                            margin="normal"
                            variant="outlined"
                            error={errors.message}
                        />

                        {this.renderButton('Send message', 'send')}
                    </form>

                </div>
            </div>
        </div>               
        );
    }
}

export default Contact;
