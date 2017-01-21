import React, { Component } from 'react';
import City from './components/City';

class App extends Component {
    render() {
        return (
            <div>
                <City cityName="Seattle"/>
                <City cityName="Detroit"/>
                <City/>
            </div>
        );
    }
}
export default App;
