import React from 'react';
import '../App.css';
import axios from 'axios';

class Contact extends React.Component {

    constructor(props){
        super(props);
    
        //functions to handle each inputted details
        this.state = {Name:'',
                      Email:'',
                    Issue:''};
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleIssueChange = this.handleIssueChange.bind(this);
      }
      
      handleNameChange(e){
        this.setState({Name: e.target.value});
      }
    
      handleEmailChange(e){
        this.setState({Email: e.target.value});
      }
    
      handleIssueChange(e){
        this.setState({Issue: e.target.value});
      }
    
      handleSubmit(e){
          // message that pops up on screen to tell user that their info went through
        alert('Request has been Recieved. Thank You !!');
        e.preventDefault();
        
        
                    const newContact = {
                      name: this.state.Name,
                      email: this.state.Email,
                      issue: this.state.Issue
                    };
              axios.post('http://localhost:4000/api/contact',newContact) 
              .then()
              .catch();
              
    
              this.setState({Name:'',
                      Email:'',
                    Issue:''});    
      }
    
      render() {
        return (
          <div className="Text">
            <h1>Contact Us</h1>
            <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label>Name</label>
              <input
              type='text'
              className='form-control'
              value={this.state.Name}
              onChange={this.handleNameChange}
              ></input>
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input
              type='text'
              className='form-control'
              value={this.state.Email}
              onChange={this.handleEmailChange}
              ></input>
            </div>
            <div className='form-group'>
              <label>Issue </label>
              <textarea
              row='3'
              className='form-control'
              value={this.state.Issue}
              onChange={this.handleIssueChange}
              ></textarea>
            </div>
            <div>
              <input
              type="submit"
              value="Submit Issue">
              </input>
            </div>
            </form>
          </div>
        );
      }




}

export default Contact;