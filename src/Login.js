import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = (event) => {
        event.preventDefault();  //this stops the refresh

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirecting
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault();  //this stops the refresh
        
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //created user and logged in
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing in you agree to
                </p>
                <button onClick={register} className="login__registButton">Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login
