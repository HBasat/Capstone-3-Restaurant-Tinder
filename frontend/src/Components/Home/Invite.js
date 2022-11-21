import {Link} from 'react-router-dom'
import React from 'react'
import { useSearchParams } from "react-router-dom";
import axios from 'axios'
import Home from './Home'
import RestaurantData from './RestaurantData'

export default function Invite(props) {

    const newRestaurantArray = JSON.parse(localStorage.getItem("restaurantArrayTest"))
    console.log(newRestaurantArray)

    const restaurantMatches = Array.isArray(newRestaurantArray) && newRestaurantArray.map((restaurant) => 
        <RestaurantData restaurant={restaurant}/>
    )

    console.log(props.location)
    const query = new URLSearchParams(props.location.search);
    const token = query.get('randomId')
    console.log(token)

    return (
        <div>
            <div>
                {restaurantMatches}
            </div>
        </div>
    )
}