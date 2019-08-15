import React from 'react'

import PlayerStats from './PlayerStats'

const Player = props => {
    return (
        <div>
            <h2>{props.player.first_name} {props.player.last_name}</h2>
            <PlayerStats player={props.player}/>
        </div>
        
    )
}

export default Player