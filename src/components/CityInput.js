import React from "react";
import {Col, Button} from "react-bootstrap";
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
                <Col xs={12}>
                    <label>City:</label>
                    <input name="cityName" type="text" value={cityName} onChange={this.handleChange}/>
                </Col>
                <Col xs={12}>
                    <label>State:</label>
                    <input name="stateName" type="text" value={stateName} onChange={this.handleChange}/>
                </Col>
                <Col xs={12}>
                    <Button onClick={this.handleSubmit}>Get City Info</Button>
                </Col>

                <CityData data={data}/>

            </form>

        )
    }
}
export default CityInput;