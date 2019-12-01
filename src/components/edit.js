import React from 'react';
import axios from 'axios';

class Edit extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {Name:'',
                      DOB:'',
                      Image:'',
                      _id:''};
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
        this.handlePlayerDOBChange = this.handlePlayerDOBChange.bind(this);
        this.handlePlayerimageChange = this.handlePlayerimageChange.bind(this);
      }
componentDidMount(){
    alert(this.props.match.params.id);

    axios.get('http://localhost:4000/api/players/'+this.props.match.params.id)
    .then((response)=>{
        this.setState({
            _id:response.data._id,
            Name:response.data.name,
            DOB:response.data.dob,
            Image:response.data.image
        })
    })
    .catch();


}
handlePlayerNameChange(e){
    this.setState({name: e.target.value});
  }

  handlePlayerDOBChange(e){
    this.setState({dob: e.target.value});
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
     
    axios.put('http://localhost:4000/api/players/'+this.state._id, 
    newPlayer)
    .then()
    .catch();


    this.setState({Name:'',
                    DOB:'',
                    Image:''});    
  }


    render(){
        return(
            <div className="Text"> 
                <h1>Hello from Edit component</h1>
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
          <label>Player image Url</label>
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
          value="Submit Edited Player">
          </input>
        </div>
        </form>
            </div>
        )
    }
}

export default Edit;