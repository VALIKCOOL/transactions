import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import '../styles/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Layout/Navbar.jsx';
import Footer from './Layout/Footer.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid>
                    <Navbar />
                    {this.props.children}
                    <Footer />
                </Grid>
            </div>
        );
    }
}

export default App;
