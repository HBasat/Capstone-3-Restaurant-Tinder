import {Link} from 'react-router-dom'
import React from 'react'
import {getAllRestaurants, getAllRestaurants_Test} from '../../APIService'

function Home(props) {

    const[zip, setZip] = React.useState("")
    const[restaurants, setRestaurants] = React.useState([])

    function handleChange(event) {
        setZip(event.target.value)
    }

    function handleClick() {
        /* run getRestaurants, load them into an array, search the objects (filter method?) for a */ 
        /* string that matches the current zip state, return all matches into a new array, use that data to map restaurant cards */
        
        getAllRestaurants_Test().then((data) => {
            setRestaurants({ restaurants: data })
            console.log(restaurants)
            // console.log(data)
        })
        .catch(function(ex) {
            console.log('Response parsing failed. Error', ex)
        })
    }

    // const restaurantMatches = restaurants.map((restaurants) => {
    //     <div>
            
    //     </div>
    // })

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
                {}
            </div>
        </div>
    )
}

export default Home;