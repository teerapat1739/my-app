import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import styled from "styled-components";

//component
import Sidebar from '../../components/Sidebar'
import BoxForm from '../../components/BoxForm'

const Submit = styled.input`
    display: block;
    background: #1abc9d;
    width: 314px;
    padding: 12px;
    cursor: pointer;
    color: #fff;
    border: 0px;
    margin: 20px auto;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    font-size: 17px;
    transition: all 0.3s ease;

    &:hover {
        background: #09cca6
    }
`
class General extends Component {
    constructor(props) {
    super(props);
    this.state = {
            language: 'thai',
            privacy: 0
            //public --> 1
        };

    this.handleLanguageChange = this.handleLanguageChange.bind(this)
    this.handlePrivacyChange = this.handlePrivacyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleLanguageChange(event) {
        this.setState({language: event.target.value})
    }

    handlePrivacyChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault();
    }


    render() {
        return (
            <Sidebar>
                <BoxForm>
                    <form onSubmit={this.handleSubmit}>
                        <div class="p-left">
                            <strong>{this.props.email}</strong>
                            <div class="header-general">Language</div>
                            <div class="styled-select rounded">
                                <select value={this.state.language} onChange={this.handleLanguageChange}>
                                    <option value="english">English</option>
                                    <option value="french">French</option>
                                    <option value="german">German</option>
                                    <option value="jappanese">Japanese</option>
                                    <option value="chinese">Chinese</option>
                                    <option value="korean">Korean</option>
                                    <option value="thai">Thai</option>
                                </select>
                            </div>
                            <div class="header-general">Privacy</div>
                            <div class="styled-select rounded">
                            <label class="text-radio">Public
                                <input
                                    type="radio"
                                    checked="checked"
                                    checked={this.state.privacy === 1}
                                    value="public"
                                    name="radio"
                                    onChange={this.handlePrivacyChange}
                                />
                                <span class="checkmark"></span>
                            </label>
                            <label class="text-radio">Private
                                <input
                                    type="radio"
                                    value="private"
                                    name="radio"
                                    onChange={this.handlePrivacyChange}
                                    checked={this.state.privacy === 0}
                                />
                                <span class="checkmark"></span>
                            </label>
                            <Submit
                                type="submit"
                                value="SaveChanges"
                            />
                            </div>
                        </div>
                    </form>
                </BoxForm>
            </Sidebar>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        email: state.auth.data
    }
}

export default connect(mapStateToProps)(General);