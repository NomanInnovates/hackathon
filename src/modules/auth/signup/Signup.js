import useSignup from "./UseSignup"
import React from 'react'
import './Signup.css'
import { Container } from "react-bootstrap";

function Signup() {
        const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!');
      };
    const  [setEmail,setFnum,setCity,setCountry,setPasword,setconfirmPassword ,doLoginUser] = useSignup()
    return (
        <div className="signup-section">
            <Container>
           <form onSubmit={handleOnSubmit}>
          <h4>Register Now!</h4>
          <div className='form-group row'>
            <input className='input' type='text' placeholder='Email'  onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='form-group row'>
            <input className='input' type='number' placeholder='Phone'  onChange={(e) => setFnum(e.target.value)} />
            </div>
            <div className='form-group row'>
            <input className='input' type='text' placeholder='City'  onChange={(e) => setCity(e.target.value)} />
          </div>
            <div className='form-group row'>
            <input className='input' type='text' placeholder='Country'  onChange={(e) => setCountry(e.target.value)} />
            </div>
          <div className='form-group row'>
            <input className='input' type='password' placeholder='Password'  onChange={(e) => setPasword(e.target.value)} />
          </div>
          <div className='form-group row'>
            <input className='input' type='password' placeholder='Confirm Password'  onChange={(e) => setconfirmPassword(e.target.value)} />
          </div>
          <div className='form-group row'>
            <button onClick={doLoginUser} className='btnL' type='submit'>Sign In</button>
          </div>

        </form>
        </Container>
        </div>
    )
}

export default Signup