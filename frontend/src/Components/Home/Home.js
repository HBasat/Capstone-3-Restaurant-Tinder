import {Link} from 'react-router-dom'

function Home(props) {
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
                        // onChange=
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;