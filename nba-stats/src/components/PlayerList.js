import React from 'react'
import Player from './Player'
import { connect } from 'react-redux'

const PlayerList = props => {
    return (
        <>
            <Player />
            <h1>{props.test}</h1>
            <h4>{props.othertest}</h4>
        </>
    )
}

const mapStateToProps = state => {
    return {
        test: state.test,
        othertest: state.othertest
    }
}

export default connect(mapStateToProps, {})(PlayerList)