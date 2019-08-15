import React from 'react'
import Player from './Player'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

const PlayerList = props => {
    return (
        <>
            <Player test={props.test} players={props.players} />
            <button >

            </button>
            {props.players && 
                props.players.map(player => <Player key={player.name} player={player} />)}
        </>
    )
}

const mapStateToProps = state => {
    return {
        test: state.test,
        players: state.players
    }
}

export default connect(mapStateToProps, {})(PlayerList)