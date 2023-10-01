
import React, { useState } from "react";

import navigate from "react-router-dom";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import './Login.css'


export default function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };
  
    function validateForm() {
  
      return email.length > 0 && password.length > 0;
  
    }
  
    function handleSubmit(event) {
  
      event.preventDefault();
  
    }
  
    return (
  
      <div className="Login">

        <div className="form">
        <Form onSubmit={handleSubmit}>
  
  <Form.Group size="lg" controlId="email" className="input">

    <Form.Label>Email</Form.Label>

    <Form.Control

      autoFocus

      type="email"

      value={email}

      onChange={(e) => setEmail(e.target.value)}

    />

  </Form.Group>

  <Form.Group size="lg" controlId="password" className="input">

    <Form.Label>Password</Form.Label>

    <Form.Control

      type="password"

      value={password}

      onChange={(e) => setPassword(e.target.value)}

    />

  </Form.Group>

  <Button block size="lg" type="submit" disabled={!validateForm()} className="mb-2">

    Login

  </Button>
  
  
  
</Form>
<div className="newAccount">
    <p>Don't have an account? <a href="./signup" >
             Create an account
        </a></p>

</div>

        </div >

       

      </div>
  
    );
  
  }