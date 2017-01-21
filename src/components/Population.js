import React from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';

class Population extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            population: '',
            density: '',
            growth: ''
        };
    }
    componentDidMount(){
        axios.get('https://api.wolframalpha.com/v2/query?input='+ this.props.cityName + '&format=plaintext&output=JSON&appidE7AE9X-24H3XT7EQQ')
            .then(response => {
                console.dir(response);
                this.setState = {
                    population: response

                }
            });

    }
    render() {
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Population</th>
                    <th>Density</th>
                    <th>Growth</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{this.state.population}</td>
                    <td>{this.state.density}</td>
                    <td>{this.state.growth}</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}
export default Population;