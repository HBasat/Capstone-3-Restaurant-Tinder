import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { func } from 'prop-types'

function Home(props) {

    const[zip, setZip] = React.useState("")
    const[restaurants, setRestaurants] = React.useState([])

    const [today, setToday] = React.useState(new Date())
    const [restSchedule, setRestSchedule] = React.useState([])
    const [restaurantIDs, setRestaurantIDs] = React.useState([])

    const[invitee, setInvitee] = React.useState("")
    const[inviteeArray, setInviteeArray] = React.useState([])

    const[isClicked, setIsClicked] = React.useState(false)
    const[date, setDate] = React.useState("")


    const GET_ZIP_RESTAURANTS_URL = `http://localhost:8081/restaurant/zipcode/${zip}`

    const GET_RESTAURANT_SCHEDULE = `http://localhost:8081/schedule/byIds/${restaurantIDs}`

    const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    React.useEffect(() => {
        console.log("Effect log")
        console.log(zip)
        console.log(restaurants)
        axios.get(GET_ZIP_RESTAURANTS_URL)
            .then(data => setRestaurants(data))
            .then(data => setRestaurantIDs(Array.isArray(restaurants.data) && restaurants.data.map(item => item.restaurantID).join(',')))
            .catch(error => console.log(error))
    }, [zip])

    React.useEffect(() => {
        console.log(restaurants)
        console.log(Array.isArray(restaurants.data) && restaurants.data.map(item => item.restaurantID).join(','))
        axios.get(GET_RESTAURANT_SCHEDULE)
            .then(data => setRestSchedule(data))
            .catch(error => console.log(error))
    }, [restaurantIDs])

    function handleChange(event) {
        console.log("Handle Change Log")
        setZip(event.target.value)
        
    }

    /* ******************************** */

    function toggleClicked(){
        setIsClicked(prevIsClicked => !prevIsClicked)
    }

    /* invitee functionality */

    function handleInvitee(event){
        setInvitee(event.target.value)
    }

    function handleInviteeClick(){
        setInvitee('');
        setInviteeArray(prevInviteeArray => [...prevInviteeArray, {invitee: invitee}])
    }

    function handleDate(event){
        setDate(event.target.value)
    }

    localStorage.setItem("inviteeTest", JSON.stringify(inviteeArray))
    localStorage.setItem("dateTest", JSON.stringify(date))

    console.log("Start log")
    console.log(restSchedule)
    console.log(today)
    console.log(date)
    console.log(restaurants.data)
    console.log(Array.isArray(restaurants.data))
    const restaurantMatches = Array.isArray(restaurants.data) && restaurants.data.map((restaurant) => 
        <div className='all-restaurants'>
            <div className='restaurant-card'>
                <img className='restaurant-img' alt='Restaurant Photo' src={restaurant.restaurantImgUrl} />
                <p className='restaurant-name' >{restaurant.restaurantName}</p>
                <p className='divider'> ————————————————— </p>  
                <p className='restaurant-address' >{restaurant.restaurantAddress},{restaurant.restaurantCity}, {restaurant.restaurantState}</p>
                <div className='TD'>
                    { restaurant.restaurantTakeout && <p className='takeout'>Takeout Available</p> }
                    { restaurant.restaurantDelivery && <p className='delivery'>Delivery Available</p> }
                </div>
                <div className="operation">
                {Array.isArray(restSchedule.data) && 
                    restSchedule.data
                    .filter(schedule => schedule.scheduleDay === weekday[today.getDay()] && schedule.restaurantScheduleID == restaurant.restaurantID)
                    .map((schedule) => {
                    console.log(weekday[today.getDay()])
                    console.log(schedule.scheduleDay)
                    if(weekday[today.getDay()] === schedule.scheduleDay) {
                        {console.log("open")}
                        return <p className='open'>Open!</p>
                    } else {
                        {console.log("closed")}
                        return <p className='close'>Closed!</p>
                    }
                })}
            </div>
            {restaurant.restaurantTeleNumber && 
                    <p className='order-click'>Call to Order</p>
                }
            </div>
        </div>
    )

    /* once handleClick is functional, make the const map of cards up here then render it to the DOM below in the return */
    return(
        <div>
            <div className='zip-container'>
                <div className='zip-box' >
                    <form className='zip-form'>
                        <h2 className='header'>{isClicked ? "Type Friends to Invite!" : "Find restaurants near you!"}</h2>
                        {!isClicked && <input
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            class="form"
                            placeholder="Enter Zip"
                            onChange={handleChange}
                        />}
                        {isClicked && <input
                            type='text'
                            id="invitees"
                            name="invitees"
                            placeholder="Name of Friend to Invite"
                            onChange={handleInvitee}
                        />}
                        {isClicked && <button className='inv-button' type="button" onClick={handleInviteeClick}>Invite Friend</button>}
                        {isClicked && <h6 className='header'>When should your guests make their decision?</h6>}
                        {isClicked && <input 
                            type="date"
                            name="date"
                            onChange={handleDate}
                        />}
                        {isClicked && <button className='done-button'><Link style={{color:'#FFFFFF'}} inviteeArray={inviteeArray} to="./Linker">Done</Link></button>}
                    </form>  


                    <div className="guest-list">
                        {isClicked && <p className='guest-divider'> ————————————————— </p>}
                        {isClicked && <h3 className="guest-title">Guest List</h3>}
                        
                        {isClicked && <ul className="invitee-list">{inviteeArray.map(invitee => (<li key={invitee.invitee} className="invitee">{invitee.invitee}</li>))}</ul>}
                    </div>

                    <button className='swap-functions' onClick={toggleClicked}>{isClicked ? "Search for Restraunts" : "Invite Friends"}</button>
                </div>
            </div>
            
            <div className='restaurant-list'>
                {restaurantMatches}
            </div>
        </div>
    )
}

export default Home;

//how to add a controlled form to a functional react component
//how to grab an array from a json body of an axios get request