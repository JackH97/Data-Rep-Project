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

    //reloads page once player gets deleted
    ReloadDataMethod(){
        axios.get('http://localhost:4000/api/players')
        .then((response)=>{
            this.setState({players: response.data.players})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    //prints info regarding players from database
    render(){
        return(
            <div className="playa">
                <h1>Players from database</h1>
                <Players myPlayers={this.state.players} ReloadDataMethod={this.ReloadDataMethod} ></Players>
            </div>
        );
    }
}
export default Read;