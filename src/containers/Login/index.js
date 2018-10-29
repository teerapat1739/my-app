import React, { Component } from 'react'
import styled from "styled-components";
// import './index.css'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/auth'

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
    margin-bottom: 10px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    font-size: 17px;
    transition: all 0.3s ease;

    &:hover {
        background: #09cca6
    }
`

const Header = styled.h1`
    color: #fff;
    text-align: center;
    font-family: Arial;
    font-weight: normal;
    margin: 2em auto 0px;
`
class NewAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    componentWillMount() {
        if(localStorage.getItem('login')) {
            this.props.history.push('/')
        }
    }
    onChangeEmail = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
    }

    onChangePassword = (e) => {
        const password = e.target.value
        this.setState(() => ({ password }))
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        alert(this.state.password)
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        try {
            const result = await this.props.login(data)
            console.log(result)
            this.props.history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    onCreateNewAccount = (event) => {
        event.preventDefault();
        this.props.history.push('/register')
    }
    render() {
        return (
            <Box>
                 <Header>Fancy App</Header>
                <Form>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                    <Submit
                        type="submit"
                        value="Login"
                        onClick={this.onSubmit}
                    />
                </form>
                <Submit
                    type="submit"
                    value="Create NewAccount"
                    onClick={this.onCreateNewAccount}
                 />
                </Form>
            </Box>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(login(data))
})

export default connect(undefined, mapDispatchToProps)(NewAccount);