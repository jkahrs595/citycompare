import React from 'react';

const containerElement = <div style={{ height: `100%` }} />;
const mapElement = <div style={{ height: `100%` }} />;

const CityData = (props) => {
    const makeGMapsLink = (props) => {
        return "https://www.google.com/maps/embed/v1/view?key="
            +"APIKEY"
            +"&center="+props.data.primary_latitude+","+props.data.primary_longitude
            +"&zoom=12&maptype=roadmap"
    };
    return (
        props.data ?
            <div>
                <h3>{props.data.name}, {props.data.state_name}</h3>
                <h4>{props.data.county_name} county</h4>
                <label>Homepage: </label>
                <p>{props.data.url}</p>
                {containerElement}
                {mapElement}

                <label>Map:</label>
                <br/>
                <iframe
                    width = "auto"
                    height = "400px"
                    src = {makeGMapsLink(props)} allowfullscreen>
                </iframe>

            </div>
        :
            <p>Enter a city to see its information here.</p>

    )
}
export default CityData;