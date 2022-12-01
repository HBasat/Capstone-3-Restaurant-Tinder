import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Home from './Home'
import RestaurantPost from './RestaurantPost'

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

    const GET_ZIP_RESTAURANTS_URL = `http://localhost:8081/restaurant/zipcode/${zip}`

    function handleChange(event) {
        console.log("Handle Change Log")
        setZip(event.target.value)
    }

    function toggleClicked(){
        setIsClicked(prevIsClicked => !prevIsClicked)
    }

    const restaurantMatches = Array.isArray(restaurants.data) && restaurants.data.map((restaurant) => 
    <div className='all-restaurants'>
            <div className='restaurant-card'>
                <img className='restaurant-img' alt='Restaurant Photo' src={restaurant.restaurantImgUrl}/>
                <p className='restaurant-name'>{restaurant.restaurantName}</p>
                <p className='divider'> ————————————————— </p>
                <p className='restaurant-address'>{restaurant.restaurantAddress}, {restaurant.restaurantCity}, {restaurant.restaurantState}</p>
                <div className='TD'>
                    { restaurant.restaurantTakeout && <p className='takeout'>Takeout Available</p> }
                    { restaurant.restaurantDelivery && <p className='delivery'>Delivery Available</p> }
                </div>
                { restaurant.restaurantTeleNumber && <p className='order-click'>Call to Order</p> }

                
            </div>
        </div>
    )

    const newArray = JSON.parse(localStorage.getItem("inviteeTest"))
    // const reservationDate = JSON.parse(localStorage.getItem("dateTest"))
    localStorage.setItem("restaurantArrayTest", JSON.stringify(restaurants.data))

    const GET_INVITEE_URL = 'http://localhost:8081/invite/'

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    return (
        <div className="dining-box">
            <div className="zip-container">
                <div className="zip-box">
                    <form className="zip-form">
                    {isClicked && <h2>Where will you be Dining?</h2>}
                    {isClicked && <input
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        class="form"
                        placeholder="Enter Zip"
                        onChange={handleChange}
                    />}
                    {isClicked && <button
                        onClick={toggleClicked}
                        type='submit'
                        value="Submit"
                        className='zip-button'
                    >
                        Submit
                    </button>}
                    {!isClicked && <div>
                        {newArray.map((invitee) => 
                        <RestaurantPost invitee={invitee}/>
                        )} 
                    </div>}
                    </form>
                    <button className='swap-functions'><Link style={{color:'#FFFFFF'}} to="./Invite">Go to Invite Page</Link></button> 
                </div>
            </div>
            <div className="restaurant-list">
            {restaurantMatches}
            </div>
        </div>
    )
}