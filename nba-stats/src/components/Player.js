import React from 'react'

const Player = props => {
    return (
        <div>
            <h2>{props.player.first_name} {props.player.last_name}</h2>
            
        </div>
        
    )
}

export default Player