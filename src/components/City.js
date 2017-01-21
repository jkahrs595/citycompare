import React from 'react';
import CityInput from './CityInput';
import {Col} from 'react-bootstrap';

class City extends React.Component {
    render() {
        return (
            <Col lg={4} md={6} xs={12}>
                <CityInput cityName={this.props.cityName}/>
            </Col>
        );
    }
}
export default City;