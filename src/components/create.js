import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class Create extends React.Component {
  constructor(props){
    super(props);

    this.state = {Name:'',
                  DOB:'',
                Image:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
    this.handlePlayerDOBChange = this.handlePlayerDOBChange.bind(this);
    this.handlePlayerimageChange = this.handlePlayerimageChange.bind(this);
  }
  
  handlePlayerNameChange(e){
    this.setState({Name: e.target.value});
  }

  handlePlayerDOBChange(e){
    this.setState({DOB: e.target.value});
  }

  handlePlayerimageChange(e){
    this.setState({Image: e.target.value});
  }

  handleSubmit(e){
    alert(this.state.Name+ "      " + this.state.DOB 
    +"       "+ this.state.Image);
    e.preventDefault();
    
    
                const newPlayer = {
                  name: this.state.Name,
                  dob: this.state.DOB,
                  image: this.state.Image
                };
          axios.post('http://localhost:4000/api/players',newPlayer) 
          .then()
          .catch();
          

          this.setState({Name:'',
                  DOB:'',
                Image:''});    
  }

  render() {
    return (
      <div>
        <h1>Hello from Create component</h1>
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Player Name</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Name}
          onChange={this.handlePlayerNameChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Player DOB</label>
          <input
          type='text'
          className='form-control'
          value={this.state.DOB}
          onChange={this.handlePlayerDOBChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Player image </label>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Image}
          onChange={this.handlePlayerimageChange}
          ></textarea>
        </div>
        <div>
          <input
          type="submit"
          value="Add player">
          </input>
        </div>
        </form>
      </div>
    );
  }
}

export default Create;