import React from "react";
import {Col, Button, Image} from "react-bootstrap";
import ImagesClient from "google-images";

class CityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: props.cityName || ''
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
        let client = new ImagesClient('016134850918559424907:vqltefdxira', 'AIzaSyB6UlCWniwPlDaLQMLi_4gc4PV6iLskvDI');
        client.search(this.state.cityName).then(image => {
            this.setState({
                imgUrl: image[0].url
            });
        });
    }

    render() {
        const {cityName} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Col xs={4} lg={12} lgOffset={2}>
                    <label>
                        City:
                        <input name="cityName" type="text" value={cityName} onChange={this.handleChange}/>
                    </label>
                    <Button onClick={this.handleSubmit}>Get City Info</Button>
                </Col>
                <Image responsive rounded src={this.state.imgUrl}/>
            </form>

        )
    }
}
export default CityInput;