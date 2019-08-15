import React from 'react';

const PlayerStats = props => {
    return (
        <h3>Height: {props.player.height_feet} feet {props.player.height_inches} inches</h3>
    )
}

export default PlayerStats