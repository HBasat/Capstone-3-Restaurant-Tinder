import axios from 'axios'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import { baseUrl } from '../../Shared/baseUrl'

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        }
        
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const data = {username: this.state.username, password: this.state.password, confirmPassword: this.state.confirmPassword, role: 'USER'}
        if(this.state.password === this.state.confirmPassword){
            axios.post(baseUrl + "/register", data)
        }else{
            alert("Password and Confirm Password must match!!!")
        }
    }

    render(){
        return(
            <div className="register-container">
                <div className="register-box">
                    <h1 className="create-account">Create Account</h1>
                    <label class="sr-only">Username</label>
                    <input className="username-input"
                        type="text"
                        id="username"
                        name="username"
                        class="form-control"
                        placeholder="Username"
                        v-model="user.username"
                        onChange={this.handleInputChange}
                        required
                    />
                    <label class="sr-only">Password</label>
                    <input className="password-input"
                        type="password"
                        id="password"
                        name="password"
                        class="form-control"
                        placeholder="Password"
                        v-model="user.password"
                        onChange={this.handleInputChange}
                        required
                    />
                    <input className="confirm-password-input"
                        type="password"
                        id="password-confirm"
                        name="confirmPassword"
                        class="form-control"
                        placeholder="Confirm Password"
                        v-model="user.password"
                        onChange={this.handleInputChange}
                        required
                    />
                <Link to="/login">Have an account?</Link>
                <button className="button-signin" type="submit" onClick={this.handleSubmit}>Create Account</button>
            </div>
        </div>
        )
    }
}

export default Register;