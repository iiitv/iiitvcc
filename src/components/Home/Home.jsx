import React, { Component } from 'react';
import Header from '../Header/Header';
import './Header.css'
import Cover from './Cover/Cover';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover />
            </div>
        );
    }
}

export default Home;
