import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { toastError } from '../lib/toastError';
import { useNavigate, Navigate } from 'react-router-dom';






const SignUp = ({ isAuth, setGotCookie }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    
  });
  const [result, setResult] = useState(null);

  const handleSubmit = (event) =>
  {
    event.preventDefault();
    const {status } = axios
    .post('https://searchandoffer.onrender.com/api/user/register', {...state})
    .then(response => {
        setResult(response.data);
        setState({name:'' , email :'' , password: ''});
    })
    .catch(() => {
        setResult({success:false , message: 'something is wrong'})
    })

    if (status ===201) setGotCookie(true);
    else (toastError('No cookie from server'))
    console.log('submit');
    console.log(state)
  }

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  if (isAuth) return <Navigate to='/' />;
  
return (

    <div className='container mt-5'>
        <form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter a unique username please"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
          />
          </Form.Group>
          <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={state.password}
            placeholder="Enter your password"
            onChange={onInputChange}
          />
          </Form.Group>
          <Button  type="submit" className=' submit-signup m-3 px-2 text-center  '>
            
          Register
        </Button>
        <Button variant="danger" type="submit" className='m-3 px-2 text-center '>
            
            Cancel
          </Button>

        </form>
    </div>
);

};

export default SignUp;