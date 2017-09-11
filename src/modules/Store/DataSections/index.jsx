import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Summary from './Summary';
import DataGrid from './DataGrid';
import Filters from './Filters';
import sample_data from './sample_data.json';

export default class DataSections extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.getAllData = this.getAllData.bind(this);
    }
    getAllData() {
        this.setState({data: sample_data});
    }

    render() {
        return (
            <div className="data-section margin-top-md">
                <Row>
                    <Summary />
                </Row>
                <Row>
                    <Filters />
                </Row>
                <Row>
                    <DataGrid
                        data={this.state.data}
                        getAllData={this.getAllData}
                    />
                </Row>
            </div>
        );
    }
}