import { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addToken, addUser} from '../../Redux/actionCreators'
import {baseUrl} from '../../Shared/baseUrl'
import axios from 'axios'
import logo from '../../Images/logo.png'



const mapDispatchToProps = (dispatch) => ({
    addToken: () =>  dispatch(addToken()),
    addUser: () => dispatch(addUser()) 
});

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    

    handleLogin = async () => {
        const data = { username: this.state.username, password: this.state.password };
        

        const userWithToken = await axios.post(baseUrl + '/login', data)

        
        await this.props.dispatch(addToken(userWithToken.data.token))
        await this.props.dispatch(addUser(userWithToken.data.user));
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className='login'>
                <div className='access-container'>
                    <div className='access-box'>
                        <h1 className='access-header'>Please Sign In</h1>
                        <label class="sr-only">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            class="form-control"
                            placeholder="Email"
                            v-model="user.username"
                            onChange={this.handleInputChange}
                            required
                        />
                        <label class="sr-only">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            class="form-control"
                            placeholder="Password"
                            v-model="user.password"
                            onChange={this.handleInputChange}
                            required
                        />
                        <span className='button-span'>
                        <Link style={{color:'#5f3c40'}} to="/register" >Need an account?</Link>
                        <button className='button-signin' type="submit" onClick={this.handleLogin}>Sign in</button>
                        </span>
                    </div>
                    <div className='logo-container'>
                        <div className='logo-overlay'>
                            <img className='logo-image'src={logo} alt='logo'/>
                            <p className='logo-catchphrase'>Where Food and Friends Meet!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapDispatchToProps)(Login));