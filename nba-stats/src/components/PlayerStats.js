import React from 'react';

const PlayerStats = props => {
    return (
        <div>
            <h3>Height: {props.player.height_feet} feet {props.player.height_inches} inches</h3>
            <h3>Position: {props.player.position}</h3>
            <h3>Team: {props.player.team.full_name}</h3>
        </div>
    )
}

export default PlayerStats