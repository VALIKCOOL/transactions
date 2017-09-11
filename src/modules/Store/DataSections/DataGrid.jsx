import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ReactDataGrid from "react-data-grid";

export default class DataSections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { key: "created_at", name: "Date de transaction" },
                { key: "amount", name: "Montant" },
                { key: "voucher_id", name: "Id du voucher" },
                { key: "source_id", name: "Vol" },
                { key: "status", name: "Status" }
            ],
            rows: []
        };

        this.rowGetter = this.rowGetter.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            rows: nextProps.data
        });
    }

    rowGetter(i) {
        return this.state.rows[i];
    }

    componentDidMount() {
        return this.props.getAllData();
    }

    render() {
        return (
            <div className="data-grid-section margin-top-md">
                <Col xs={12}>
                    <ReactDataGrid
                        columns={this.state.columns}
                        rowGetter={this.rowGetter}
                        rowsCount={this.state.rows.length}
                        minHeight={550} />
                </Col>
            </div>
        );
    }
}