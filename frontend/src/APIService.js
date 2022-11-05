import axios from 'axios'

/* fill in url once getallbooks is made in controller */
const GET_ALL_RESTAURANTS_URL = ""

export default function APIService() {

    function getAllRestaurants() {
        return axios.get(GET_ALL_RESTAURANTS_URL);
    }

}
