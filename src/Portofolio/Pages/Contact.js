import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from "../common/Input";
import './Contact.css';

class Contact extends Component {

    state = {
        contact: {name: '', email: '', subject: '', message: ''}, 
        errors: {}
    };

    // validate = () => {
    //     const errors = {};

    //     const { contact } = this.state;
    //     if(contact.name.trim() === '') { errors.name = 'Provide name' };
    //     if(contact.email.trim() === '') { errors.email = 'Provide email' };
    //     if(contact.subject.trim() === '') { errors.subject = 'Provide subject' };
    //     if(contact.message.trim() === '') { errors.message = 'Provide message' };
    //     return Objects().Keys(errors).length === 0 ? null : errors;
    // }
    
    handleSubmit = event => {
        event.preventDefault();
        // const errors = this.validate();
        // console.log(errors);
        // this.setState({errors});
        // if (errors) return;
    };

    handleChange = ({ currentTarget: input }) => {
        const contact = {...this.state.contact}
        contact[input.name] = input.value;
        this.setState({ contact });
    };

    render() { 
        const { contact } = this.state;

        return (
            <div>
            <div className="HomeGrids">
                <div className="InnerGrid animated bounceInLeft slower">
                    <div className="CenterContent">
                        <span className="material-icons" style={{ fontSize: '300px' }}>email</span>
                        {/* <h1>Software engineer</h1> */}
                        <h2>CONATACT ME</h2>
                        <br />
                    </div>
                </div>
                <div className="InnerGrid animated bounceInRight slower">
                    {/* <h5>CONTACT FORM</h5> */}
                    <form onSubmit={this.handleSubmit} className="contactcontainer">



                            <Input
                                id="outlined-with-placeholder"
                                name="name"
                                value={contact.name}
                                onChange={this.handleChange}
                                label="Provide full name"
                                placeholder="Enter name"
                                className="contacttextField"
                                margin="normal"
                                variant="outlined"
                            />


                        <Input
                            id="outlined-with-placeholder"
                            htmlFor="email"
                            name="email"
                            value={contact.email}
                            onChange={this.handleChange}
                            label="Provide your email"
                            placeholder="Enter email"
                            className="contacttextField"
                            margin="normal"
                            variant="outlined"
                        />


                        <Input
                            id="outlined-with-placeholder"
                            htmlFor="subject"
                            name="subject"
                            value={contact.suject}
                            onChange={this.handleChange}
                            label="Provide subject"
                            placeholder="Enter subject"
                            className="contacttextField"
                            margin="normal"
                            variant="outlined"
                        />


                        <Input
                            id="outlined-multiline-static"
                            htmlFor="message"
                            name="message"
                            value={contact.message}
                            onChange={this.handleChange}
                            label="Enter message to send"
                            multiline
                            rows="4"
                            className="contacttextField"
                            margin="normal"
                            variant="outlined"
                        />

                        <Button size="large" variant="contained"
                        color="primary"
                        type="submit"
                        className="contactbutton"
                        endIcon={<Icon>send</Icon>}
                        >Send message</Button>
                    </form>

                </div>
            </div>
        </div>               
        );
    }
}

export default Contact;
