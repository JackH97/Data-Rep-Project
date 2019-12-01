import React from 'react';
import PlayerItem from './playerItem';

class Players extends React.Component{

    render(){
        return this.props.myPlayers.map((player)=>{
            //console.log({player});
            return <PlayerItem key={player._id} player={player} 
            ReloadDataMethod={this.props.ReloadDataMethod}></PlayerItem>
        });
    }
}
export default Players;