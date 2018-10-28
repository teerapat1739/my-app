import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'

//component
import Sidebar from '../../components/Sidebar'
import BoxForm from '../../components/BoxForm'
class General extends Component {
    render() {
        return (
            <Sidebar>
                <BoxForm>
                <div class="p-left">
                    <strong>{this.props.email}</strong>
                    <div class="header-general">Language</div>
                    <div class="styled-select rounded">
                        <select>
                            <option>English</option>
                            <option>French</option>
                            <option>German</option>
                            <option>Japanese</option>
                            <option>Chinese</option>
                            <option>Korean</option>
                            <option>Thai</option>
                        </select>
                    </div>
                    <div class="header-general">Privacy</div>
                    <div class="styled-select rounded">
                    <label class="text-radio">Public
                        <input type="radio" checked="checked" name="radio"/>
                        <span class="checkmark"></span>
                    </label>
                    <label class="text-radio">Private
                        <input type="radio" name="radio"/>
                        <span class="checkmark"></span>
                    </label>
                    </div>
                </div>
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