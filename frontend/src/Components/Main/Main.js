import {Component} from 'react'
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import {addToken, deleteUser} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Linker from "../Home/Linker"
import React from 'react'
import Invite from "../Home/Invite"

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())}
});

class Main extends Component {
    constructor(props){
        super(props);
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }

    render(){
        return(
            <div className='hero-image'>
                {this.props.token.token !== undefined ?
                       <div className='navbar'>
                       <h1 className='title'>FoodMatch</h1>
                       <Link classname='home' style={{color: '#d5b391'}} to='/home'>Home</Link>
                       <p className='divider' style={{color: '#d5b391'}}> | </p>
                       <Link classname='logout' style={{color: '#d5b391'}} to='/login' onClick={this.handleLogout}>Logout</Link> 
                       <Redirect to='/home'/>
               
                   </div>  
               : 
                   <div className='navbar'>
                       <h1 className='title'>FoodMatch</h1>
                       <Link className='home-button' style={{color: '#d5b391'}} to='/login'>Home </Link>
                   </div>
                }
                <Switch>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                    <Route path='/Linker' component={() => <Linker />}/>
                    <Route path='/Invite' component={Invite} />
                    <Redirect to='/login'/>
                </Switch>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));