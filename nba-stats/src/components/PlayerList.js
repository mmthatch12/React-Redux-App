import React from 'react'
import Player from './Player'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { getInfo } from '../actions'

const PlayerList = props => {
    return (
        <>
            <h1>NBA Player Stats!</h1>
            <button onClick={props.getInfo}>
                {props.isLoading ? (
                    <Loader type="ThreeDots" color="#somecolor" height={50} width={50} />
                ) : (
                    'Get Player Info'
                )}
                
            </button>
            <div className='list'>
            {props.players && 
                props.players.map(player => <Player key={player.id} player={player} />)}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {

        players: state.players,
        isLoading: state.isLoading,
    }
}

export default connect(mapStateToProps, { getInfo })(PlayerList)