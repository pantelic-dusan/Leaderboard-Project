import React from 'react';
import ScoresApi from '../../api/scores'
import ScoresTable from '../ScoresTable'
import { Icon } from 'rsuite';
import { Input, InputGroup } from 'rsuite';
import { Loader } from 'rsuite';

import './Search.css'

class Search extends React.Component {

    constructor () {
        super()
        this.state = {
            scores: null
        }
        this.username = "Username";
        ScoresApi.getScores().then(scores => this.setState({scores:scores}))

    }

    handleInput(value) {
        this.username = value;
    }

    handleSearch() {
        this.setState({scores: null});
        ScoresApi.getScoresByUsername(this.username).then(scores => this.setState({scores:scores}));
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
                <InputGroup size="md" ref="username" inside className="search-bar">
                    <Input placeholder={this.username} onChange={this.handleInput.bind(this)} onPressEnter={this.handleSearch.bind(this)}/>
                    <InputGroup.Button onClick={this.handleSearch.bind(this)}>
                        <Icon icon="search" />
                    </InputGroup.Button>
                </InputGroup>
                <ScoresTable data={this.state.scores} />
                </div>

            )
        }
    }
}

export default Search;
