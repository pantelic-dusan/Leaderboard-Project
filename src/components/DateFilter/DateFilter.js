import React from 'react';
import ScoresApi from '../../api/scores'
import ScoresTable from '../ScoresTable'
import { Loader } from 'rsuite';
import { Radio, RadioGroup } from 'rsuite';

import './DateFilter.css'


class DateFilter extends React.Component {

    constructor () {
        super()
        this.state = {
            scores: null,
            picked: "All",
            fromDate: new Date(2000, 1, 1).toISOString(),
            toDate: new Date().toISOString()
        }
        ScoresApi.getScoresByDateRange(this.state.fromDatem, this.state.toDate)
            .then(scores => this.setState({scores: scores}))

    }

    handleDatePick(value) {

        let now = new Date();
        let from = new Date();
        switch (value) {
            case "All":
                from = new Date(2000, 1, 1)
                break;
            case "Year":
                from.setFullYear(now.getFullYear()-1)
                break;
            case "Month":
                from.setMonth(now.getMonth()-1)
                break;
            case "Week":
                from.setDate(now.getDate()-7)
                break;
            case "Day":
                from.setDate(now.getDate()-1)
                break;
            default:
                break;
        }
        this.setState({picked: value, scores: null, fromDate: from.toISOString(), toDate: now.toISOString()});
        setTimeout(() => {
            ScoresApi.getScoresByDateRange(this.state.fromDate, this.state.toDate)
                .then(scores => this.setState({scores: scores}));
        }, 100);
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
                <RadioGroup onChange={this.handleDatePick.bind(this)} 
                    className="date-picker" 
                    inline appearance="picker" 
                    defaultValue={this.state.picked}
                >
                    <Radio value="All">All</Radio>
                    <Radio value="Year">Year</Radio>
                    <Radio value="Month">Month</Radio>
                    <Radio value="Week">Week</Radio>
                    <Radio value="Day">Day</Radio>
                </RadioGroup>
                <ScoresTable data={this.state.scores} />
                </div>
            )
        }
    }
}

export default DateFilter;
