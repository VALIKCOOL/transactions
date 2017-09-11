import React, { Component } from 'react';
import { Row, Col, Button, FormControl, FormGroup, Checkbox } from 'react-bootstrap';

export default class Filters extends Component {
    render() {
        return (
            <div className="filters-section margin-top-md">
                <Col xs={4}>
                    <FormGroup
                        controlId="formBasicText"
                        >
                        <FormControl
                            type="text"
                            placeholder="Rechercher per vol"
                        />
                    </FormGroup>
                </Col>
                <Col xs={4} xsOffset={4}>
                <Checkbox checked readOnly>
                    Show only successfull transactions
                </Checkbox>
                </Col>
            </div>
        );
    }
}