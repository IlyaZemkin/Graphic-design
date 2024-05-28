import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import './login.css';
import forma1 from '../assets/blogpost/15.png';

export default class Login extends Component {
  render() {
    return (
      <>
        <head>
            <link rel="stylesheet" href="login.css" />
            <link href='https://unpkd.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        </head>

<br></br>
        <Container style={{ width: '500px'}} className="mt-5">
        <body>
            <div className="wrapper">
                <p>
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <i class='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <i class='bx bxs-lock-alt'></i>
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Remember me </label> <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit" className="btn">Login</button>

                    <div className="register-link">
                        <p>Don`t have an account? <a href="#">Register</a></p>
                    </div>
                </form>
                </p>
            </div>
        </body>
      </Container>
      </>
    )
  }
}
