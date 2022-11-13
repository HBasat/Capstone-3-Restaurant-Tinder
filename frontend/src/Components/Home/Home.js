import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { func } from 'prop-types'

function Home(props) {

    const[zip, setZip] = React.useState("")
    const[restaurants, setRestaurants] = React.useState([])
    
    

    React.useEffect(() => {
        console.log("Effect log")
        console.log(zip)
        console.log(restaurants)
        axios.get(GET_ZIP_RESTAURANTS_URL)
            .then(data => setRestaurants(data))
            .catch(error => console.log(error))
    }, [zip])

    const GET_ZIP_RESTAURANTS_URL = `http://localhost:8081/restaurant/zipcode/${zip}`

    function handleChange(event) {
        console.log("Handle Change Log")
        setZip(event.target.value)
        
    }

    function handleClick(event) {
        console.log("Handle Click log")
        event.preventDefault();

        // getZipRestaurants().then((response) => {
        //     setRestaurants({ restaurants: response.data })
        //     console.log(restaurants)
        // })
    }

    // function handleSubmit(event) {
    //     event.preventDefault()
    // }

    console.log(restaurants.data)
    console.log(Array.isArray(restaurants.data))
    const restaurantMatches = Array.isArray(restaurants.data) && restaurants.data.map((restaurant) => 
        <div className='all-restaurants'>
            <div className='restaurant-card'>
                <img className='restaurant-img' alt='Restaurant Photo' src={restaurant.restaurantImgUrl} />
                <p className='restaurant-name' >{restaurant.restaurantName}</p>
                <p className='restaurant-address' >{restaurant.restaurantCity}, {restaurant.restaurantState}</p>
            </div>
        </div>
    )

    /* once handleClick is functional, make the const map of cards up here then render it to the DOM below in the return */
    return(
        <div>
            <div className='zip-container'>
                <div className='zip-box' >
                    <form onSubmit={handleClick}>
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
                            value="Submit"
                            className='zip-button'
                        > 
                            Submit
                        </button>
                    </form>  
                </div>
            </div>
            <div>
                {restaurantMatches}
            </div>
        </div>
    )
}

export default Home;

//how to add a controlled form to a functional react component
//how to grab an array from a json body of an axios get request