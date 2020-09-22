import React, { Component } from 'react';
import Header from '../Header/Header';
import './Header.css'
import Cover from './Cover/Cover';
import Footer from '../Footer/Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover />
                <Footer />
            </div>
        );
    }
}

export default Home;
