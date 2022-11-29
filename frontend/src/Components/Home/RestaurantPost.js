import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Home from './Home'

export default function RestaurantPost(props){
    const[randomId, setRandomId] = React.useState("")

    const GET_INVITEE_URL = `http://localhost:3000/invite?randomId=${randomId}`

    const reservationDate = JSON.parse(localStorage.getItem("dateTest"))

    function handleRandomId(event){
        event.preventDefault()
        setRandomId(makeid(5))
    }

    React.useEffect(() => {
    console.log(randomId)
    console.log(reservationDate)
    axios.post("http://localhost:8081/invite", {
        reservation_random_id: randomId,
        reservation_expiration_date: reservationDate
    })
    .then(function (response) {
        console.log(response);
      })
    .catch((err) => console.log(err))
    }, [randomId])


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
        <>
            <button onClick={handleRandomId}>Generate Links</button>
            <p>{props.invitee.invitee}: {GET_INVITEE_URL}</p>
        </>
    )
}