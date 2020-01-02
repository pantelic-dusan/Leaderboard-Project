import React from 'react';
import ScoresApi from '../../api/scores'

import './Scores.css'

import { Table } from 'rsuite';

const { Column, HeaderCell, Cell} = Table;

class Scores extends React.Component {
    
    constructor () {
        super()
        this.state = {
            scores: []
        }
        ScoresApi.getScores().then(scores => this.setState({scores}))
    }

    render () {
        return (
            <div className="scores-table">
                <Table
                    data={this.state.scores}
                >
            <Column flexGrow fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
            </Column>

            <Column fixed sortable>
                <HeaderCell>Username</HeaderCell>
                <Cell dataKey="username" />
            </Column>


            <Column flexGrow fixed sortable>
                <HeaderCell>Score</HeaderCell>
                <Cell dataKey="score" />
            </Column>

            <Column flexGrow fixed sortable>
                <HeaderCell>Date</HeaderCell>
                <Cell dataKey="date" />
            </Column>
        </Table>
            </div>
        )
    }
}

export default Scores;