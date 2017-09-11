import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className="store-transactions">
                <Row>
                    <Col xs={4} className="align-left">
                        Transactions
                    </Col>
                    <Col xsOffset={5} xs={3} className="align-right">
                        <Button bsStyle="primary">Exporter</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
