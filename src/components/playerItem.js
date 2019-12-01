import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class playerItem extends React.Component{

  constructor(){
    super();
    this.DeletePlayer = this.DeletePlayer.bind(this);
  }

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


  <Card  border="primary" style={{ width: '28rem' }}>
  <Card.Header>{this.props.player.name}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img src={this.props.player.image}></img>
      <footer>
      {this.props.player.dob}
      </footer>
    </blockquote>
  </Card.Body>
  <Button variant="danger" onClick={this.DeletePlayer}>Delete</Button>
<Link to={"/edit/" + this.props.player._id} className="btn btn-primary">Edit</Link>
</Card>
            </div>
        )
    }
}
export default playerItem;