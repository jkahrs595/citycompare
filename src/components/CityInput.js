import React from "react";
import {Col, ControlLabel, Button} from "react-bootstrap";
import CityData from './CityData';
import {getCity} from '../utils/Api';

class CityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: props.cityName || '',
            stateName: props.stateName || '',
            data: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { cityName, stateName } = this.state;
        if(cityName && stateName){
            getCity(cityName, stateName)
                .then(response => {
                    this.setState({
                        data: response.data[0]
                    })
                })
        }
    }

    render() {
        const {cityName, stateName, data} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Col xs={4} lg={12} lgOffset={2}>
                    <ControlLabel>City:</ControlLabel>
                    <input name="cityName" type="text" value={cityName} onChange={this.handleChange}/>
                    <ControlLabel>State:</ControlLabel>
                    <input name="stateName" type="text" value={stateName} onChange={this.handleChange}/>
                    <Button onClick={this.handleSubmit}>Get City Info</Button>
                    <CityData data={data}/>
                </Col>
            </form>

        )
    }
}
export default CityInput;