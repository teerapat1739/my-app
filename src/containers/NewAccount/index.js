import React, { Component } from 'react'
import styled from "styled-components";
import './index.css'

const Box = styled.div`
    width: 800px;
    height: 340px;
    background: #1abc9d;
    margin: 0px auto;
    padding-top: 80px;

    @media (max-width: 700px) {
        background: palevioletred;
    }
`;

const Form = styled.div`
    width: 400px;
    height: 300px;
    background: #edeff1;
    margin: 0px auto;
    padding-top: 20px;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
`

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

const Submit = styled.input`
    display: block;
    background: #1abc9d;
    width: 314px;
    padding: 12px;
    cursor: pointer;
    color: #fff;
    border: 0px;
    margin: auto;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    font-size: 17px;
    transition: all 0.3s ease;

    &:hover {
        background: #09cca6
    }
`
class NewAccount extends Component {
    render() {
        return (
            <Box>
                <Form>
                    <Input type="email" placeholder="Enter your email" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Password" />
                    <Submit type="submit" value="Register" />
                </Form>
            </Box>
        )
    }
}

export default NewAccount;