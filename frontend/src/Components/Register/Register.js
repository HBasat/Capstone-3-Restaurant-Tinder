import axios from 'axios'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import { baseUrl } from '../../Shared/baseUrl'
import logo from '../../Images/logo.png'

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',

            emailError: '',
            passwordError: '',
            confirmPasswordError: ''
        }
        
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        let emailError = "";
        const data = {username: this.state.username, password: this.state.password, confirmPassword: this.state.confirmPassword, role: 'USER'}
        
        
        const isValid = this.validate();
        if (isValid) {
            try{
                axios.post(baseUrl + "/register", data);
            } catch(error) {
                emailError = "This email has already been registered.";
                this.setState({ emailError });
            }
        }
    }

    validate = () => {
        let emailError = "";
        let passwordError = "";
        let confirmPasswordError = "";


        // Comparisons for validations 
        if (!this.state.username.includes("@")) {
          emailError = "Email is invalid.";
        }

        // checks if there is a user in the database with this email only. 
        // if it returns FALSE, there is NOT an existing user and a new account CAN be registered.
        // if it returns TRUE, there IS an existing user and a new account CANNOT be registered.

        // no ! ........ register error. this is with sql statement
        // with ! ...... no register error, lets you keep making with same credientials. this is with sql statement

        // no ! ........ register error. this is WITHOUT sql statement (other method)
        // with ! ...... no register error, lets you keep making with same credientials. this is WITHOUT sql statement (other method)
        /*

        axios.get(`http://localhost:8081/verify/${username}`)
        .then(resp => {
            if(resp.data) emailError = "This email has already been registered.";
        });
        
        if((axios.get(`http://localhost:8081/verify/${username}`))){
            emailError = "This email has already been registered.";
        } 
        */ 


        if(this.state.password.length <= 7){
            passwordError = "Password must be minimum 8 characters.";
        }
        else if(!this.state.password.match(/\d+/)){
            passwordError = "Password does not contain a number.";
        }
        else if(!this.state.password.match(/[A-Z]/)){
            passwordError = "Password does not contain an uppercase letter.";
        }
        else if(!this.state.password.match(/[a-z]/)){
            passwordError = "Password does not contain a lowercase letter.";
        }

        if (!this.state.password === this.state.confirmPassword){
            confirmPasswordError = "Passwords do not match.";
        }
        
    
        if (emailError || passwordError || confirmPasswordError) {
          this.setState({ emailError, passwordError, confirmPasswordError});
          return false;
        } else return true;
      }

    render(){
        return(
            <div className="access-container">
                <div className="access-box">
                    <h1 className="access-header">Create Account</h1>
                    <label class="sr-only">Username</label>
                    <input className="username-input"
                        type="text"
                        id="username"
                        name="username"
                        class="form-control"
                        placeholder="Email"
                        v-model="user.username"
                        onChange={this.handleInputChange}
                        required
                    />

                    <div style={{ fontSize: 12, color: "red" }}> {this.state.emailError} </div>


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

                    <div style={{ fontSize: 12, color: "red" }}> {this.state.passwordError} </div>


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

                    <div style={{ fontSize: 12, color: "red" }}> {this.state.confirmPasswordError} </div>


                    <span className='button-span'>
                    <Link style={{color:'#5f3c40'}} to="/login">Have an account?</Link>
                    <button className="button-signin" type="submit" onClick={this.handleSubmit}>Create Account</button>
                    </span>
            </div>
            <div className='logo-container2'>
                <div className='logo-overlay'>
                    <img className='logo-image'src={logo} alt='logo'/>
                    <p className='logo-catchphrase'>Where Food and Friends Meet!</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Register;