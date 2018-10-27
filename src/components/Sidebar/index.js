import React, { Component } from 'react'
import './index.css'
import styled from "styled-components";


const HeaderNavbar = styled.div`
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    background-color: #FC466B;
    position: fixed;
    height: 60px!important;
`

const Content = styled.div`
    margin: 0 auto;
    display: block;
    height: 100%;
    margin-top: 60px;
`


class SelectLanguage extends Component {
    render() {
        return (
            <div>
                <HeaderNavbar>
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
                    <Content>
                        <div>{this.props.children}</div>
                    </Content>
                </HeaderNavbar>
            </div>
        )
    }
}

export default SelectLanguage;