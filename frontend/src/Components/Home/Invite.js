import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Home from './Home'
import RestaurantData from './RestaurantData'

export default function Invite() {

    const newRestaurantArray = JSON.parse(localStorage.getItem("restaurantArrayTest"))
    console.log(newRestaurantArray)

    const restaurantMatches = Array.isArray(newRestaurantArray) && newRestaurantArray.map((restaurant) => 
        <RestaurantData restaurant={restaurant}/>
    )

    return (
        <div>
            <div>
                {restaurantMatches}
            </div>
        </div>
    )
}