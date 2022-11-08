import axios from 'axios'
import React from 'react'

const GET_ALL_RESTAURANTS_URL = 'http://localhost:8081/restaurant'

export function getAllRestaurants_Test() {

    // getAllRestaurants() {
        return axios.get(GET_ALL_RESTAURANTS_URL);
    // }

}

export function getAllRestaurants() {

    // getAllRestaurants() {
        return axios.get(GET_ALL_RESTAURANTS_URL);
    // }

}
