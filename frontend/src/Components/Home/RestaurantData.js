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

   React.useEffect(() => {
    console.log(like)
    axios.post("http://localhost:8081/invitelist/like", {
        rl_up: like
    })
    .then(function (response) {
        console.log(response);
      })
    .catch((err) => console.log(err))
    }, [like])

    React.useEffect(() => {
        console.log(dislike)
        axios.post("http://localhost:8081/invitelist/dislike", {
            rl_down: dislike
        })
        .then(function (response) {
            console.log(response);
          })
        .catch((err) => console.log(err))
        }, [dislike])

    return (
        <>
            <div key={props.restaurant.restaurantID} className='all-restaurants'>
        <div className='restaurant-card'>
            <img className='restaurant-img' alt='Restaurant Photo' src={props.restaurant.restaurantImgUrl} />
            <p className='restaurant-name' >{props.restaurant.restaurantName}</p>
            <p className='restaurant-address' >{props.restaurant.restaurantCity}, {props.restaurant.restaurantState}</p>
            <button className='up' onClick={handleLike}>Like {like}</button>
            <button className='down' onClick={handleDislike}>Dislike {dislike}</button>
        </div>
    </div>
        </>
    )
}