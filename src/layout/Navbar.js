import React, { Component, useReducer, useContext, Fragment } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../stylesheets/navbar.scss'

// redux stuff
import { connect } from 'react-redux'
import store from '../redux/store'
import { handleLogOut } from '../redux/actions/actions'


class Navbar extends Component {

    render(){
        // const auth = localStorage.auth_token ? true : false;
        return(
        <div className="navbar">
            <div className="brand">SoftBuilders</div>
            <div className="links">
            { this.props.authenticated ? 
            <Fragment>
                <Link className="my-projects" to="/myprojects"> My Projects </Link> <button onClick={() => this.props.logout()} > Logout </button>
            </Fragment>
            :
            <Fragment>
                <Link className="signin" to="/" > SIGN IN </Link>
                <Link className="signup" to="/signup"> SIGN UP </Link>
            </Fragment>
            }
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { authenticated: state.authenticated };
  };

  function mapDispatchToProps(dispatch) {
    return {
      logout: article => dispatch(handleLogOut())
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)