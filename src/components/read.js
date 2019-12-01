import React from 'react'
import Players from './players';
import axios from 'axios';


class Read extends React.Component{
constructor(){
    super();
    this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
}
    state = {
        players: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/players')
        .then((response)=>{
            this.setState({players: response.data.players})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    ReloadDataMethod(){
        axios.get('http://localhost:4000/api/players')
        .then((response)=>{
            this.setState({players: response.data.players})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render(){
        return(
            <div className="playa">
                <h1>Hello from Read Component</h1>
                <Players myPlayers={this.state.players} ReloadDataMethod={this.ReloadDataMethod} ></Players>
            </div>
        );
    }
}
export default Read;