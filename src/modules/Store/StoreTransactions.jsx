import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Header from './Header';
import DataSection from './DataSections/index';

class App extends Component {
    render() {
        return (
            <div className="store-transactions">
                <Header />
                <DataSection />
            </div>
        );
    }
}

export default App;
