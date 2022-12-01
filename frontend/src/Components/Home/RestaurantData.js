import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Home from './Home'

export default function RestaurantData(props){
    const[like, setLike] = React.useState(0)
    const[dislike, setDislike] = React.useState(0)

    function handleLike(){
        setLike(prevLike => prevLike + 1)
   }

   function handleDislike(){
        setDislike(prevDislike => prevDislike + 1)
   }


   //Create post request for the like and dislike states and then create useeffects for them that Post the default zero state when the page loads
   //might need to put a preventDefault in the put useeffects if the state keeps getting reverted to 0

    // React.useEffect(() => {
    //     axios.post("http://localhost:8081/invite_list/like", {
    //         rl_up: like
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch((err) => console.log(err))
    //     }, [])

    // React.useEffect(() => {
    //     axios.post("http://localhost:8081/invite_list/dislike", {
    //         rl_down: dislike
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //         })
    //     .catch((err) => console.log(err))
    //     }, [])



   //UseEffects that update the like and dislike counts per restaurant in the database Restaurant List table

   React.useEffect(() => {
    console.log(like)
    axios.put("http://localhost:8081/invite_list/like", {
        rl_up: like
    })
    .then(function (response) {
        console.log(response);
      })
    .catch((err) => console.log(err))
    }, [like])

    React.useEffect(() => {
        console.log(dislike)
        axios.put("http://localhost:8081/invite_list/dislike", {
            rl_down: dislike
        })
        .then(function (response) {
            console.log(response);
          })
        .catch((err) => console.log(err))
        }, [dislike])

    return (
        <div className='all-restaurants'>
        <div className='restaurant-card'>
            <img className='restaurant-img' alt='Restaurant Photo' src={props.restaurant.restaurantImgUrl}/>
            <p className='restaurant-name'>{props.restaurant.restaurantName}</p>
            <p className='divider'> ————————————————— </p>
            <p className='restaurant-address'>{props.restaurant.restaurantAddress}, {props.restaurant.restaurantCity}, {props.restaurant.restaurantState}</p>
            <div className='TD'>
                { props.restaurant.restaurantTakeout && <p className='takeout'>Takeout Available</p> }
                { props.restaurant.restaurantDelivery && <p className='delivery'>Delivery Available</p> }
            </div>
            { props.restaurant.restaurantTeleNumber && <p className='order-click'>Call to Order</p> }
            <div className='LD'>
                <button className='up' onClick={handleLike}>Like {like}</button>
                <button className='down' onClick={handleDislike}>Dislike {dislike}</button>
            </div>
        </div>
        </div>
    )
}