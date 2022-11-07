import axios from 'axios'

const GET_ALL_RESTAURANTS_URL = 'http://localhost:8081/restaurant'

export default function APIService() {

    function getAllRestaurants() {
        return axios.get(GET_ALL_RESTAURANTS_URL);
    }

}
