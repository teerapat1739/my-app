import React, { Component } from 'react'
import styled from "styled-components";
import './index.css'

import { connect } from 'react-redux'
import { login, saveUser } from '../../redux/actions/auth'
import moment from 'moment'

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
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pasword: '',
            confirmPassword: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeEmail = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
    }

    onChangePassword = (e) => {
        const password = e.target.value
        this.setState(() => ({ password }))
    }

    onChangeConfirmPassword = (e) => {
        const confirmPassword = e.target.value
        this.setState(() => ({ confirmPassword }))
    }

    onSubmit = () => {
        if (this.state.password === this.state.confirmPassword) {
            const data = {
                save: moment().format(),
                email: this.state.email,
                password: this.state.password,
            }
            // alert(data.email)
            // this.props.login(data)
            this.props.saveUser(data)
        } else{
            alert('password not match')
        }

    }

    render() {
        return (
            <Box>
                <Form>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        autoFocus
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={this.state.confirmPassword}
                        onChange={this.onChangeConfirmPassword}
                    />
                    <Submit
                        type="submit"
                        value="Register"
                        onClick={this.onSubmit}
                    />
                </Form>
            </Box>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(login(data)),
    saveUser: (data) => dispatch(saveUser(data))
});

export default connect(undefined, mapDispatchToProps)(NewAccount);