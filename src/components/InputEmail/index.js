import React, { Component } from 'react'
import styled from "styled-components";

const Input = styled.input`
    display: block;
    width: 309px;
    height: 35px;
    margin: 15px auto;
    background: #fff;
    border: 0px;
    padding: 5px;
    font-size: 16px;
    border: 2px solid #fff;
    transition: all 0.3s ease;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
  `;


class Login extends Component {
    render () {
        return(
            <div>
               <Input type="email" placeholder="Enter your email" />
            </div>
        )
    }
}

export default Login;
