import React, { Component } from 'react';
import '../style.css';
import { AUTH_TOKEN } from '../constants'
import {
    Redirect
} from 'react-router-dom';
// import { Mutation } from 'react-apollo'
// import gql from 'graphql-tag'

// const SIGNUP_MUTATION = gql`
//   mutation SignupMutation($email: String!, $password: String!, $name: String!) {
//     signup(email: $email, password: $password, name: $name) {
//       token
//     }
//   }
// `

// const LOGIN_MUTATION = gql`
//   mutation LoginMutation($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//     }
//   }
// `

class Login extends Component {
    render() {
        return (
            <Auth />
        );
    }
}

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}


class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // fullName: null,
            email: null,
            password: null,
            errors: {
                // fullName: '',
                email: '',
                password: '',
            },
            redirect: false
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            // case 'fullName':
            //     errors.fullName =
            //         value.length < 5
            //             ? 'Full Name must be 5 characters long!'
            //             : '';
            //     break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors) && this.state.email !== null && this.state.password !== null) {
            this.setState({ redirect: true })
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }

    render() {
        const { errors, redirect, } = this.state;
        if (redirect) {
            return <Redirect push to="/Initial" />
        }
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2>Login</h2>
                    <form onSubmit={this.handleSubmit} noValidate>
                        {/* <div className='fullName'>
                            <label htmlFor="fullName">Full Name</label>
                            <input type='text' name='fullName' onChange={this.handleChange} noValidate />
                            {errors.fullName.length > 0 &&
                                <span className='error'>{errors.fullName}</span>}
                        </div> */}
                        <div className='email'>
                            <label htmlFor="email">Email</label>
                            <input type='email' name='email' onChange={this.handleChange} noValidate />
                            {errors.email.length > 0 &&
                                <span className='error'>{errors.email}</span>}
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' onChange={this.handleChange} noValidate />
                            {errors.password.length > 0 &&
                                <span className='error'>{errors.password}</span>}
                        </div>
                        {/* <div className='info'>
                            <small>Password must be eight characters in length.</small>
                        </div> */}
                        <div className='submit'>
                            <button onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default Login;