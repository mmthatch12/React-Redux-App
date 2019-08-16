import React from 'react'

import PlayerStats from './PlayerStats'

const Player = props => {
    return (
        <div className='player'>
            <h2>{props.player.first_name} {props.player.last_name}</h2>
            <h3>Team: {props.player.team.full_name}</h3>
            <PlayerStats player={props.player}/>
        </div>
        
    )
}

export default Player