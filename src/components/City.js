import React from "react";
import CityInput from "./CityInput";
import {Col} from "react-bootstrap";

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: props.cityName
        }

    }

    handleCityName(e) {
        this.setState({
            cityName: e
        })

    }

    render() {
        return (
            <Col lg={6} md={6} xs={12}>
                <CityInput cityName={this.state.cityName} onChange={this.handleCityName}/>
            </Col>
        );
    }
}
export default City;