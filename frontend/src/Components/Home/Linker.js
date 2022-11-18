import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Home from './Home'

export default function Linker({inviteeArray}){

    const[zip, setZip] = React.useState("")
    const[restaurants, setRestaurants] = React.useState([])
    const[isClicked, setIsClicked] = React.useState(true)

    React.useEffect(() => {
        console.log("Effect log")
        console.log(zip)
        console.log(restaurants)
        axios.get(GET_ZIP_RESTAURANTS_URL)
            .then(data => setRestaurants(data))
            .catch(error => console.log(error))
    }, [zip])

    const GET_ZIP_RESTAURANTS_URL = 'http://localhost:8081/restaurant/zipcode/${zip}'

    function handleChange(event) {
        console.log("Handle Change Log")
        setZip(event.target.value)
    }

    function toggleClicked(){
        setIsClicked(prevIsClicked => !prevIsClicked)
    }

    function generateRandomNumber() {
        return Math.floor(Math.random() * Math.floor());
      }

    const restaurantMatches = Array.isArray(restaurants.data) && restaurants.data.map((restaurant) => 
    <div className='all-restaurants'>
        <div className='restaurant-card'>
            <img className='restaurant-img' alt='Restaurant Photo' src={restaurant.restaurantImgUrl} />
            <p className='restaurant-name' >{restaurant.restaurantName}</p>
            <p className='restaurant-address' >{restaurant.restaurantCity}, {restaurant.restaurantState}</p>
        </div>
    </div>
    )

    const inviteeLinks = Array.isArray(inviteeArray) && inviteeArray.map((invitee) => 
      <div>
        <div>
            <p>test</p>
        </div>
      </div>
    )

    return (
        <div>
            <div className="zip-container">
                <div className="zip-box">
                    {isClicked && <h2>Where will you be Dining?</h2>}
                    {isClicked && <input
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        class="form"
                        placeholder="Enter Zip"
                        onChange={handleChange}
                    />}
                    <button
                        onClick={toggleClicked}
                        type='submit'
                        value="Submit"
                        className='zip-button'
                    >
                        Submit
                    </button>
                    {!isClicked && {inviteeLinks}}
                </div>
            </div>
            <div>
            {restaurantMatches}
            </div>
        </div>
    )
}