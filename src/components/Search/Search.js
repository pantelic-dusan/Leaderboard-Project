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
        ScoresApi.getScores().then(scores => this.setState({scores:scores}))
        
    }

    handleSearch() {
        console.log(this.state)
        this.setState({scores: null})
        ScoresApi.getScoresByUsername('Guest').then(scores => this.setState({scores:scores}))
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
                <InputGroup size="md" inside className="search-bar">
                    <Input placeholder="Username" onPressEnter={this.handleSearch.bind(this)}/>
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