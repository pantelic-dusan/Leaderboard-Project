import React from 'react';
import ScoresApi from '../../api/scores'
import ScoresTable from '../ScoresTable'
import { Loader } from 'rsuite';

import './Scores.css'


class Scores extends React.Component {

    constructor () {
        super()
        this.state = {
            scores: null
        }
        ScoresApi.getScores().then(scores => this.setState({scores}))

    }

    render () {
        // Not so clean solution for waiting scores collecting
        if (this.state.scores == null) {
            return (
                <Loader center content="loading" />
            );
        } else {
            return (
                <div className="scores-table">
                <ScoresTable data={this.state.scores} />
                </div>
            )
        }
    }
}

export default Scores;
