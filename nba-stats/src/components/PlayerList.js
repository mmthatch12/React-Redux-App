import React from 'react'
import Player from './Player'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { getInfo } from '../actions'

const PlayerList = props => {
    return (
        <>
            <h1>NBA Player Stats!</h1>
            <button >
                Get Player Info
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

export default connect(mapStateToProps, { getInfo (PlayerList)