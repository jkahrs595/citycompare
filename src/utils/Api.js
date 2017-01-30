import Axios from 'axios';

export const getCity = (cityName, stateName) => {
    return Axios.get('http://localhost:8001/cities?city='+cityName+'&state='+stateName);
};
