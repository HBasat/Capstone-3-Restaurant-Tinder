import {Link} from 'react-router-dom'
import React from 'react'
import { useSearchParams } from "react-router-dom";
import axios from 'axios'
import Home from './Home'
import RestaurantData from './RestaurantData'
import { useEffect } from 'react';

export default function Invite(props) {

    const[tokenValid, setTokenValid] = React.useState(false)
    const[date, setDate] = React.useState("")
    const[todaysDate, setTodaysDate] = React.useState(new Date())

    const newRestaurantArray = JSON.parse(localStorage.getItem("restaurantArrayTest"))
    console.log(newRestaurantArray)

    const restaurantMatches = Array.isArray(newRestaurantArray) && newRestaurantArray.map((restaurant) => 
        <RestaurantData restaurant={restaurant}/>
    )
    
    const tokenInvalid = 
    <div>
        <p>Sorry! This link is not valid. Please try entering the url again, or browse restaurants near you!</p>
        <button>Home</button>
    </div>

    const dateExpired = 
    <div>
        <p>Sorry! It looks like this link has expired, please contact the person who invited you, or browse restaurants near you!</p>
        <button>Home</button>
    </div>
   
    console.log(props.location)
    const query = new URLSearchParams(props.location.search);
    const token = query.get('randomId')
    console.log(token)


    //not necessarily functional

    React.useEffect((token) => {
        axios.get(`http://localhost:8081/invite/random_id/${token}`)
            .then(() => data => setTokenValid(true))
            .catch(error => console.error(error))   
    }, [])

    React.useEffect((token) => {
        axios.get(`http://localhost:8081/invite/expiration`)
            .then(data => setDate(data))
            .catch(error => console.error(error))   
    }, [])

    return (
        <div>
            <div>
                {(() => {
                    if((tokenValid === true) && (date <= todaysDate)){
                        return <div className="restaurant-list">{restaurantMatches}</div>
                    } else if (tokenValid === false) {
                        return {tokenInvalid}
                    } else if(date > todaysDate) {
                        return {dateExpired}
                    }
                })}
            </div>
        </div>
    )
}