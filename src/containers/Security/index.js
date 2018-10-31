import React, { Component } from 'react'

import Sidebar from '../../components/Sidebar'
import BoxForm from '../../components/BoxForm'
import styled from "styled-components"
import { connect } from 'react-redux'
import { saveChangePasswordUser, deleteUserAccount } from '../../redux/actions/user'


const Box = styled.div`
    width: 500px;
    height: 200px;
    background: #1abc9d;
    margin: 0px auto;
    padding-top: 20px;
    text-align: center;

    @media (max-width: 768px) {
        width: 100%;
    }

`;


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

    @media (max-width: 768px) {
        width: 400px;
    }
  `;

const Form = styled.div`
    height: auto;
    background: #edeff1;
    margin: 0px auto;
    padding: 10px 10px 10px 20px;
    border-radius: 10px;
    text-align: center;
    font-size: 15px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`

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

    @media (max-width: 768px) {
        font-size: 10px;
        width: 250px;
    }
`

class Security extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        }
    }

    componentWillMount () {
       if(localStorage.getItem('login') === 'false') {
            this.props.history.push('/login')
        }
    }

    onChangeCurrentPassword = (event) => {
        this.setState({
            currentPassword: event.target.value
        })
    }

    onChangeNewPassword = (event) => {
        this.setState({
            newPassword: event.target.value
        })
    }

    onChangeNewPasswordConfirm = (event) => {
        this.setState({
            confirmNewPassword: event.target.value
        })
        console.log(this.state.confirmNewPassword);

    }

    handleSubmit = async (event) => {
        event.preventDefault();
        if(this.state.confirmNewPassword === this.state.newPassword) {
            const data = {
                password: this.state.currentPassword,
                newPassword: this.state.newPassword,
                email: this.props.email
            }
            console.log(data)
            try {
                const result = await this.props.saveChangePasswordUser(data)
                console.log(result)
                if(localStorage.getItem('login') === 'false')
                {
                    this.props.history.push('/login')
                } else {
                    this.props.history.push('/')
                }
            } catch (error) {
                console.log(error)
            }

        } else {
            alert('new password not match')
        }
    }

    onClickDeleteAccount = async (event) => {
        event.preventDefault()
        try {
            const result = await this.props.deleteUserAccount({
                email: this.props.email
            })
            if(localStorage.getItem('login') === 'false')
            {
                this.props.history.push('/login')
            } else {
                this.props.history.push('/')
            }
        } catch (error) {
            console.log(error)

        }
    }

    render() {
        return (
        <Sidebar>
            <BoxForm>
                <form onSubmit={this.handleSubmit}>
                    <div class="header-general">Current password of {this.props.email}</div>
                    <Input
                        type="password"
                        value={this.state.currentPassword}
                        onChange={this.onChangeCurrentPassword}
                        placeholder="Enter password"
                    />
                    <div class="header-general">New Password</div>
                    <Input
                        type="password"
                        value={this.state.newPassword}
                        onChange={this.onChangeNewPassword}
                        placeholder="Enter password"
                    />
                    <Input
                        type="password"
                        value={this.state.confirmNewPassword}
                        onChange={this.onChangeNewPasswordConfirm}
                        placeholder="Enter password"
                    />
                    <Submit
                        type="submit"
                        value="Save"
                        onClick={this.handleSubmit}
                     />
                </form>
            </BoxForm>
            <Box>
                <Form>
                    <div class="describeDeletAccount">
                        <p>
                            Once the deletion process begins,
                            you won't be able to access your
                            account or retrieve any of the
                            settings you have changed
                        </p>
                    </div>

                   <Submit
                        type="submit"
                        value="Delete this Account"
                        onClick={this.onClickDeleteAccount}
                        />
                </Form>
            </Box>
        </Sidebar>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.auth);

    return {
        email: state.auth.data
    }
}

const mapDispatchToProps = (dispatch) => ({
    saveChangePasswordUser: (data) => dispatch(saveChangePasswordUser(data)),
    deleteUserAccount: (data) => dispatch(deleteUserAccount(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(Security);