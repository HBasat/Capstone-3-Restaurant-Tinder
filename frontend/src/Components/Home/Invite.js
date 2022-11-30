import {Link} from 'react-router-dom'
import React from 'react'
import { useSearchParams } from "react-router-dom";
import axios from 'axios'
import Home from './Home'
import RestaurantData from './RestaurantData'
import { useEffect } from 'react';
import { format } from 'date-fns'


export default function Invite(props) {

    const[tokenValid, setTokenValid] = React.useState(false)
    const[date, setDate] = React.useState([])
    // const[todaysDate, setTodaysDate] = React.useState(new Date())
    // const [token, setToken] = React.useState()

    const newRestaurantArray = JSON.parse(localStorage.getItem("restaurantArrayTest"))
    console.log(newRestaurantArray)

    const restaurantMatches = Array.isArray(newRestaurantArray) && newRestaurantArray.map((restaurant) => 
        <RestaurantData restaurant={restaurant}/>
    )
    
    const tokenInvalid = 
    <div>
        <p>Sorry! This link is not valid. Please try entering the url again, or browse restaurants near you!</p>
    </div>

    const dateExpired = 
    <div>
        <p>Sorry! It looks like this link has expired, please contact the person who invited you, or browse restaurants near you!</p>
    </div>
   
    console.log(props.location)
    const query = new URLSearchParams(props.location.search);
    // const token = query.get('randomId')
    // setToken(query.get('randomId'))
    // console.log(token)
    // const newArray = JSON.parse(localStorage.getItem("inviteeTest"))
    // console.log(newArray)


    //not necessarily functional

    React.useEffect(() => {
        const token = query.get('randomId')
        console.log(token)
        axios.get(`http://localhost:8081/invite/random_id/${token}`)
            .then(() => setTokenValid(true))
            .catch(error => console.error(error))   
    }, [])

    React.useEffect(() => {
        // console.log(token)
        const token = query.get('randomId')
        axios.get(`http://localhost:8081/invite/expiration/${token}`)
            .then(data => setDate(data))
            .catch(error => console.error(error))   
    }, [])
    console.log(date)
    console.log(tokenValid)

    // const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    // function formatDate(newDate) {
    //     const months = {
    //       0: 'January',
    //       1: 'February',
    //       2: 'March',
    //       3: 'April',
    //       4: 'May',
    //       5: 'June',
    //       6: 'July',
    //       7: 'August',
    //       8: 'September',
    //       9: 'October',
    //       10: 'November',
    //       11: 'December',
    //     }
    //     const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    //     const d = newDate
    //     const year = d.getFullYear()
    //     const date = d.getDate()
    //     const monthIndex = d.getMonth()
    //     const monthName = months[d.getMonth()]
    //     const dayName = days[d.getDay()] // Thu
    //     const formatted = `${dayName}, ${date} ${monthName} ${year}`
    //     return formatted.toString()
    //   }

        let today = new Date()
        let todaysDate = today.getFullYear() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getDate()
        console.log(todaysDate)
        const resDate = Array.isArray(date.data) && date.data.expirationDate
        console.log(resDate)

        // function handleValidation(){
        //         if((tokenValid === true) && (resDate >= todaysDate)){
        //              return <div className="restaurant-list">{restaurantMatches}</div>
        //         } else if (tokenValid === false) {
        //              return <div>{tokenInvalid}</div>
        //         } else if(date < todaysDate) {
        //             return <div>{dateExpired}</div>
        //         }  
        // }

        var display;
            if ((tokenValid === true) && (date.data.expirationDate >= todaysDate)) {
                display = <div className="restaurant-list">{restaurantMatches}</div>
            } else if (tokenValid === false) {
                display = <div>{tokenInvalid}</div>
            } else if (date < todaysDate) {
                display = <div>{dateExpired}</div>
            }

    return (
        <div>
            <div>
                {console.log(resDate <= todaysDate)}
                {display}
            </div>
        </div>
    )
}


{/* {console.log(tokenValid)}
                {console.log(todaysDate)}
                {/* {console.log(format(todaysDate, 'yyyy/mm/dd'))} */}
                {/* {console.log(date.data)} */}
                {/* {console.log(date.data.expirationDate)} */}
                {/* {console.log(date.data.expirationDate)} */}
                {/* {console.log(formatDate(todaysDate))} */}