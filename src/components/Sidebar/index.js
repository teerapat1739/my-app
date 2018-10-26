import React, { Component } from 'react'
import './index.css'
class SelectLanguage extends Component {
    render() {
        return (
            <div>
                <div class="header"></div>
            <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
            <label for="openSidebarMenu" class="sidebarIconToggle">
                <div class="spinner diagonal part-1"></div>
                <div class="spinner horizontal"></div>
                <div class="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
                <ul class="sidebarMenuInner">
                <li>General</li>
                <li>Security</li>
                </ul>
            </div>
            <div id='center' class="main center">
                <div class="mainInner">
                <div>PURE CSS SIDEBAR TOGGLE MENU</div>
                </div>
                <div class="mainInner">
                <div>PURE CSS SIDEBAR TOGGLE MENU</div>
                </div>
                <div class="mainInner">
                <div>{this.props.children}</div>
                </div>
            </div>
            </div>
        )
    }
}

export default SelectLanguage;