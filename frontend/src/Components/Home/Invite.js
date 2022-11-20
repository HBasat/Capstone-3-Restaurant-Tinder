import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Home from './Home'

export default function Invite() {
    const[like, setLike] = React.useState(0)
    const[dislike, setDislike] = React.useState(0)

    // function handleLike(id){
    //     if(newRestaurantArray.restaurantID == id){
    //         return setLike(prevLike => prevLike + 1)
    //     } else {
    //         return like
    //     }
    // }

    function handleLike(){
         setLike(prevLike => prevLike + 1)
    }

    function handleDislike(restaurant){
        if(newRestaurantArray.restaurantID == restaurant.restaurantID){
            return setDislike(prevDislike => prevDislike + 1)
        } else {
            return dislike
        }
    }


    const newRestaurantArray = JSON.parse(localStorage.getItem("restaurantArrayTest"))

    const restaurantMatches = Array.isArray(newRestaurantArray) && newRestaurantArray.map((restaurant) => 
    <div key={restaurant.restaurantID} className='all-restaurants'>
        <div className='restaurant-card'>
            <img className='restaurant-img' alt='Restaurant Photo' src={restaurant.restaurantImgUrl} />
            <p className='restaurant-name' >{restaurant.restaurantName}</p>
            <p className='restaurant-address' >{restaurant.restaurantCity}, {restaurant.restaurantState}</p>
            <button onClick={handleLike}>Like {like}</button>
            <button onClick={handleDislike}>Dislike {dislike}</button>
        </div>
    </div>
    )

    return (
        <div>
            <div>
                {restaurantMatches}
            </div>
        </div>
    )
}