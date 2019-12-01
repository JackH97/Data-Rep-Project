import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class playerItem extends React.Component{

  //used for deleting
  constructor(){
    super();
    this.DeletePlayer = this.DeletePlayer.bind(this);
  }

  //function delete for player
  DeletePlayer(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/players/"+this.props.player._id)
    .then(()=>{
      this.props.ReloadDataMethod();
    })
    .catch();

  }

    render(){
        return(
            <div>


<div className="profile">
  <Card  border="primary" >
  <Card.Header>{this.props.player.name}</Card.Header>
  <Card.Body>
    <img src={this.props.player.image} width="500px">
    </img>
      <footer>
      {this.props.player.dob}
      </footer>
  </Card.Body>
  <Button variant="danger" onClick={this.DeletePlayer}>Delete</Button>
<Link to={"/edit/" + this.props.player._id} className="btn btn-primary">Edit</Link>
</Card>
<br></br>
</div>
            </div>
        )
    }
}
export default playerItem;