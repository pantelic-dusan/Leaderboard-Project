import React from 'react';

import { Table } from 'rsuite';

const { Column, HeaderCell, Cell} = Table;

class ScoresTable extends React.Component {

    constructor (props) {
        super()
        this.state = {
            data: props.data,
            loading: props.loading,
            sortColumn: "score",
            sortType: "desc"
        }
    }

    handleData() {
      const { data, sortColumn, sortType } = this.state

      if (sortColumn && sortType) {
        return data.sort((a,b) => {
            let x = a[sortColumn];
            let y = b[sortColumn];
            if (sortColumn === 'date') {
                x = new Date(x);
                y = new Date(y);
            }
            if (sortType === 'asc') {
                return x > y;
            } else {
                return y > x;
            }
        });
      }

      return data;

    }

    handleSort(sortColumn, sortType) {
        this.setState({
            loading: true
        });

        setTimeout(() => {
            this.setState({
                sortColumn,
                sortType,
                loading: false
            });
        }, 500);
    }

    render () {
        return (
            <Table
                data={this.handleData()}
                sortColumn={this.state.sortColumn}
                sortType={this.state.sortType}
                onSortColumn={this.handleSort.bind(this)}
                loading={this.state.loading}
                height={400}
            >
                <Column flexGrow={1}>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column flexGrow={1} sortable>
                    <HeaderCell>Username</HeaderCell>
                    <Cell dataKey="username" />
                </Column>


                <Column flexGrow={1} sortable>
                    <HeaderCell>Score</HeaderCell>
                    <Cell dataKey="score" />
                </Column>

                <Column flexGrow={1} sortable>
                    <HeaderCell>Date</HeaderCell>
                    <Cell dataKey="date" />
                </Column>
            </Table>
        )
    }
}

export default ScoresTable;
