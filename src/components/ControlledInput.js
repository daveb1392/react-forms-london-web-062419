// Code ControlledInput Component Here
import React from 'react';

export default class ControlledInput extends React.Component {
                 state = {
                   value: ""
                 };

                //  handleFirstNameChange = event => {
                //    this.setState({
                //      firstName: event.target.value
                //    });
                //  };

                //  handleLastNameChange = event => {
                //    this.setState({
                //      lastName: event.target.value
                //    });
                //  };
                //  the above can be substituted with the below 
                 handleChange = event => {
                   this.setState({
                     [event.target.name]: event.target.value
                   });
                 };

                 handleSubmit = event => {
                   event.preventDefault();
                   this.sendFormDataSomewhere(this.state);
                 };

                 render() {
                   return (
                     <form onSubmit={event => this.handleSubmit(event)}>
                       <input
                         type="text"
                         name="firstName"
                         value={this.state.firstName}
                       />
                       <input
                         type="text"
                         name="lastName"
                         value={this.state.lastName}
                       />
                     </form>
                   );
                 }
               }
