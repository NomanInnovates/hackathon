import useLogin from "./useLogin"
import React from 'react'
import './Login.css'
import { Container } from "react-bootstrap";

function Login() {

        const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!');
      };
    const  [setEmail,setPasword ,doLoginUser] = useLogin()
    return (
        <div className="login-section">
            <Container>
           <form onSubmit={handleOnSubmit}>
          <h4>Welcome Back!</h4>
          <div className='form-group row'>
            <input className='input' type='text' placeholder='Email'  onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='form-group row'>
            <input className='input' type='password' placeholder='Password'  onChange={(e) => setPasword(e.target.value)} />
          </div>
          <div className='form-group row'>
            <button onClick={doLoginUser} className='btnL' type='submit'>Log In</button>
          </div>

        </form>
        </Container>
        </div>
    )
}

export default Login
