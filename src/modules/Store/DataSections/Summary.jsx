import React, { Component } from 'react';
import { Row, Col, Button, FormControl, FormGroup, Checkbox, ControlLabel } from 'react-bootstrap';

export default class Summary extends Component {
    render() {
        return (
            <div className="summary-section">
                <Col xs={4}>
                    Transactions du XX/XX/XX au XX/XX/XX
                </Col>
                <Col xs={4}>
                    Total
                </Col>
                <Col xs={4}>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Periode d'activite</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>
                </Col>
            </div>
        );
    }
}