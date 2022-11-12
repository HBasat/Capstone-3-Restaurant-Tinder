import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { func } from 'prop-types'

function Home(props) {

    const[zip, setZip] = React.useState("")
    const[restaurants, setRestaurants] = React.useState([])

    const GET_ZIP_RESTAURANTS_URL = `http://localhost:8081/restaurant/zipcode/${zip}`

    function getZipRestaurants() {
        return axios.get(GET_ZIP_RESTAURANTS_URL)
    }

    function handleChange(event) {
        setZip(event.target.value)
    }

    function handleClick() {

        getZipRestaurants().then((data) => {
            setRestaurants({ restaurants: data })
            console.log(restaurants)
        })

        // getZipRestaurants().then((data) => {
        //     setRestaurants({ restaurants: data })
        //     console.log(restaurants)
        // })
    }

    
    const restaurantMatches = restaurants.map((restaurant) => 
        <div className='all-restaurants'>
            <div className='restaurant-card'>
                <img className='restaurant-img' alt='Restaurant Photo' src={restaurant.r_image} />
                <p className='restaurant-name' >{restaurant.restaurant.name}</p>
                <p className='restaurant-type' >{restaurant.r_type}</p>
                <p className='restaurant-address' >{restaurant.r_city}, {restaurant.r_state}</p>
                <p className='restaurant-rating' >{restaurant.r_rating}</p>
            </div>
        </div>
    )

    /* once handleClick is functional, make the const map of cards up here then render it to the DOM below in the return */
    return(
        <div>
            <div className='zip-container'>
                <div className='zip-box' >
                    <h2>Find restaurants near you!</h2>
                    <input
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        class="form"
                        placeholder="Enter Zip"
                        onChange={handleChange}
                    />
                    <button
                        type='submit'
                        className='zip-button'
                        onClick={handleClick}
                    > 
                        Submit
                    </button>
                </div>
            </div>
            <div>
                {restaurantMatches}
            </div>
        </div>
    )
}

export default Home;