import React from 'react';

const CityData = (props) => {
    return (
        props.data ?
            <div>
                <h3>{props.data.name}, {props.data.state_name}</h3>
                <h4>{props.data.county_name} county</h4>
                <label>Homepage: </label>
                <p>{props.data.url}</p>

                <label>Lat/Long: </label>
                <p>{props.data.primary_latitude},{props.data.primary_longitude}</p>
            </div>
        :
            <p>Enter a city to see its information here.</p>

    )
}
export default CityData;